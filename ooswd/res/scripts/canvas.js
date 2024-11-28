window.addEventListener('load', (e) => {
    draw_waterfall(document.querySelector('#waterfall', null));
    draw_waterfall(document.querySelector('#waterfall_in_swd1', [{"boxcol": "#86d190"},
								 {"boxcol": "#86d190"},
								 {"boxcol": "#86d190"},
								 {"boxcol": "#32ad43", "textwght": "bold"},
								 {}, {}, {}]));
});

function draw_waterfall(element, displayInfo) {

    const topLevelCascadeMemberNames = ["Requirements gathering", "Analysis", "Design", "Implementation and testing", "Integration and testing", "Deployment", "Maintenance"];

    
    const numberOfLevels = 7;
    const numberOfSpecialLevels = 0;
    let levelWidth = 90;
    let specialLevelWidth = levelWidth * 2;
    const extraWidthFactor = 2.2;
    let padding = 20;
    let fontSize = 20;
    const requiredWidth = (numberOfLevels + extraWidthFactor) * levelWidth + 2 * padding + (specialLevelWidth - levelWidth) * numberOfSpecialLevels;
    
    element.width = requiredWidth;
    
    const canvasParentWidthInPx = get_parent_content_width(element);
    
    if (canvasParentWidthInPx < element.width) {
	element.width = canvasParentWidthInPx;
	const adjustmentFactor = element.width/requiredWidth;
	levelWidth *= adjustmentFactor;
	specialLevelWidth *= adjustmentFactor;
	padding *= adjustmentFactor;
	fontSize *= adjustmentFactor;
    }
    
    const boxWidth = levelWidth * (1 + extraWidthFactor);
    const boxHeight = fontSize * 1.4;
    const verticalSpace = fontSize * 0.7;
    
    const nestedPadding = padding/2;
    const specialBoxWidth = boxWidth + levelWidth;
    const specialBoxHeight = 4 * nestedPadding + verticalSpace + 2 * fontSize + 2 * boxHeight;

    element.height = boxHeight * numberOfLevels + verticalSpace * (numberOfLevels - 1) + 2 * padding + (specialBoxHeight - boxHeight) * numberOfSpecialLevels;
    
    const ctx = element.getContext("2d");
    const defaultFillStyle = "maroon";
    const defaultStrokeStyle = "maroon";
    const defaultFont = fontSize+"px Arial";
    
    let x = padding;
    let y = padding;

    const xNested = x;
    const yNested = y;

    let i = 0;
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


