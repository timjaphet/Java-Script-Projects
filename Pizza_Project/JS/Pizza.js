function getReceipt () {
    //this initializes our string so it can get passed from
    // function to function, growing line by line into a full receipt
    var text1 = "";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if(sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = selectedSize+"<br>";
        }
    }
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza"){
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza"){
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza"){
        sizeTotal = 16;
    } else if (selectedSize === "MONSTER PIZZA"){
        sizeTotal = 32;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize+" = $"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    //these variables will get passed on to each function
    getMeat(runningTotal,text1); 
};

function getMeat(runningTotal, text1) {
    var meatTotal = 0;
    var selectedMeat = [];
    var meatArray = document.getElementsByClassName("meats");
    for (var j = 0; j < meatArray.length; j++) {
        if(meatArray[j].checked) {
            selectedMeat.push(meatArray[j].value);
            console.log("selected meat item: ("+meatArray[j].value+")");
            text1 = text1+meatArray[j].value+"<br>";
        }
    }
    var meatCount = selectedMeat.length;
    if (meatCount > 1) {
        meatTotal = (meatCount - 1);
    } else {
        meatTotal = 0;
    }
    runningTotal = runningTotal + meatTotal;
    // console.log("total selected meat items: "+meatCount);
	// console.log(meatCount+" meat - 1 free meat = "+"$"+meatTotal+".00");
	// console.log("meat text1: "+text1);
    // console.log("Purchase Total: "+"$"+runningTotal+".00");
    getVeggies(runningTotal, text1);
}; 

function getVeggies(runningTotal, text1) {
    var veggieTotal = 0;
    var selectedVeggie = [];
    var veggieArray = document.getElementsByClassName("veggies");
    for (var k = 0; k < veggieArray.length; k++) {
        if(veggieArray[k].checked) {
            selectedVeggie.push(veggieArray[k].value);
            text1 = text1+veggieArray[k].value+"<br>";
        }
    }
    var veggieCount = selectedVeggie.length;
    if (veggieCount > 1) {
        veggieTotal = (veggieCount -1);
    } else {
        veggieTotal = 0;
    }
    runningTotal = (runningTotal + veggieTotal);
    // console.log("total selected veggie items: "+ veggieCount);
	// console.log(veggieCount+" veggie - 1 free veggie = "+"$"+meatTotal+".00");
	// console.log("veggie text1: "+text1);
    // console.log("Purchase Total: "+"$"+runningTotal+".00");
	document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "</h3>$"+runningTotal+".00"+"</h3>";
        runningTotal+".00"+"</strong></h3>";
};