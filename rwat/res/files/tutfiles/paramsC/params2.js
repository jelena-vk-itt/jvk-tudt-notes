
// rewrite the functions from params1.js to use the parameters instead of hard-coded values for the ids

function toUpperAndDisplay(inputId, outputId) {
    let value = document.getElementById(inputId).value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	    document.getElementById(outputId).innerHTML = "&nbsp;"
    } else {
	    document.getElementById(outputId).innerHTML = upperValue;
    }
}
