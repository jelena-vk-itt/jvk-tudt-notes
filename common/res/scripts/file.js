Array.prototype.forEach.call(document.getElementsByClassName("savehtml"), function(item) {
    item.addEventListener("click", function(e) { save_html(e.target); })
});

function save_html(element) {

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
    let sFileName = element.getAttribute('data-filename');	   // The file to save the data.
    if (!sFileName) {
	sFileName = 'saved_html_file.html';
    }
    
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
