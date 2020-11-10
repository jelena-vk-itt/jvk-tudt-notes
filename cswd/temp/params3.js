function toUpperAndDisplayN(number) {

    let inputId = // add code here to create the input id using the number parameter
    let outputId = // add code here to create the output id using the number parameter

    let value = document.getElementById(inputId).value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	document.getElementById(outputId).innerHTML = "&nbsp;"
    } else {
	document.getElementById(outputId).innerHTML = upperValue;
    }
}

