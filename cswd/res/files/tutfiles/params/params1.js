

function toUpperAndDisplay1() {
    let value = document.getElementById("input1").value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	document.getElementById("upperBox1").innerHTML = "&nbsp;"
    } else {
	document.getElementById("upperBox1").innerHTML = upperValue;
    }
}

