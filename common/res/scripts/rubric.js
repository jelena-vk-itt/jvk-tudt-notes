

//======================================================================================================
//================================= GLOBAL DATA ========================================================
//======================================================================================================
const RUBRIC_ITEM_DATA_SEPARATOR="+++";
const RUBRIC_ITEM_DATA_LENGTH = 3;
const RUBRIC_ITEM_DATA_DESCRIPTION =
      "Rubric item information should consist of a rubric item description, min marks and max marks, separated by " + RUBRIC_ITEM_DATA_SEPARATOR + ", e.g.\n\n" + 
      "Quality of user experience" + RUBRIC_ITEM_DATA_SEPARATOR + "0" + RUBRIC_ITEM_DATA_SEPARATOR + "10\n" +
      "Program runs without errors" + RUBRIC_ITEM_DATA_SEPARATOR + "0" + RUBRIC_ITEM_DATA_SEPARATOR + "15";
const TA_KEY_INSTRUCTIONS = "Press Ctrl+SPACE or click anywhere outside of the editing box to save. Press ESC to cancel.";

//======================================================================================================
//================================= GLOBAL HELPER FUNCTIONS ============================================
//======================================================================================================

function create_text_area(cols, rows, placeholder, value) {
    let newElement = document.createElement("textarea");
    newElement.cols = cols;
    newElement.rows = rows;
    newElement.placeholder = placeholder;
    newElement.value = value;
    return newElement;
}

function create_button(name) {
    let newElement = document.createElement("button");
    newElement.type = "button";
    newElement.innerHTML = name;    
    return newElement;
}

function create_number_input_element(min, max, tab_index=0) {
    let nie = document.createElement("INPUT");
    nie.type = "number";
    nie.step = "0.5";
    nie.style.width = ExtensibleTable.prototype.VCOL_CONTENTS_WIDTH;
    nie.style.maxWidth = ExtensibleTable.prototype.VCOL_CONTENTS_WIDTH;
    nie.min = min;
    nie.max = max;
    nie.value = max;
    nie.tabIndex = tab_index;
    return nie;
}


function insert_header_cell(row, pos = null) {
    let tc = document.createElement("TH");
    if (pos == null) {
	row.insertBefore(tc, null);
    } else {
	row.insertBefore(tc, row.cells[pos]);
    }
    return tc;
}

// restrict editing to one element
let editingElement = null;
function make_element_editable(element, event_type = "dblclick", 
			       stop_editing_function = function(ta) {
				   return { close: true, value: ta.value };
			       }, start_editing_function = function(element) {
				   return { isPlaceholder: false, value: element.innerHTML};
			       }) {
    element.addEventListener(event_type, function() {
	event.stopPropagation();
	let innerHTML = element.innerHTML;
	if (!editingElement) {
	    let data = start_editing_function(element);
	    let ta = create_text_area(data.width ? data.width : 20,
				      data.height ? data.height : 10,
				      data.isPlaceholder ? data.value : "",
				      data.isPlaceholder ? "" : data.value);
	    element.innerHTML = "";
	    element.insertBefore(ta, null);
	    editingElement = element;
	    ta.select();

	    function handleEventDuringCellEdit() {
		if (event.type == "click" && event.target != ta) { processEndOfCellEdit(ta); }
		else if (event.type == "keydown") {
		    if (event.ctrlKey && event.code === "Space") { processEndOfCellEdit(ta); }
		    else if (event.code === "Escape") { closeTextArea(innerHTML); }
		}  
	    }
	    function closeTextArea(value) {
		let parentElement = ta.parentElement;
		parentElement.removeChild(ta);
		parentElement.appendChild(document.createTextNode(value));
		editingElement = null;
		document.body.removeEventListener("click", handleEventDuringCellEdit);
		document.body.removeEventListener("keydown", handleEventDuringCellEdit);
	    }
	    function processEndOfCellEdit(ta) {
		let ret = stop_editing_function(ta);
		if (ret.close) { closeTextArea(ret.value ? ret.value : innerHTML); }
		else { ta.value = ret.value ? ret.value : innerHTML; ta.select(); }
	    }
	    document.body.addEventListener("click", handleEventDuringCellEdit);
	    document.body.addEventListener("keydown", handleEventDuringCellEdit);
	}
    }, );
}

function mk_ptr_zone(element) {
    element.addEventListener("mouseover", function() {
	element.style.cursor = "pointer";
	element.addEventListener("mouseout", function() {
	    element.style.cursor = "default";
	}, { once: true} );
    });				
}


function closest_parent(element, type) {
    let currEl = element.parentElement;
    while(currEl && currEl.tagName != type) {
	currEl = currEl.parentElement;
    }
    return currEl;
}

function capitalise_first(in_str) {
    return in_str[0].toUpperCase() + in_str.slice(1).toLowerCase();
}

function make_lower_camelcase(in_strs) {
    if(!in_strs || !in_strs[0]) { return in_strs; }
    let result = in_strs[0].toLowerCase();
    for (let i = 1; i < in_strs.length; ++i) { result += capitalise_first(in_strs[i]); }
    return result;
}

function recursive_apply(val_arrays, func_to_apply, curr_val_combination = []) {
    if (!val_arrays.length) {
	func_to_apply(...curr_val_combination);
	return;
    }
    Array.prototype.forEach.call(val_arrays[0], function(val) {
	let curr_val_arrays = val_arrays.slice(1);
	curr_val_combination.push(val);
	recursive_apply (curr_val_arrays, func_to_apply, curr_val_combination);
	curr_val_combination.pop();
    });
}

    
//======================================================================================================
// ================================ GENERIC EXTENSIBLE TABLE ===========================================
//======================================================================================================


//-------------------------------------- DATA INITIALISATION  --------------------------------
//--------------------------------------------------------------------------------------------
ExtensibleTable.prototype.UNINITIALISED_CLASSNAME = "uninitialised";

ExtensibleTable.prototype.addRowLabel = "+";
ExtensibleTable.prototype.addColLabel = "+";
ExtensibleTable.prototype.rmRowLabel  = "-";
ExtensibleTable.prototype.rmColLabel  = "-";
ExtensibleTable.prototype.mvRowLabel = "\u2195";
ExtensibleTable.prototype.mvColLabel = "\u2194";

ExtensibleTable.prototype.ACTIONS = ['add', 'rm', 'mv', 'edhdr'];
ExtensibleTable.prototype.ACTIONS_NON_CONTENT = ['add', 'rm', 'mv'];
ExtensibleTable.prototype.ACTIONS_EDITING = ['add', 'edhdr'];
ExtensibleTable.prototype.DIRECTIONS = ['row', 'col'];
ExtensibleTable.prototype.STAGES = ['setup', 'activate', 'start', 'end'];
ExtensibleTable.prototype.STAGES_MANDATORY = ['setup', 'activate', 'start'];

ExtensibleTable.prototype.VCOL_CONTENTS_WIDTH = "3.5em";
ExtensibleTable.prototype.ROW_HEADER_WIDTH = "20em";

// ------- initialise events
recursive_apply([ExtensibleTable.prototype.ACTIONS, ExtensibleTable.prototype.DIRECTIONS], function(action, direction) {
    ExtensibleTable.prototype[make_lower_camelcase([action, direction, "event"])] = (action === "edhdr" ? "dblclick" : "click");
});


//-------------------------------------- CONSTRUCTOR -----------------------------------------
//--------------------------------------------------------------------------------------------

function ExtensibleTable(table) {

    this.table = table;

    this.draggedRow = null;
    this.draggedCol = null;

    let et = this;

    this.addRowEndFunc = function(ta) { et.insertRow(ta.value); return { close: true, value: ta.value } };
    this.addColEndFunc = function(ta) { et.insertCol(ta.value); return { close: true, value: ta.value}  };

    this.rmRowActivateFunc = function(el) { mk_ptr_zone(el); el.addEventListener(et.rmRowEvent, function() { et.table.deleteRow(closest_parent(el, "TR").rowIndex); }) }
    this.rmColActivateFunc = function(el) { mk_ptr_zone(el); el.addEventListener(et.rmColEvent, function() { et.rmCol(closest_parent(el, "TD").cellIndex); }) }

    this.mvRowActivateFunc = function(element) { mk_ptr_zone(element); this.activateMoveElement(element, true); } 
    this.mvColActivateFunc = function(element) { mk_ptr_zone(element); this.activateMoveElement(element, false); } 

    this.edhdrColStartFunc = function(el) { et.textVerticalRevert(el); return { isPlaceholder: false, value: el.innerHTML } }
    this.edhdrColEndFunc = function(ta) { et.textVertical(ta.parentElement); return { close: true, value: ta.value } }

    if (table.classList.contains(this.UNINITIALISED_CLASSNAME)) {
	this.setup();
	this.fromUninitialised = true;
	table.classList.remove(this.UNINITIALISED_CLASSNAME);
    } else {
	this.fromUninitialised = false;
    }
}



//--------------------------------- IN-SCHEME METHODS (USED FOR SETUP AND ACTIVATION) --------
//---------------------------------------------------------------------------------------------------

// -------------- 'in scheme' methods initialised directly

// addRowSetupFunc GROUP1
// addRowActivateFunc GROUP2
ExtensibleTable.prototype.addColStartFunc = function(element) { return { isPlaceholder: true, value: "Enter text for the new heading.\n\n" + TA_KEY_INSTRUCTIONS }; };
// addRowEndFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)

// addColSetupFunc GROUP1
// addColActivateFunc GROUP2
ExtensibleTable.prototype.addColStartFunc = function(element) { return { isPlaceholder: true, value: "Enter text for the new heading.\n\n" + TA_KEY_INSTRUCTIONS }; };
// addColEndFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)

// rmRowSetupFunc GROUP1
// rmRowActivateFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)
// rmRowStartFunc UNDEFINED (NOT APPLICABLE)
// rmRowEndFunc UNDEFINED (NOT APPLICABLE)

// rmColSetupFunc GROUP1
// rmColActivateFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)
// rmColStartFunc UNDEFINED (NOT APPLICABLE)
// rmColEndFunc UNDEFINED (NOT APPLICABLE)

// mvRowActivateFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)
// mvRowSetupFunc GROUP1
// mvRowStartFunc UNDEFINED (NOT APPLICABLE)
// mvRowEndFunc UNDEFINED (NOT APPLICABLE)

// mvColActivateFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)
// mvColSetupFunc GROUP1
// mvColStartFunc UNDEFINED (NOT APPLICABLE) 
// mvColEndFunc UNDEFINED (NOT APPLICABLE)

ExtensibleTable.prototype.edhdrRowSetupFunc = function(el) { el.classList.add("edhdr-row-handle"); el.style.whiteSpace = "pre"; };
// edhdrRowActivateFunc GROUP2
// edhdrRowStartFunc UNDEFINED (DEFAULT USED)
// edhdrRowEndFunc UNDEFINED (DEFAULT USED)

ExtensibleTable.prototype.edhdrColSetupFunc = function(el) { el.classList.add("edhdr-col-handle"); this.textVertical(el); }
// edhdrColActivateFunc GROUP2
// edhdrColStartFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)
// edhdrColEndFunc IN CONSTRUCTOR (AS NEEDS TO BE ASSOCIATED WITH TABLE INSTANCE)


// -------------- 'in scheme' helper methods 

ExtensibleTable.prototype.textVertical = function (el) {
    el.style.lineHeight = this.VCOL_CONTENTS_WIDTH;
    el.style.width = this.VCOL_CONTENTS_WIDTH;
    el.style.maxWidth = this.VCOL_CONTENTS_WIDTH;
    el.style.writingMode = "vertical-lr";
    el.style.transform = "rotate(180deg)";
    el.style.verticalAlign = "top";
};

ExtensibleTable.prototype.textVerticalRevert = function (el) {
    el.style.lineHeight = "";
    el.style.writingMode = "";
    el.style.transform = "";
    el.style.verticalAlign = "";
};

ExtensibleTable.prototype.createModifySetupFunction = function(action, direction, func=null) {
    let nameBase = make_lower_camelcase([action, direction]);
    ExtensibleTable.prototype[nameBase + "SetupFunc"] = function(element) {
	element.innerHTML = this[nameBase + "Label"];
	element.classList.add(action + "-" + direction + "-handle");
	element.style.textAlign = "center";
	element.style.fontSize = "2em";
	element.style.fontWeight = "bold";
	if (func) { func(element); }
    };
};

ExtensibleTable.prototype.createEditActivateFunction = function(action, direction) {
    let nameBase = make_lower_camelcase([action, direction]);
    ExtensibleTable.prototype[nameBase + "ActivateFunc"] = function(element) {
	if (action != "edhdr") { mk_ptr_zone(element); }
	make_element_editable(element, this[nameBase + "Event"], this[nameBase + "EndFunc"], this[nameBase + "StartFunc"]); 
    };
};



// -------------- 'in scheme' group initialisation 
// GROUP1
recursive_apply([ExtensibleTable.prototype.ACTIONS_NON_CONTENT, ExtensibleTable.prototype.DIRECTIONS], ExtensibleTable.prototype.createModifySetupFunction);

// GROUP2
recursive_apply([ExtensibleTable.prototype.ACTIONS_EDITING, ExtensibleTable.prototype.DIRECTIONS], ExtensibleTable.prototype.createEditActivateFunction);


//--------------------------- HELPER METHODS ------------------------------------------------
//-------------------------------------------------------------------------------------------

ExtensibleTable.prototype.modifyCellSetup = function(element, vertical=true) {
    let parent = document.createElement("DIV");
    element.appendChild(parent);
    parent.style.display = "flex";
    parent.style.justifyContent = "space-evenly";
    parent.style.alignItems = "center";
    parent.style.flexDirection = vertical ? "column" : "row";
    let rmElement = document.createElement("DIV");
    parent.appendChild(rmElement);
    let mvElement = document.createElement("DIV");
    parent.appendChild(mvElement);
};

ExtensibleTable.prototype.insertRow = function (row_data, row_number) {
    if (row_number == -1) {
	row_number = this.table.rows.length - 1;
    }
    // header cell
    let row = this.table.insertRow(row_number);
    let headerCell = insert_header_cell(row);
    headerCell.appendChild(row_data[0] ?
			   typeof row_data[0] == "string" ? document.createTextNode(row_data[0]) : row_data[0] :
			   document.createTextNode(""));
    this.edhdrRowSetupFunc(headerCell);
    this.edhdrRowActivateFunc(headerCell);

    // data cells
    let cutOffDataCell = this.table.rows[0].cells.length - 1;
    for (let c = 1; c < cutOffDataCell; ++c) {
	let dataCell = row.insertCell();
	dataCell.appendChild(row_data[c] ?
			     typeof row_data[c] == "string" ? document.createTextNode(row_data[c]) : row_data[c] :
			     document.createTextNode(""));
    }
    
    // modify cell
    let modifyHandleCell = row.insertCell();
    this.modifyCellSetup(modifyHandleCell);
    this.rmRowSetupFunc(modifyHandleCell.firstChild.firstChild);
    this.mvRowSetupFunc(modifyHandleCell.firstChild.lastChild);
    this.rmRowActivateFunc(modifyHandleCell.firstChild.firstChild);
    this.mvRowActivateFunc(modifyHandleCell.firstChild.lastChild);
}

ExtensibleTable.prototype.getCol = function(col_number, include_meta_cells=false) {
    if (col_number == -1) {
	col_number = this.table.rows[0].cells.length - 1;
    }
    let column = [];
    let cutOffRow = this.table.rows.length - 1;
    for (let r = 0; r < cutOffRow; ++r) {
	column.push(this.table.rows[r].cells[col_number]);
    }
    if (include_meta_cells) {
	column.push(this.table.rows[this.table.rows.length - 1].cells[col_number]);
    }
    return column;
}

ExtensibleTable.prototype.insertCol = function(col_data, col_number) {
    if (col_number == -1) {
	col_number = this.table.rows[0].cells.length - 1;
    }
    let headerCell = insert_header_cell(this.table.rows[0], col_number);
    headerCell.appendChild(col_data[0] ?
			   typeof col_data[0] == "string" ? document.createTextNode(col_data[0]) : col_data[0] :
			   document.createTextNode(""));
   
    this.edhdrColSetupFunc(headerCell);
    this.edhdrColActivateFunc(headerCell);

    let cutOffRow = this.table.rows.length - 1;
    for (let r = 1; r < cutOffRow; ++r) {
	let dataCell = this.table.rows[r].insertCell(col_number);
	dataCell.appendChild(col_data[r] ?
			     typeof col_data[r] == "string" ? document.createTextNode(col_data[r]) : col_data[r] :
			     document.createTextNode(""));
    }

    // modify cell
    let modifyHandleCell = this.table.rows[this.table.rows.length - 1].insertCell(col_number);
    this.modifyCellSetup(modifyHandleCell);
    this.rmColSetupFunc(modifyHandleCell.firstChild.firstChild);
    this.mvColSetupFunc(modifyHandleCell.firstChild.lastChild);
    this.rmColActivateFunc(modifyHandleCell.firstChild.firstChild);
    this.mvColActivateFunc(modifyHandleCell.firstChild.lastChild);
};

ExtensibleTable.prototype.rmCol = function(col_number) {
    if (col_number == -1) {
	col_number = this.table.rows[0].cells.length - 1;
    }
    for (let r = 0; r < this.table.rows.length; ++r) {
	this.table.rows[r].deleteCell(col_number);
    }
};


ExtensibleTable.prototype.activateMoveElement = function(element, row) {

    let et = this;
    
    mk_ptr_zone(element);
    
    element.draggable = true;
    if (row) {
	element.addEventListener("dragstart", function() {
	    et.draggedRow = closest_parent(event.target, "TR");
	    et.draggedRow.style.background = "tomato";
	});
	
	element.addEventListener("dragend", function() {
	    if (et.draggedRow) {
		et.draggedRow.style.background = "";
		et.draggedRow = null;
		et.assignTabindexValues();
	    }
	});
	
	let elementRow = closest_parent(element, "TR");
	elementRow.addEventListener("dragover", function() {
	    event.preventDefault();
	});
	
	elementRow.addEventListener("dragenter", function() {
	    if (et.draggedRow) {
		let parent = et.draggedRow.parentNode; 
		let newIndex = this.rowIndex;
		parent.removeChild(et.draggedRow);
		parent.insertBefore(et.draggedRow, et.table.rows[newIndex]);
	    }
	});
	
	elementRow.addEventListener("dragleave", function() {
	});
	
	elementRow.addEventListener("drop", function() {
	});
    } else {
	element.addEventListener("dragstart", function() {
	    et.draggedCol = et.getCol(closest_parent(event.target, "TD").cellIndex, true);
	    et.draggedCol.forEach(function(cell) { cell.style.background = "tomato"; });
	});
	
	element.addEventListener("dragend", function() {
	    if (et.draggedCol) {
		et.draggedCol.forEach(function(cell) { cell.style.background = ""; });
		et.draggedCol = null;
		et.assignTabindexValues();
	    }
	});
	
	et.getCol(closest_parent(element, "TD").cellIndex, true).forEach(function(dataCell) {
	    dataCell.addEventListener("dragover", function() {
		event.preventDefault();
	    });
	    
	    dataCell.addEventListener("dragenter", function() {
		if (et.draggedCol) {
		    let newIndex = this.cellIndex;
		    if (newIndex != et.draggedCol[0].cellIndex) {
			et.draggedCol.forEach(function(dataCell,index) {
			    let parent = dataCell.parentNode; 
			    parent.removeChild(dataCell);
			    parent.insertBefore(dataCell, et.table.rows[index].cells[newIndex]);
			});
		    }
		}
	    });
	    
	    dataCell.addEventListener("dragleave", function() {
	    });
	    
	    dataCell.addEventListener("drop", function() {
	    });
	});
    }
};


//-----------------------------WHOLE TABLE SETUP AND ACTIVATION METHODS ---------------------
//--------------------------------------------------------------------------------------------

// setup to be used only if a table is being made extensible for the first time
ExtensibleTable.prototype.setup = function() {
    // if the table is empty make it 1x1
    if (this.table.rows.length == 0) {
	insert_header_cell(this.table.insertRow());
    }
    
    // create the last row (with modify handles)
    let row = this.table.insertRow();
    let addRowCell = insert_header_cell(row);
    this.addRowSetupFunc(addRowCell);
    
    let numCellsToAdd = this.table.rows[0].cells.length - 1;
    for (let c = 0; c < numCellsToAdd; ++c) {
	let modifyCell = row.insertCell();
	this.modifyCellSetup(modifyCell, false);
    }
    
    // create the last column (with modify handles)
    let addColCell = insert_header_cell(this.table.rows[0]);
    this.addColSetupFunc(addColCell);
    
    let cutOffModRowNum = this.table.rows.length - 1;
    for (let r = 1; r < cutOffModRowNum; ++r) {
	let modifyCell = this.table.rows[r].insertCell();
	this.modifyCellSetup(modifyCell, true);
    }
    
    // activate the header cells for editing
    let r1Cells = this.table.rows[0].cells;
    let cutOffHdrCellNum = r1Cells.length - 1;
    for (let c = 1; c < cutOffHdrCellNum; ++c) {
	this.edhdrColSetupFunc(r1Cells[c]);
    }
    
    let rows = this.table.rows;
    let cutOffHdrRowNum = rows.length - 1;
    for (let r = 1; r < cutOffHdrRowNum; ++r) {
	this.edhdrRowSetupFunc(rows[r].cells[0]);
    }
};

// activate to be used in any case
ExtensibleTable.prototype.activate = function() {
    let handleElements = document.querySelectorAll("[class*=\"-handle\"]");
    for (let e = 0; e < handleElements.length; ++e) {
	for (let cls of handleElements[e].classList.values()) {
	    if (cls.match(/-handle$/)) {
		let parts = cls.split("-");
		let funcName = make_lower_camelcase(parts.slice(0, 2)) + "ActivateFunc";
		this[funcName](handleElements[e]);
	    }
	}
    }

    return this;
};

 

//======================================================================================================
// ================================ RUBRIC FUNCTIONS AND METHODS =======================================
//======================================================================================================
function RubricTable(table) {
    ExtensibleTable.call(this, table);

    let et = this;

    this.addRowStartFunc = function(element) { return { isPlaceholder: true, value: "Enter information for the new rubric item.\n\n" + RUBRIC_ITEM_DATA_DESCRIPTION + "\n\n" + TA_KEY_INSTRUCTIONS, width: 30, height: 15}; };
    ExtensibleTable.prototype.addColStartFunc = function(element) { return { isPlaceholder: true, value: "Enter a new name.\n\n" + TA_KEY_INSTRUCTIONS }; };

    this.addRowEndFunc = function(ta) { return et.rowFromRubricItemString(ta.value, -1) ?  {close: true, value: null} : {close: false, value: ta.value} };
    this.addColEndFunc = function(ta) { et.columnFromName(ta.value, -1); return { close: true, value: null } };

    let colEl = document.createElement("COL");
    table.insertBefore(colEl, table.firstChild);
    colEl.style.width = this.ROW_HEADER_WIDTH;
}

RubricTable.prototype = Object.create(ExtensibleTable.prototype);
RubricTable.prototype.constructor = RubricTable;

// feedback element stuff
RubricTable.prototype.edFdbkLabel = "F";
RubricTable.prototype.edFdbkEvent = "dblclick";
RubricTable.prototype.edFdbkStartFunc = function(el) { return { isFeedback: false, value: el.getAttribute("data-text") }; }
RubricTable.prototype.edFdbkEndFunc = function(ta) {
    let p = ta.parentElement; p.setAttribute("data-text", ta.value + " "); p.style.color = ta.value.trim() ? "black" : "gray"; return { close: true, value: null} ; };

// the init func is for initialising dynamic features (needs to be called after a clone)
RubricTable.prototype.edFdbkInitFunc = function(el) { el.style.color = "gray"; el.setAttribute("data-text", " "); }
// edFdbkSetupFunc:
RubricTable.prototype.createModifySetupFunction("ed", "fdbk", RubricTable.prototype.edFdbkInitFunc);
// edFdbkActivateFunc:
RubricTable.prototype.createEditActivateFunction("ed", "fdbk");


    
RubricTable.prototype.columnFromName = function(name, column_number) {
    if (column_number == -1) {
	column_number = this.table.rows[0].cells.length - 1;
    }
    let colData = [ document.createTextNode(name) ];
    if (this.table.rows.length > 2) {
	if (this.table.rows[0].cells.length == 2) {
	    console.error("Rubric inconsistency: name being added to table with rubric items but without mark information.");
	    return true;
	}
	let prevCol = this.getCol(column_number - 1);
	for (let r = 1; r < prevCol.length; ++r) {
	    let assessmentElement = prevCol[r].firstChild.cloneNode(true);
	    colData.push(assessmentElement);
	    // full setup not needed as assessment element was cloned
	    this.edFdbkInitFunc(assessmentElement.lastChild);
	    this.edFdbkActivateFunc(assessmentElement.lastChild);
	}
    }
    this.insertCol(colData, column_number);
    this.assignTabindexValues();
    return true;
}

RubricTable.prototype.rowFromRubricItemString = function(rubric_item_string, row_number) {
    if (row_number == -1) {
	row_number = this.table.rows.length - 1;
    }
    let ri = this.parseRubricItem(rubric_item_string);
    if (!ri) { return false; }
    if (this.table.rows[0].cells.length == 2) {
	this.columnFromName("MAX", 1);
    }
    let rowData = [ document.createTextNode(ri.name) ];
    let cutOffCol = this.table.rows[0].cells.length - 1;
    for (let c = 1; c < cutOffCol; ++c) {
	let assessmentElement = this.makeAssessmentElement(ri.min, ri.max);
	rowData.push(assessmentElement);
	this.edFdbkSetupFunc(assessmentElement.lastChild);
	this.edFdbkActivateFunc(assessmentElement.lastChild);
    }
  
    this.insertRow(rowData, row_number);
    this.assignTabindexValues();
    return true;
}


RubricTable.prototype.makeAssessmentElement = function(min, max) {
    let divElement = document.createElement("DIV");
    divElement.style.display = "flex";
    divElement.style.flexDirection = "column";
    divElement.style.alignItems = "center";
    divElement.style.justifyContent = "space-evenly";
    divElement.style.height = "100%";
    let niElement = create_number_input_element(min, max);
    divElement.appendChild(niElement);
    let fbElement = document.createElement("SPAN");
    divElement.appendChild(fbElement);
    return divElement;
};

RubricTable.prototype.parseRubricItem = function (item_string) {
    let dataArray = item_string.split(RUBRIC_ITEM_DATA_SEPARATOR);
    if (dataArray.length != RUBRIC_ITEM_DATA_LENGTH) {
	alert("Rubric item '" + dataArray[0] + "' is not in the right format.\n\n" + RUBRIC_ITEM_DATA_DESCRIPTION + "\n\n" + TA_KEY_INSTRUCTIONS);
	return null;
    }

    let min = parseFloat(dataArray[1].trim());
    let max = parseFloat(dataArray[2].trim());
    if (isNaN(min) || isNaN(max)) {
	alert("The min and max marks for rubric item '" + dataArray[0] + "' should be numbers.\n\n" + RUBRIC_ITEM_DATA_DESCRIPTION + "\n\n" + TA_KEY_INSTRUCTIONS);
	return null;
    }

    return { name: dataArray[0], min: min, max: max }
}

RubricTable.prototype.assignTabindexValues = function() {
    let rows = this.table.rows;
    let numRowsLess1 = rows.length - 1;
    let numRowsLess2 = numRowsLess1 - 1;
    let numColsLess1 = rows[0].cells.length - 1;
    for (let r = 1; r < numRowsLess1; ++r) {
	let cells = rows[r].cells;
	for (let c = 1; c < numColsLess1; ++c) {
	    cells[c].childNodes[0].childNodes[0].tabIndex = (c - 1) * numRowsLess2 + r;
	}
    }
}

//======================================================================================================
// ================================ file and data functions ============================================
//======================================================================================================


function bulk_add(rubric_table) {
    let table = rubric_table.table;
    table.hidden = true;
    let tableParent = table.parentElement;
    // let ta1 = create_text_area(20, 20, "Enter the names here e.g.\n\nAmy Aiken\nBilly Blas\nConor Crumb\n", "");
    let ta1 = create_text_area(20, 20, "Enter the names here e.g.\n\nAmy Aiken\nBilly Blas\nConor Crumb\n", "Mister Man\nLady Lovelace\nCheeky Chap\nAmazing Annie\n");
    tableParent.insertBefore(ta1, table);
    // let ta2 = create_text_area(50, 20, "Enter the rubric items here, one item per line.\n\n" + RUBRIC_ITEM_DATA_DESCRIPTION, "");
    let ta2 = create_text_area(50, 20, "Enter the rubric items here, one item per line.\n\n" + RUBRIC_ITEM_DATA_DESCRIPTION, "Kindness+++0+++10\nTrustworthiness+++0+++5\nTimeliness+++0+++1\n");
    tableParent.insertBefore(ta2, table);
    let submitButton = create_button("Submit");
    tableParent.insertBefore(submitButton, table);

    let rubricTable = this;
    submitButton.addEventListener("click", function() {
	ta1.value.split("\n").filter(item => item).forEach(function(item) { rubric_table.columnFromName(item.trim(), -1); });
	ta2.value.split("\n").filter(item => item).forEach(function(item) { rubric_table.rowFromRubricItemString(item, -1); });
	ta1.remove();
	ta2.remove();
	submitButton.remove();
	rubric_table.table.hidden = false;
    });
};



function save_results(module, ca) {

    let partial = true;
    let table = document.querySelector("table.rubric");

    if (!table || !table.rows.length) {
	alert("Table is empty. Nothing to save.");
	return;
    }

    let rows = table.querySelectorAll("tr");
    
    let headerRowCells = rows[0].querySelectorAll("th");
    let totals = new Array(headerRowCells.length - 2).fill(0);
    let resultDocs = new Array(headerRowCells.length - 2).fill((partial ? "" :
								"<!DOCTYPE html><html><head><style>" + 
								"td,th{border:0.5px solid gray;padding:0.5em;}" +
								"th{text-align:left;min-width:15em;white-space:pre}" +
								"td:nth-child(2){text-align:right;border-right:none;padding-right:0;}" +
								"td:nth-child(3){text-align:left;border-left:none;padding-left:0;}" +
								"td:nth-child(4){white-space:pre}" + 
								"table{border-collapse:collapse;}" +
								"</style></head><body>"));
    let names = new Array(headerRowCells.length - 2).fill("");
    for (let h = 1; h < headerRowCells.length - 1; ++h) {
	names[h - 1] = headerRowCells[h].innerHTML.replace(/<br\/?>/, " ");
	resultDocs[h - 1] +=
	    "<h2>" + names[h - 1] + "</h2>" +
	    "<h3>" + module + " CA" + ca + "</h3>" +
	    "<p>Your result for CA" + ca + " is <strong>" + "_____RESULT_PLACEHOLDER_____" + "%</strong>.</p><table" + (partial ? " style=\"border-collapse:collapse;\"" : "") + ">";
    }
    let maxTotal = 0;
    for (let r = 1; r < rows.length - 1; ++r) {
	let rowHeader = rows[r].querySelector("th");
	let rowDataElements = rows[r].querySelectorAll("td");
	for (let d = 0; d < rowDataElements.length - 1; ++d) {
	    resultDocs[d] += "<tr>" +
		"<th" + (partial ? " style=\"border:0.5px solid gray;padding:0.5em;text-align:left;min-width:15em;white-space:pre\"" : "") + ">" + rowHeader.innerHTML + "</th>";
	    let inputElement = rowDataElements[d].querySelector("input");
	    let feedbackElement = rowDataElements[d].querySelector(".ed-fdbk-handle");
	    let feedbackText = feedbackElement.getAttribute("data-text").trim(); 
	    let mark = +inputElement.value;
	    let maxMark = +inputElement.max;
	    totals[d] += mark;
	    if (d == 0) { maxTotal += maxMark; }
	    resultDocs[d] +=
		"<td" + (partial ? " style=\"border:0.5px solid gray;padding:0.5em;text-align:right;border-right:none;padding-right:0;\"" : "") + ">" + mark + "/</td>" +
		"<td" + (partial ? " style=\"border:0.5px solid gray;padding:0.5em;text-align:left;border-left:none;padding-left:0;\"" : "") + ">" + maxMark  + "</td>" +
		"<td" + (partial ? " style=\"border:0.5px solid gray;padding:0.5em;white-space:pre\"" : "") + ">" + feedbackText + "</td></tr>";
	}
    }

    for (let d = 0; d < resultDocs.length; ++d) {
	resultDocs[d] += "</table>";
	resultDocs[d] += partial ? "" : "</body></html>";
	let percentage = totals[d]/maxTotal*100;
	resultDocs[d] = resultDocs[d].replace("_____RESULT_PLACEHOLDER_____", String(percentage.toFixed(2)));	
    }

    for (let d = 0; d < resultDocs.length; ++d) {
	const blob = new Blob([resultDocs[d]], { type: partial ? '' : 'text/html' });
	const fileName = names[d] + ".html";
	let newLink = document.createElement("a");
	newLink.download = fileName;
	if (window.webkitURL != null) {
	    newLink.href = window.webkitURL.createObjectURL(blob);
	}
	else {
	    newLink.href = window.URL.createObjectURL(blob);
	    newLink.style.display = "none";
	    document.body.appendChild(newLink);
	}
	
	newLink.click();
    }
}


function export_to_csv() {
    let csvContents = "";
    
    let table = document.querySelector("table.rubric");
    if (!table || !table.rows.length) {
	alert("Table is empty. Nothing to export.");
	return;
    }
    
    let rows = table.rows;

    // first line (names)
    let cells = rows[0].cells;
    let numCellsLess2 = cells.length - 2;    
    for (let c = 0; c < numCellsLess2; ++c) {
	csvContents += cells[c].textContent;
	csvContents += ",";
    }
    csvContents += cells[numCellsLess2].textContent;
    csvContents += "\n";

    // create an array for the total marks by person (position 0 will hold the max marks)
    let marksArray = new Array(cells.length - 1).fill(0);
    
    // alternating marks and feedback lines, percentage calculation
    let numRowsLess1 = rows.length - 1;
    for (let r = 1; r < numRowsLess1; ++r) {
	cells = rows[r].cells;
	numCellsLess2 = cells.length - 2;
	// marks
	csvContents += "\"" + cells[0].textContent + " (marks)" + "\"";
	csvContents += ",";
	for (let c = 1; c < numCellsLess2; ++c) {
	    csvContents += cells[c].firstChild.firstChild.value;
	    csvContents += ",";
	    marksArray[c] += +cells[c].firstChild.firstChild.value;
	}
	csvContents += cells[numCellsLess2].firstChild.firstChild.value;
	csvContents += "\n";
	marksArray[numCellsLess2] += +cells[numCellsLess2].firstChild.firstChild.value;
	marksArray[0] += +cells[1].firstChild.firstChild.max;
	
	// feedback
	csvContents += "\"" + cells[0].textContent + " (feedback)" + "\"";
	csvContents += ",";
	for (let c = 1; c < numCellsLess2; ++c) {
	    csvContents += "\"" + cells[c].firstChild.lastChild.getAttribute("data-text").trim() + "\"";
	    csvContents += ",";
	}
	csvContents += "\"" + cells[numCellsLess2].firstChild.lastChild.getAttribute("data-text").trim() + "\"";
	csvContents += "\n";
    }

    // percentages
    for (c = 0; c < numCellsLess2; ++c) {
	let percentage = marksArray[c]/marksArray[0]*100;
	csvContents += percentage.toFixed(2);
	csvContents += ",";
    }
    let percentage = marksArray[numCellsLess2]/marksArray[0]*100;
    csvContents += percentage.toFixed(2);
    csvContents += "\n";

    // write the file
    const blob = new Blob([csvContents], { type: 'text' });
    let newLink = document.createElement("a");
    newLink.download = "rubric_backup.csv";
    if (window.webkitURL != null) {
	newLink.href = window.webkitURL.createObjectURL(blob);
    }
    else {
	newLink.href = window.URL.createObjectURL(blob);
	newLink.style.display = "none";
	document.body.appendChild(newLink);
    }
    
    newLink.click();
}


//======================================================================================================
//================================= DOCUMENT INITIALISATION ============================================
//======================================================================================================

    
let rubricTable = new RubricTable (document.querySelector("table.rubric")).activate();

document.querySelectorAll(".export-csv").forEach(function(item) { item.addEventListener("click", export_to_csv); });
document.querySelectorAll(".save-results").forEach(function(item) { item.addEventListener("click", function() {
    save_results(item.getAttribute("data-module-name"), item.getAttribute("data-ca-num")); }); });
document.querySelectorAll(".bulk-table-add").forEach(function(item) { item.addEventListener("click", function() { bulk_add(rubricTable); }); });
