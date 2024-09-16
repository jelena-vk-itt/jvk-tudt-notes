

function toUpperAndDisplay1() {
    let value = document.getElementById("input1").value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	    document.getElementById("upperBox1").innerHTML = "&nbsp;"
    } else {
	    document.getElementById("upperBox1").innerHTML = upperValue;
    }
}

function toUpperAndDisplay2() {
    let value = document.getElementById("input2").value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	    document.getElementById("upperBox2").innerHTML = "&nbsp;"
    } else {
	    document.getElementById("upperBox2").innerHTML = upperValue;
    }
}

function toUpperAndDisplay3() {
    let value = document.getElementById("input3").value;
    let upperValue = value.toUpperCase();
    if (upperValue == "") {
	    document.getElementById("upperBox3").innerHTML = "&nbsp;"
    } else {
	    document.getElementById("upperBox3").innerHTML = upperValue;
    }
}
