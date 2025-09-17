
function setup_xrefids (selector, num_prefix, start, alpha, func) {
    var counter = start;
    document.querySelectorAll(selector).forEach(function(element) {
	var xrefid = num_prefix + '-' + counter;
	element.setAttribute('xrefid', xrefid);
	if (func != null) {
	    func(element, xrefid);
	}
	if (alpha) {
	    counter = String.fromCharCode(counter.charCodeAt(0) + 1);
	} else {
	    ++counter;
	}
    });
}

function setup_xrefs () {
    document.querySelectorAll('.xref').forEach(function(element) {
	var arr = element.getAttribute('href').split('#');
	var id = arr[arr.length - 1];
	element.innerHTML = '[' + document.getElementById(id).getAttribute('xrefid') + ']';
    });
}


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

function toggle_hide(id) {
    document.getElementById(id).hidden = !document.getElementById(id).hidden;
}
