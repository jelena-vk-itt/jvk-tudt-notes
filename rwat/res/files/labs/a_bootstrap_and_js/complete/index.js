//2a
function readInput() {
    return document.getElementById("input").value;
}

function changeFirstCard() {
    let inputText = readInput();
    if (inputText) {
	let firstCard = document.getElementById("first-card");
	firstCard.innerHTML = inputText;
	// student not expected to do below; direct setting
	// of background colour property is sufficient
	let foundCls = firstCard.className.match(/bg-[^ ]+/)[0], newCls = "";
	while ((newCls = ["bg-info", "bg-success", "bg-warning", "bg-danger", "bg-light"][Math.floor(Math.random() * 5)]) == foundCls);
	firstCard.classList.replace(foundCls, newCls);
    }
}

//2b
let cards = document.getElementsByClassName("card");
let fw = "normal";
function changeTextWeight() {
    if (fw == "normal") {
	fw = "bold";
    } else {
	fw = "normal";
    }
    
    for (let c of cards) {
	c.style.fontWeight = fw;
    }
}
cards[1].addEventListener("click", changeTextWeight);

//3b
let textPieces = Array.from(cards).map(x => x.innerHTML);
function setText(keyName) {
    if (keyName == 'ArrowUp') {
	for (let i = 0; i < cards.length; ++i) {
	    cards[i].innerHTML = textPieces[i]; 
	}
    } else if (keyName == 'ArrowLeft' || keyName == 'ArrowRight') {
	let newTextPieces = textPieces.slice().sort();
	if (keyName == 'ArrowLeft') {
	    newTextPieces.reverse();
	}
	for (let i = 0; i < cards.length; ++i) {
	    cards[i].innerHTML = newTextPieces[i]; 
	}
    } else if (keyName == 'ArrowDown') {
	let newTextPieces = textPieces.slice();
	for (let i = 0; i < cards.length; ++i) {
	    let index = Math.floor(Math.random() * newTextPieces.length);
	    cards[i].innerHTML = newTextPieces[index];
	    newTextPieces.splice(index, 1);
	}
    }
}
document.addEventListener('keydown', function (event) { setText(event.key); });

