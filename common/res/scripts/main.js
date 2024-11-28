
const OPEN_ARTICLES_COOKIE_NAME = "toc_open_articles";
const OPEN_ARTICLES_COOKIE_REGEXP = new RegExp(OPEN_ARTICLES_COOKIE_NAME + "=[^;]*", "g");
const OPEN_ARTICLE_TAG_NAME = "ARTICLE";
const CLOSED_ARTICLE_TAG_NAME = "P";
const DETAILS_TAG_NAME = "DETAILS";
const ARTICLE_TAG_NAMES = [OPEN_ARTICLE_TAG_NAME, CLOSED_ARTICLE_TAG_NAME];
const CLICK_PROTECTED_SELECTOR = "a, details, #jsexample, form, .question, input, label, button";
const CLOSED_ARTICLE_SELECTOR = ".toc_grp>li>p";
const OPEN_ARTICLE_SELECTOR = ".toc_grp>li>article";
const ARTICLE_SELECTOR = OPEN_ARTICLE_SELECTOR + ", " + CLOSED_ARTICLE_SELECTOR;

OPEN_ALL_DATA = {
    actors: [
	{sel: CLOSED_ARTICLE_SELECTOR, func: open_close_article},
	{sel: DETAILS_TAG_NAME, func: (el) => { el.open = true; }},
	{sel: ".answer", func: (el) => { el.setAttribute("openfix", ""); el.hidden = false; }}
    ]
}

CLOSE_ALL_DATA = {
    actors: [
	{sel: OPEN_ARTICLE_SELECTOR, func: open_close_article},
	{sel: ".answer", func: (el) => { el.removeAttribute("openfix", ""); el.hidden = true; }}
    ]
}

INIT_DATA = {
    actors: [
	{sel: ".question", func: (el) => { el.nextSibling.hidden = true; }}
    ],
    eventHandlers: [
	{sel: ".openall", func (e) { run_with_data(OPEN_ALL_DATA); }},
	{sel: ".closeall", func (e) { run_with_data(CLOSE_ALL_DATA); }},
	{sel: ARTICLE_SELECTOR, func: handle_open_close_article},
	{sel: ".question", func (e) { e.target.nextSibling.hidden = !e.target.nextSibling.hidden; }}
    ]
}

// initialisation and other functions that are applied to classes of objects on the page
function run_with_data(data) {
    if ("actors" in data) {
	for (let actor of data.actors) {
	    Array.from(document.querySelectorAll(actor.sel)).forEach((el) => { actor.func(el); });
	}
    }
    if ("eventHandlers" in data) {
	for (let eh of data.eventHandlers) {
	    Array.from(document.querySelectorAll(eh.sel)).forEach((el) => {
		el.addEventListener("click", eh.func); });
	}
    }
}
    
// functions for opening and closing articles
function handle_open_close_article(e) {
    
    if (e.target.closest(CLICK_PROTECTED_SELECTOR) ||
	window.getSelection().toString() != "") {
	return;
    }

    const elementToHide = e.target.closest(ARTICLE_SELECTOR);
    if (open_close_article(elementToHide)) {
	save_open_close_article_state(elementToHide);
    }
}

function open_close_article(elementToHide) {

    if (!elementToHide) {
	return false;
    }

    const close = elementToHide.tagName == OPEN_ARTICLE_TAG_NAME;
    const elementToShow = elementToHide.parentElement.getElementsByTagName(close ? CLOSED_ARTICLE_TAG_NAME : OPEN_ARTICLE_TAG_NAME)[0];
    if (!elementToShow) {
	return false;
    }
    
    elementToShow.removeAttribute("style");
    elementToHide.setAttribute("style", "display:none");

    return true;
}


// saving and restoring the open/closed state of the articles into a cookie
// (does not work when the file is local)
function save_open_close_article_state(elementToHide) {

    const close = elementToHide.tagName == OPEN_ARTICLE_TAG_NAME;

    /* save the state into a cookie */
    const id = elementToHide.parentElement.getAttribute("id");
    if (!document.cookie) {
	if (!close) {
	    document.cookie = OPEN_ARTICLES_COOKIE_NAME + "=" + id;
	}
    } else {
	const openArticlesCookieMatches = document.cookie.match(OPEN_ARTICLES_COOKIE_REGEXP);
	
	if (!openArticlesCookieMatches) {
	    if (!close) {
		document.cookie = document.cookie + "; " + OPEN_ARTICLES_COOKIE_NAME + "=" + id;
	    }
	} else if (openArticlesCookieMatches.length > 1) {
	    alert("There's a problem (error code: 1) with remembering the TOC state, but never mind, you can carry on.");
	} else {
	    const openArticleIndicatorRegexp = new RegExp("[=:]" + id + "(?=:|$)", "g");
	    const openArticleIndicatorMatches = openArticlesCookieMatches[0].match(openArticleIndicatorRegexp); 
	    if (!openArticleIndicatorMatches) {
		if (!close) {
		    let newOpenArticlesCookie = null;
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
		    const newOpenArticlesCookie = openArticlesCookieMatches[0].replace(openArticleIndicatorMatches[0], openArticleIndicatorMatches[0].charAt(0));
		    document.cookie = document.cookie.replace(OPEN_ARTICLES_COOKIE_REGEXP, newOpenArticlesCookie);
		}
	    }
	}
    }
}

function init_articles() {
    
    const openArticleIds = null;
    if (document.cookie) {
	const openArticlesCookieMatches = document.cookie.match(OPEN_ARTICLES_COOKIE_REGEXP);

	if (openArticlesCookieMatches) {
	    
	    if (openArticlesCookieMatches.length > 1) {
		alert("There's a problem (error code: 3) with remembering the TOC state, but never mind, you can carry on.");
		return;
	    }
	    
	    const nameAndValue = openArticlesCookieMatches[0].split("=");
	    if (nameAndValue.length != 2) {
		alert("There's a problem (error code: 4) with remembering the TOC state, but never mind, you can carry on.");
		return;
	    }
	    
	    openArticleIds = nameAndValue[1].split(":");
	}
    }
    
    const collapsableArticles = document.querySelectorAll(ARTICLE_LIST_ITEM_SELECTOR);
    if (collapsableArticles) {
	Array.prototype.forEach.call(collapsableArticles, function (item) {
	    open_close_article (item.getElementsByTagName((!openArticleIds || (openArticleIds.indexOf(item.getAttribute("id")) < 0)) ? "ARTICLE" : "P")[0]);
	});
    }
}


// dynamic internal referencing
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

// reusable helpers for canvas
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

window.addEventListener("load", (e) => { run_with_data(INIT_DATA); });
