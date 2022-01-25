function changeBodyColour() {
    document.getElementsByTagName("body")[0].style.background =
	"rgb(" +
	Math.floor(Math.random() * 256) +
	", " +
	Math.floor(Math.random() * 256) +
	", " +
	Math.floor(Math.random() * 256) +
	")";
}

function changeBodyToSpecifiedColour(colour) {
   document.getElementsByTagName("body")[0].style.background = colour;
}

function activateCPBButton() {
	document.getElementById('chgbdycol').addEventListener("click", changeBodyColour);
}
function deactivateCPBButton() {
	document.getElementById("chgbdycol").removeEventListener("click", changeBodyColour);
}

function writeGreeting(n, name) {
	document.getElementsByTagName("p")[0].innerHTML = "Hello I am button " + n + " and my name is " + name;
}

// document.getElementById('chgbdycol').addEventListener("click", changeBodyColour);
document.getElementById('makered').addEventListener("click", function() { changeBodyToSpecifiedColour('red'); } );


// in a handler function, 'this' represents the object on which the event happened (e.g. the button that was clicked)
let buttonArray = document.getElementsByClassName("gb");
for (let index = 0; index < buttonArray.length; ++index) {
	buttonArray[index].addEventListener("click", function() { writeGreeting(index + 1, this.textContent); } );
}
