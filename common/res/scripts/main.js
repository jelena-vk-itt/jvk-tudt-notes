
var OPEN_ARTICLES_COOKIE_NAME = "toc_open_articles";
var OPEN_ARTICLES_COOKIE_REGEXP = new RegExp(OPEN_ARTICLES_COOKIE_NAME + "=[^;]*", "g");
var ARTICLE_LIST_ITEM_SELECTOR = ".toc_grp>li";
var ARTICLE_CLOSED_SELECTOR = ARTICLE_LIST_ITEM_SELECTOR + ">p";
var ARTICLE_OPEN_SELECTOR = ARTICLE_LIST_ITEM_SELECTOR + ">article";
var ARTICLE_FORM_SELECTOR = ARTICLE_CLOSED_SELECTOR + ", " + ARTICLE_OPEN_SELECTOR;
var OPEN_ARTICLE_TAG_NAME = "ARTICLE";
var CLOSED_ARTICLE_TAG_NAME = "P";
var CANVAS_TAG_NAME = "CANVAS";
var DETAILS_TAG_NAME = "DETAILS";
var ARTICLE_TAG_NAMES = [OPEN_ARTICLE_TAG_NAME, CLOSED_ARTICLE_TAG_NAME];
var CLICK_PROTECTED_SELECTOR = "a, details, #jsexample, form, .question";

function init_all() {

    init_articles();
    draw_canvases();

    window.addEventListener ("resize", function (e) {
    	draw_canvases();
    });

    var clickTheseToOpenAll = document.getElementsByClassName("openall");
    if (clickTheseToOpenAll) {
	Array.prototype.forEach.call(clickTheseToOpenAll, function(item) {
	    item.addEventListener("click", function (e) {
		open_all();
	    })
	});
    }

    var clickTheseToCloseAll = document.getElementsByClassName("closeall");
    if (clickTheseToCloseAll) {
	Array.prototype.forEach.call(clickTheseToCloseAll, function(item) {
	    item.addEventListener("click", function (e) {
		close_all();
	    })
	});
    }

    var clickTheseToSaveHtml = document.getElementsByClassName("savehtml");
    if (clickTheseToSaveHtml) {
	Array.prototype.forEach.call(clickTheseToSaveHtml, function(item) {
	    item.addEventListener("click", function (e) {
		save_html();
	    })
	});
    }

	    
    var articleContainers = document.querySelectorAll(ARTICLE_FORM_SELECTOR);
    if (articleContainers) {
	Array.prototype.forEach.call(articleContainers, function(item) {
	    item.addEventListener("click", function (e) {
		handle_open_close_article(e);
	    });
	});
    }

    var questions = document.getElementsByClassName("question");
    if (questions) {
	Array.prototype.forEach.call(questions, function(item) {
	    item.addEventListener("mouseover", function(e) {
		item.nextSibling.hidden = false;
	    });
	    item.addEventListener("mouseout", function(e) {
		item.nextSibling.hidden = true;
	    });
	});
    }
    
    var canvases = document.querySelectorAll(DETAILS_TAG_NAME + " " + CANVAS_TAG_NAME);
    if (canvases) {
	Array.prototype.forEach.call(canvases, function(item) {
	    var detailsElement = canvases[0].closest(DETAILS_TAG_NAME); 
	    detailsElement.addEventListener("toggle", function() {
		if (detailsElement.open) {
		    draw_canvas(item);
		}
	    });
	});
    }

    init_specific();
}

function init_specific() {
}

function handle_open_close_article(e) {
   
    if (e.target.closest(CLICK_PROTECTED_SELECTOR)) {
	return;
    }

    if (window.getSelection().toString() != "") {
	return;
    }

    var elementToHide = e.target.closest(ARTICLE_FORM_SELECTOR);
    if (open_close_article(elementToHide)) {
	save_open_close_article_state(elementToHide);
	draw_canvases();
    }
}

function open_close_article(elementToHide) {

    if (!elementToHide) {
	return false;
    }

    var close = elementToHide.tagName == OPEN_ARTICLE_TAG_NAME;
    var elementToShow = elementToHide.parentElement.getElementsByTagName(close ? CLOSED_ARTICLE_TAG_NAME : OPEN_ARTICLE_TAG_NAME)[0];
    if (!elementToShow) {
	return false;
    }
    
    elementToShow.removeAttribute("style");
    elementToHide.setAttribute("style", "display:none");

    return true;
}

function open_all() {
    var elementList = document.querySelectorAll(ARTICLE_CLOSED_SELECTOR);
    Array.prototype.forEach.call(elementList, function(item) {
	open_close_article(item);
    });
    var detElList = document.querySelectorAll("details");
    Array.prototype.forEach.call(detElList, function(item) {
	item.open = true;
    });
}

function close_all() {
    var elementList = document.querySelectorAll(ARTICLE_OPEN_SELECTOR)
    Array.prototype.forEach.call(elementList, function(item) {
	open_close_article(item);
    });
}

function save_html() {

    let elements = document.querySelectorAll("input");
    for (let i = 0; i < elements.length; i++) {
	elements[i].setAttribute("value", elements[i].value);
    }
    elements = document.querySelectorAll("textarea");
    for (let i = 0; i < elements.length; i++) {
	elements[i].innerHTML = elements[i].value;
    }
    elements = document.querySelectorAll("select");
    for (let i = 0; i < elements.length; i++) {
	let val = elements[i].value;
	elements[i].innerHTML = elements[i].innerHTML.replace(/<option[^>]*>/g, "<option>");
	elements[i].innerHTML = elements[i].innerHTML.replace("<option>" + val + "</option>", "<option selected=\"selected\">" + val + "</option>");
    }
    
    let data = "<!DOCTYPE html><html>" + document.documentElement.innerHTML + "</html>";
    // data = data.replace(/<header[\s\S]*<\/header>/, ""); 
    // data = data.replace(/<nav[\s\S]*<\/nav>/, "");
    // data = data.replace(/id=\"content\"/, "id=\"content-no-nav\"");

    // Script copied from: https://www.encodedna.com/javascript/how-to-save-form-data-in-a-text-file-using-javascript.htm
    const textToBLOB = new Blob([data], { type: 'text/html' });
    const sFileName = 'js_a_in_html_lab_sheet_complete.html';	   // The file to save the data.
    
    let newLink = document.createElement("a");
    newLink.download = sFileName;
    
    if (window.webkitURL != null) {
	newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
	newLink.href = window.URL.createObjectURL(textToBLOB);
	newLink.style.display = "none";
	document.body.appendChild(newLink);
    }
    
    newLink.click();
}

function save_open_close_article_state(elementToHide) {

    var close = elementToHide.tagName == OPEN_ARTICLE_TAG_NAME;

    /* save the state into a cookie */
    var id = elementToHide.parentElement.getAttribute("id");
    if (!document.cookie) {
	if (!close) {
	    document.cookie = OPEN_ARTICLES_COOKIE_NAME + "=" + id;
	}
    } else {
	var openArticlesCookieMatches = document.cookie.match(OPEN_ARTICLES_COOKIE_REGEXP);
	
	if (!openArticlesCookieMatches) {
	    if (!close) {
		document.cookie = document.cookie + "; " + OPEN_ARTICLES_COOKIE_NAME + "=" + id;
	    }
	} else if (openArticlesCookieMatches.length > 1) {
	    alert("There's a problem (error code: 1) with remembering the TOC state, but never mind, you can carry on.");
	} else {
	    var openArticleIndicatorRegexp = new RegExp("[=:]" + id + "(?=:|$)", "g");
	    var openArticleIndicatorMatches = openArticlesCookieMatches[0].match(openArticleIndicatorRegexp); 
	    if (!openArticleIndicatorMatches) {
		if (!close) {
		    var newOpenArticlesCookie = null;
		    if (openArticlesCookieMatches[0] == OPEN_ARTICLES_COOKIE_NAME + "=") {
			newOpenArticlesCookie = OPEN_ARTICLES_COOKIE_NAME + "=" + id;
		    } else {
			newOpenArticlesCookie = openArticlesCookieMatches[0].replace(OPEN_ARTICLES_COOKIE_NAME + "=", OPEN_ARTICLES_COOKIE_NAME + "=" + id + ":");
		    }
		    document.cookie = document.cookie.replace(OPEN_ARTICLES_COOKIE_REGEXP, newOpenArticlesCookie);
		}
	    } else if (openArticleIndicatorMatches.length > 1) {
		alert("There's a problem (error code: 2) with remembering the TOC state, but never mind, you can carry on.");
	    } else {
		if (close) {
		    var newOpenArticlesCookie = openArticlesCookieMatches[0].replace(openArticleIndicatorMatches[0], openArticleIndicatorMatches[0].charAt(0));
		    document.cookie = document.cookie.replace(OPEN_ARTICLES_COOKIE_REGEXP, newOpenArticlesCookie);
		}
	    }
	}
    }
}
    
function init_articles() {
    
    var openArticleIds = null;
    if (document.cookie) {
	var openArticlesCookieMatches = document.cookie.match(OPEN_ARTICLES_COOKIE_REGEXP);

	if (openArticlesCookieMatches) {
	    
	    if (openArticlesCookieMatches.length > 1) {
		alert("There's a problem (error code: 3) with remembering the TOC state, but never mind, you can carry on.");
		return;
	    }
	    
	    var nameAndValue = openArticlesCookieMatches[0].split("=");
	    if (nameAndValue.length != 2) {
		alert("There's a problem (error code: 4) with remembering the TOC state, but never mind, you can carry on.");
		return;
	    }
	    
	    openArticleIds = nameAndValue[1].split(":");
	}
    }
    
    var collapsableArticles = document.querySelectorAll(ARTICLE_LIST_ITEM_SELECTOR);
    if (collapsableArticles) {
	Array.prototype.forEach.call(collapsableArticles, function (item) {
	    open_close_article (item.getElementsByTagName((!openArticleIds || (openArticleIds.indexOf(item.getAttribute("id")) < 0)) ? "ARTICLE" : "P")[0]);
	});
    }
}
    
    
function draw_canvases() {
    var canvases = document.getElementsByTagName("canvas");
    if (canvases) {
 	Array.prototype.forEach.call(canvases, function(item) {
	    draw_canvas(item);
	});
	
	
    }
}
    
function draw_canvas(element){

    if (element.tagName != "CANVAS") {
	return;
    }
    
    switch(element.id) {
    case "cascade": draw_cascade(element); return;
    case "pfrqrscy": draw_pf_rqrs_cycle(element); return;
    }

    if(element.classList.contains("confusion")) {
	draw_confusion_matrix(element); return;
    }

    draw_specific_canvas(element);
}
				

function draw_specific_canvas(element) {
}

function draw_cascade(element) {

    // content
    var topLevelCascadeMemberNames = ["Transition declarations", "Important user agent declarations", "Important user declarations", "Important author declarations",
				      "Animation declarations", "Normal author declarations", "Normal user declarations", "Normal user agent declarations"];

    
    var numberOfLevels = 8;
    var numberOfSpecialLevels = 1;
    var levelWidth = 100;
    var specialLevelWidth = levelWidth * 2;
    var extraWidthFactor = 2.2;
    var padding = 20;
    var fontSize = 20;
    var requiredWidth = (numberOfLevels + extraWidthFactor) * levelWidth + 2 * padding + (specialLevelWidth - levelWidth) * numberOfSpecialLevels;
    
    element.width = requiredWidth;
    
    var canvasParentWidthInPx = get_parent_content_width(element);
    
    if (canvasParentWidthInPx < element.width) {
	element.width = canvasParentWidthInPx;
	var adjustmentFactor = element.width/requiredWidth;
	levelWidth *= adjustmentFactor;
	specialLevelWidth *= adjustmentFactor;
	padding *= adjustmentFactor;
	fontSize *= adjustmentFactor;
    }

    var boxWidth = levelWidth * (1 + extraWidthFactor);
    var boxHeight = fontSize * 1.4;
    var verticalSpace = fontSize * 0.7;
    
    var nestedPadding = padding/2;
    var specialBoxWidth = boxWidth + levelWidth;
    var specialBoxHeight = 4 * nestedPadding + 2 * verticalSpace + 2 * fontSize + 3 * boxHeight;

    element.height = boxHeight * numberOfLevels + verticalSpace * (numberOfLevels - 1) + 2 * padding + (specialBoxHeight - boxHeight) * numberOfSpecialLevels;
    
    var ctx = element.getContext("2d");
    ctx.fillStyle = "lightgray";
    ctx.strokeStyle = "lightgray";
    ctx.font = fontSize+"px Arial";

    var x = padding;
    var y = padding;

    var xNested = x;
    var yNested = y;

    var i = 0;
    for (; i < numberOfLevels; i++) {
	if (i == 2) {
	    ctx.strokeRect(x, y, specialBoxWidth, specialBoxHeight);
	    ctx.fillText(topLevelCascadeMemberNames[7 - i], x + 0.2 * fontSize, y + fontSize);
	    // add '***' to mark this item in the cascade
	    ctx.fillStyle = "red";
	    ctx.fillText('***', x + 0.2 * fontSize + ctx.measureText(topLevelCascadeMemberNames[7 - i]).width, y + fontSize); 
	    ctx.fillStyle = "lightgray";
	    // end add '***'
	    draw_drop_line(ctx, x, y, specialBoxWidth, specialBoxHeight, levelWidth, verticalSpace);
	    xNested = x + nestedPadding;
	    yNested = y + fontSize + nestedPadding;
	    x += specialLevelWidth;
	    y += specialBoxHeight + verticalSpace;
	} else if (i == 0) {
	    ctx.strokeRect(x, y, boxWidth, boxHeight);
	    ctx.fillText(topLevelCascadeMemberNames[7 - i], x + 0.2 * fontSize, y + fontSize);
	    // add '***' to mark this item in the cascade
	    ctx.fillStyle = "red";
	    ctx.fillText('***', x + 0.2 * fontSize + ctx.measureText(topLevelCascadeMemberNames[7 - i]).width, y + fontSize); 
	    ctx.fillStyle = "lightgray";
	    // end add '***'
	    if (i != numberOfLevels - 1) {
		draw_drop_line(ctx, x, y, boxWidth, boxHeight, levelWidth, verticalSpace);
		x += levelWidth;
		y += boxHeight + verticalSpace;
	    }
	}
	else {
	    ctx.strokeRect(x, y, boxWidth, boxHeight);
	    ctx.fillText(topLevelCascadeMemberNames[7 - i], x + 0.2 * fontSize, y + fontSize);
	    if (i != numberOfLevels - 1) {
		draw_drop_line(ctx, x, y, boxWidth, boxHeight, levelWidth, verticalSpace);
		x += levelWidth;
		y += boxHeight + verticalSpace;
	    }
	}
    }

    ctx.fillStyle = "gold";
    ctx.strokeStyle = "gold";
    ctx.strokeRect(xNested, yNested, specialBoxWidth - 2 * nestedPadding, specialBoxHeight - 2 * nestedPadding - fontSize);
    ctx.fillText("Specificity", xNested + 0.2 * fontSize, yNested + fontSize);
    xNested += nestedPadding;
    yNested += nestedPadding + fontSize;
    
    /* nested cascade for normal author declarations */
    ctx.fillStyle = "cyan";
    ctx.strokeStyle = "cyan";
    var nestedBoxLabels = [ "External styles", "Internal styles", "Inline styles" ];
    var numNestedBoxes = 3; /* arbitrary */
    var nestedBoxWidth = specialBoxWidth / 3; /* arbitrary */
    var nestedBoxHeight = boxHeight;
    var widthForDrawing = specialBoxWidth - 4 * nestedPadding;
    var nestedLevelWidth = (widthForDrawing - nestedBoxWidth) / (numNestedBoxes - 1);
    for (i = 0; i < numNestedBoxes; ++i) {
	ctx.strokeRect(xNested, yNested, nestedBoxWidth, nestedBoxHeight);
	ctx.fillText(nestedBoxLabels[i], xNested + 0.2 * fontSize, yNested + fontSize);
	if (i != numNestedBoxes - 1) {
	    draw_drop_line(ctx, xNested, yNested, nestedBoxWidth, nestedBoxHeight, nestedLevelWidth, verticalSpace);
	    xNested += nestedLevelWidth;
	    yNested += nestedBoxHeight + verticalSpace;
	}
    }
}


function draw_drop_line(ctx, x, y, boxWidth, boxHeight, levelWidth, verticalSpace) {
    var lineX = x + boxWidth;
    var lineY = y + boxHeight / 2;
    ctx.beginPath();
    ctx.moveTo(lineX, lineY);
    lineX += levelWidth / 4;
    ctx.lineTo(lineX, lineY);
    lineY += boxHeight / 2 + verticalSpace;
    ctx.lineTo(lineX, lineY);
    ctx.moveTo(lineX - 5, lineY - 10);
    ctx.lineTo(lineX, lineY);
    ctx.lineTo(lineX + 5, lineY - 10);
    ctx.stroke();	
}


function set_canvas_width_to_parent_width(element) {
    var cmParentElement = element.parentElement;
    var cmParentElementStyle = getComputedStyle(cmParentElement);
    var cmParentWidthInPx = parseInt(cmParentElementStyle.getPropertyValue('width'), 10);
    if (!isNaN(cmParentWidthInPx)) {
	if (cmParentElementStyle.getPropertyValue('box-sizing') == 'border-box') {
	    let val = parseInt(cmParentElementStyle.getPropertyValue('padding-left'), 10);
	    if (!isNaN(val)) {
		cmParentWidthInPx -= val;
	    }
	    val = parseInt(cmParentElementStyle.getPropertyValue('padding-right'), 10);
	    if (!isNaN(val)) {
		cmParentWidthInPx -= val;
	    }
	    val =  parseInt(cmParentElementStyle.getPropertyValue('border-width'), 10);
	    if (!isNaN(val)) {
		cmParentWidthInPx -= 2 * val;
	    }
	}
	element.width = cmParentWidthInPx;
    }
}

var CM_LEVEL_MARGIN = 0.07;
var CM_LABEL_SIZE = 0.5;
var CM_LABELS = [ "TP", "FP", "FN", "TN" ];
function draw_confusion_matrix(element) {

    set_canvas_width_to_parent_width(element);
    element.height = element.width;

    var pclts = JSON.parse(element.getAttribute("data-pclts"));
    
    var ctx = element.getContext("2d");

    var boxsize = element.width/2;

    pclts.forEach (function(pclt) {

	var pos = pclt.position;
	var colour = pclt.colour;
	var level = pclt.level;
	var text = pclt.text;

	var xpos = (pos % 2) ? 0 : 1;
	var ypos = (pos > 2) ? 1 : 0;

	var x = (xpos + level * CM_LEVEL_MARGIN) * boxsize;
	var y = (ypos + level * CM_LEVEL_MARGIN) * boxsize;
	var w = (1 - 2 * level * CM_LEVEL_MARGIN) * boxsize;
	var h = w;

	ctx.fillStyle = colour; 
	ctx.fillRect(x, y, w, h);
	ctx.fillStyle = 'black'; 
	ctx.strokeRect(x, y, w, h);

	if (text) {
	    var fontSize = CM_LABEL_SIZE * boxsize; 
	    ctx.font = (fontSize|0) + 'px Arial';
	    ctx.textAlign = 'center';
	    ctx.textBaseline = 'middle';
	    ctx.fillStyle = 'white'; 
	    ctx.fillText(CM_LABELS[pos - 1], x + w/2, y + h/2);
	    ctx.fillStyle = 'black'; 
	    ctx.strokeText(CM_LABELS[pos - 1], x + w/2, y + h/2);
	}
    });
}



function Rectangle(w, h) {
    this.width = w;
    this.height = h;
}

function Line(w, h) {
    this.width = w;
    this.height = h;
}

function Position(x, y) {
    this.x = x;
    this.y = y;
}

function drawLine(ctx, fromPosition, line) {
    ctx.beginPath();
    ctx.moveTo(fromPosition.x, fromPosition.y);
    ctx.lineTo(fromPosition.x + line.width, fromPosition.y + line.height);
    ctx.stroke();
}

function getPosAfterRect(curpos, rectangle, type) {
    switch(type) {
    case 'right-side-middle': return new Position (curpos.x + rectangle.width, curpos.y + rectangle.height/2);
    case 'bottom-side-middle': return new Position (curpos.x + rectangle.width/2, curpos.y + rectangle.height);
    default: return curpos;
    }
}

function getPosForRectAfterLine(curpos, line, rectangle, type) {
    switch(type) {
    case 'left-upper-corner': return new Position (curpos.x + line.width, curpos.y + line.height);
    case 'left-side-middle': return new Position (curpos.x + line.width, curpos.y + line.height - rectangle.height/2);
    case 'top-side-middle': return new Position (curpos.x + line.width - rectangle.width/2, curpos.y + line.height);
    default: return curpos;
    }
}

function getXForTextInRectangle(x, y, rectangle, margin, align) {
    var textxpos = 0;
    switch(align) {
    case 'center': textxpos = rectangle.width/2; break;
    case 'right': textxpos = rectangle.width * (1 - margin); break;
    default: textxpos = rectangle.width * margin; 
    }
    return textxpos;
}


function getMidYForTextInRectangle(x, y, rectangle, linenumber, linecount) {
    return y + (linecount - 0.5) * rectangle.height/linecount;
}

function getFontSizeForTextInRectangle(rectangle, linecount, margin) {
    return rectangle.height/linecount * (1 - 2 * margin);
}


var RQRSCYCLE_ID = "pfrqrscy";
var RQRSCYCLE_MARGIN = 0.1;
var RQRSCYCLE_SPACING = 0.05;
var RQRSCYCLE_ITEM_HCOUNT = 5;
var RQRSCYCLE_ITEM_VCOUNT = 3;
var RQRSCYCLE_LINE_HCOUNT = 1;
var RQRSCYCLE_LINE_VCOUNT = 1;
var RQRSCYCLE_ITEM_HW_RATIO = 1;
function draw_pf_rqrs_cycle(element) {
    set_canvas_width_to_parent_width(element);

    var itemWidth = (element.width * (1 - 2 * RQRSCYCLE_MARGIN - (RQRSCYCLE_ITEM_HCOUNT - 1 + RQRSCYCLE_LINE_HCOUNT) * RQRSCYCLE_SPACING)) / RQRSCYCLE_ITEM_HCOUNT;
    var itemHeight = itemWidth * RQRSCYCLE_ITEM_HW_RATIO;
    
    element.height = itemHeight * RQRSCYCLE_ITEM_VCOUNT + element.width * (2 * RQRSCYCLE_MARGIN + (RQRSCYCLE_ITEM_VCOUNT - 1 + RQRSCYCLE_LINE_VCOUNT) * RQRSCYCLE_SPACING); 
    var ctx = element.getContext("2d");

    var curPos = new Position (element.width * RQRSCYCLE_MARGIN, element.width * RQRSCYCLE_MARGIN);
    var itemRect = new Rectangle (itemWidth, itemHeight);
    var horizontalConnector = new Line (RQRSCYCLE_SPACING * element.width, 0);
    
    ctx.strokeRect(curPos.x, curPos.y, itemRect.width, itemRect.height);
    curPos = getPosAfterRect(curPos, itemRect, 'right-side-middle');
    drawLine(ctx, curPos, horizontalConnector);
    curPos = getPosForRectAfterLine(curPos, horizontalConnector, itemRect, 'left-side-middle');
    ctx.strokeRect(curPos.x, curPos.y, itemRect.width, itemRect.height);

    // etc. etc.
}

