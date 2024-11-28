window.addEventListener('load', (e) => {
    setup_xrefids ('[id^=py-]', 'CS', 1, false, function (element, xrefid) { element.getElementsByTagName('figcaption')[0].innerHTML += ' [' + xrefid + ']'; });
    setup_xrefids ('section.ice, details.ice', 'CE', 'A', true, function (element, xrefid) {
	if (element.tagName == 'DETAILS') {
	    element.firstElementChild.setAttribute('data-heading', '[' + xrefid + ']'); 	    
	} else {
	    element.setAttribute('data-heading', '[' + xrefid + ']'); 
	}
    });
    setup_xrefs();
});

