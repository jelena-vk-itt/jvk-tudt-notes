function toUpperAndDisplay(number) {

    let inputId = "input" + number;
    let outputId = "upperBox" + number;

    let value = document.getElementById(inputId).value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	document.getElementById(outputId).innerHTML = "&nbsp;"
    } else {
	document.getElementById(outputId).innerHTML = upperValue;
    }
}

