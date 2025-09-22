let friendsForTea = [
    { name: "Ali", beverage: "tea" },
    { name: "Ben", beverage: "coffee" },
    { name: "Con", beverage: "tea" },
    { name: "Dan", beverage: "tea" },
    { name: "Eva", beverage: "coffee" },
    { name: "Fae", beverage: "tea"}
];

function writeOrders() {
    let ordersSection = document.getElementById("orders");
    ordersSection.innerHTML = "";
    for(o of friendsForTea) {
        ordersSection.innerHTML += "<p>" + o.name + " would like " + o.beverage + "</p>";
    }
}

function writeModifiedOrders() {

    let indexForDeletion = -1;
    let georgeFound = false;
    for (let i = 0; i < friendsForTea.length; ++i) {
        if (friendsForTea[i].name == "Eva" || friendsForTea[i].name == "Con") {
            friendsForTea[i].beverage = "hot chocolate"; 
        } else if (friendsForTea[i].name == "Ali") {
            indexForDeletion = i;
        } else if (friendsForTea[i].name == "Fae") {
            friendsForTea[i].name = "Fay";
        } else if (friendsForTea[i].name == "George") {
            friendsForTea[i].beverage = "hot chocolate"; 
            georgeFound = true;
        }
    }

    if (!georgeFound) {
        friendsForTea.push({ name: "George", beverage: "hot chocolate" });
    }

    if (indexForDeletion != -1) {
        friendsForTea.splice(indexForDeletion, 1);
    }

    let ordersSection = document.getElementById("mod-orders");
    ordersSection.innerHTML = "";
       
    for(o of friendsForTea) {
        ordersSection.innerHTML += "<p>" + o.name + " would like " + o.beverage + "</p>";
    }
}