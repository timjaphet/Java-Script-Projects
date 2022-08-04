function my_math_function() {
    var addition = 6 + 6;
    document.getElementById("Math").innerHTML = "6 + 6 = " + addition
} //created an addition function with the document.get method to display answer//


function subtractionfunction() {
    var subtract = 7 - 7;
    document.getElementById("subtract").innerHTML = "7 - 7 = " + subtract
} //created an subtraction function with the document.get method to display answer //

function multifunction() {
    var multiplication = 6 * 6;
    document.getElementById("multi").innerHTML = "6 x 6 = " + multiplication
} // created multiplication function with the document.get method to display answer //

function divfunction() {
    var division = 40 / 8;
    document.getElementById("div").innerHTML = " 40 / 8 = " + division
} // created division function with the document.get method to display answer //

function OOOmath() {
    var orderofoperations = (5+2) * 11 / 2 - 3;
    document.getElementById("OOO").innerHTML = " 5 plus 2, multiplied by 11, divided in half and then subtracted by 3 equals " + orderofoperations
} // created an multi operational function with document. get method to display method problem that uses multiple operations //

function modulus_operator() {
    var simple_math = 36 % 6;
    document.getElementById("mod").innerHTML = " when divide 36 by 6 you have a remainder of: " + simple_math;
} // created an modulus operator function with document get method to display answer //

function negation_operator() {
    var x = 30;
    document.getElementById("negation").innerHTML = -x
} // created an negation operator function with document get method to display answer //

function increment() { 
    var x = 2;
    x++;
    document.write(x);
} //created an increment function to document.write var x if it was increased //

function decrement() {
    var x = 8.33;
    x--;
    document.write(x);
} //created an decrement function to document write var x if it was decreased //

function random() {
    window.alert(Math.random() * 200)
} // created an random function to to alert user of a random number up to 200 //

function round() {
    document.getElementById("round").innerHTML = Math.round(7.7);
  } //created an round function with the document.get method to round 7.7 up //
