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

