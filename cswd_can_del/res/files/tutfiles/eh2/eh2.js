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

