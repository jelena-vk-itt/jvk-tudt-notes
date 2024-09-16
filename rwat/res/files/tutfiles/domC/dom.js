
// ex 1
function fetchInfo(id) {
    document.getElementById('info-box1').innerHTML = document.getElementById(id).innerHTML;
}


// ex 2
function listEntries() {
    let paragraphs = document.getElementsByTagName("p");
    let ids = "";
    for (const paragraph of paragraphs) {
        ids += paragraph.id + " ";
    } 
    document.getElementById('info-box2').innerHTML = ids;
}

// ex 3
function getClasses() {
    let mammalParagraphs = document.getElementsByClassName("mammal");
    let mids = "";
    for (const paragraph of mammalParagraphs) {
        mids += paragraph.id + " ";
    } 
    document.getElementById('m-list').innerHTML = mids;

    let reptileParagraphs = document.getElementsByClassName("reptile");
    let rids = "";
    for (const paragraph of reptileParagraphs) {
        rids += paragraph.id + " ";
    } 
    document.getElementById('r-list').innerHTML = rids;
    
}

// ex 4
function getFirstH3() {
    document.getElementById('info-box4').innerHTML = document.querySelector("h3").innerHTML;
}

function getAllH3s() {
    let h3s = document.querySelectorAll("section > h3");
    let str = "";
    for (h3Element of h3s) {
        str += "<p>" + h3Element.innerHTML + "</p>";
    }
    document.getElementById('info-box4').innerHTML = str;
}
