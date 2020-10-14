function init_specific() {

    setup_xrefids ('[id^=py-]', 'CS', 1, false, function (element, xrefid) { element.getElementsByTagName('figcaption')[0].innerHTML += ' [' + xrefid + ']'; });
    setup_xrefids ('.ice', 'CE', 'A', true, function (element, xrefid) { element.setAttribute('data-heading', '[' + xrefid + ']'); });
    setup_xrefs();
}



function draw_specific_canvas(element){

    if (element.tagName != "CANVAS") {
	return;
    }
    
    switch(element.id) {
    case "waterfall": draw_waterfall(element, null); return;
    case "waterfall_in_swd1": draw_waterfall(element, [{"boxcol": "#86d190"}, {"boxcol": "#86d190"}, {"boxcol": "#86d190"}, {"boxcol": "#32ad43", "textwght": "bold"}, {}, {}, {}]); return;
    }
}



function draw_waterfall(element, displayInfo) {

    // content
    var topLevelCascadeMemberNames = ["Requirements gathering", "Analysis", "Design", "Implementation and testing", "Integration and testing", "Deployment", "Maintenance"];

    
    var numberOfLevels = 7;
    var numberOfSpecialLevels = 0;
    var levelWidth = 90;
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
    var specialBoxHeight = 4 * nestedPadding + verticalSpace + 2 * fontSize + 2 * boxHeight;

    element.height = boxHeight * numberOfLevels + verticalSpace * (numberOfLevels - 1) + 2 * padding + (specialBoxHeight - boxHeight) * numberOfSpecialLevels;
    
    var ctx = element.getContext("2d");
    defaultFillStyle = "maroon";
    defaultStrokeStyle = "maroon";
    defaultFont = fontSize+"px Arial";
    
    var x = padding;
    var y = padding;

    var xNested = x;
    var yNested = y;

    var i = 0;
    for (; i < numberOfLevels; i++) {

	if (displayInfo != null && displayInfo[i].hasOwnProperty('boxcol')) {
	    ctx.strokeStyle = displayInfo[i]['boxcol'];
	    ctx.fillStyle = displayInfo[i]['boxcol'];
	    ctx.strokeRect(x, y, boxWidth, boxHeight);
	    ctx.fillRect(x, y, boxWidth, boxHeight);	
	} else {
	    ctx.strokeStyle = defaultStrokeStyle;
	    ctx.strokeRect(x, y, boxWidth, boxHeight);
	}

	ctx.fillStyle = defaultFillStyle;
	if (displayInfo != null && displayInfo[i].hasOwnProperty('textwght')) {
	    ctx.font = displayInfo[i]['textwght'] + " " + defaultFont;
	} else {
	    ctx.font = defaultFont;
	}
	ctx.fillText(topLevelCascadeMemberNames[i], x + 0.2 * fontSize, y + fontSize);
		
	ctx.strokeStyle = defaultStrokeStyle;
	if (i != numberOfLevels - 1) {
	    draw_drop_line(ctx, x, y, boxWidth, boxHeight, levelWidth, verticalSpace);
	    x += levelWidth;
	    y += boxHeight + verticalSpace;
	}
    }
}


