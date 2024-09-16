function measureName(name) {
    if (name.length > 10) {
        return "The name is long.";
    } else if (name.length > 5) {
        return "The name is medium length.";
    } else {
        return "The name is short."
    }
}

function handleClick() {
    let assessment = measureName(document.getElementById("name").value);
    document.getElementById("result").innerHTML = assessment;
        ;
}