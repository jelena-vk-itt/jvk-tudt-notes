function setup_xrefids (selector, num_prefix, start, alpha, func) {
    let counter = start;
    document.querySelectorAll(selector).forEach(function(element) {
	let xrefid = num_prefix + '-' + counter;
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
	let arr = element.getAttribute('href').split('#');
	let id = arr[arr.length - 1];
	let referredTo = document.getElementById(id);
	element.innerHTML = referredTo && referredTo.hasAttribute('xrefid') ?
	    '[' + referredTo.getAttribute('xrefid') + ']' :
	    '[?]';
    });
}

