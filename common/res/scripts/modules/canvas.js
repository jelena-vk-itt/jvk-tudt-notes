function get_parent_content_width(element) {
    var cmParentElement = element.parentElement;
    var cmParentElementStyle = getComputedStyle(cmParentElement);
    var cmParentWidthInPx = parseFloat(cmParentElementStyle.getPropertyValue('width'));
    if (cmParentElementStyle.getPropertyValue('box-sizing') == 'border-box') {
        cmParentWidthInPx -= parseFloat(cmParentElementStyle.getPropertyValue('padding-left'));
        cmParentWidthInPx -= parseFloat(cmParentElementStyle.getPropertyValue('padding-right'));
        cmParentWidthInPx -= parseFloat(cmParentElementStyle.getPropertyValue('border-left-width'));
        cmParentWidthInPx -= parseFloat(cmParentElementStyle.getPropertyValue('border-right-width'));
    }
    return cmParentWidthInPx;
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
            val = parseInt(cmParentElementStyle.getPropertyValue('border-width'), 10);
            if (!isNaN(val)) {
                cmParentWidthInPx -= 2 * val;
            }
        }
        element.width = cmParentWidthInPx;
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

