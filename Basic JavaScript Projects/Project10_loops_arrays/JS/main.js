function Call_loop() { // created a loop function with a name of call loop //
    var Digit = ""; 
    var x = 1; //created variable with value of one //
    while (x < 21) { 
        Digit += "<br>" + x; 
        x++; 
    }
    document.getElementById("Loop").innerHTML = Digit; // display value of each loop with byid method //
}

var Instruments = ["Drums", "Piano", "Bass", "Violin", "Trumpets", "Flute"] ; // created variable instruments for a for loop with know iterations //
var content = "";
var Y;
function for_loop() { 
    for (Y = 0; Y < Instruments.length; Y++) { // created for condition statement . with assigning variable y a value . if Y is less than instrument.length addone to y value and continue loop //
    content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = content; // use getelementbyid method to display our list from the loop //
}

function array_Function() { // created an array function //
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "playing";
    cat_picture[2] = "eating";
    cat_picture[3] = "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is " + 
    cat_picture[3] + "."; 
}

function constant_function() { 
    const exotic_cars = {dealer:"Audi", body:"SUV", drive:"AWD"} 
    exotic_cars.color = "blue";
    exotic_cars.price = "50k";
    document.getElementById("constant").innerHTML = "Over at " + exotic_cars.dealer + " we have " +
    exotic_cars.drive + " vehicles at the cheapest prices around "; 
}

function let_function() { 
var x = 44; //created variable and declared value 44 //
document.write(x);
{
    let x = 73; 
    document.write("<br>" + x);
}
document.write("<br>" + x); 
} 

let horse = { // created object function //
    breed: "mustang ", 
    color: "brown ",
    age: "4 year old ",
    active: "high ",
  description: function() { // created a describtion function for my object //
        return " This horse is a " + this.age + this.color + this.breed; 
    }
} ;
document.getElementById("horse_object").innerHTML = dog.description(); 