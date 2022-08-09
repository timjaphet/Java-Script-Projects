document.write(typeof "word");// using the "type of " operator to give the data type a variable//

document.write(typeof 2);// using the "type of" operator to give the data type a number variable//

function my_function() {
    document.getElementById("infinity").innerHTML
} // created a function to display infinity on click //

document.write(-3E315); //used document write method to display -infinity by useing number lower than -3E310 //

document.write(10 < 4); // document method to display a false boolean comparison

document.write(11 > 1); // document method to display a true boolean expression

console.log(4 + 3); // used to console.log method to display an addition answer in the console of developer tools //

document.write("20" + 9); // Used document write method to show an exaomple of " type coercion" //

document.write(7 == 7); // Used document write method to show an true comparison using "==" //

document.write(11 + 5 == 15); // Used document write method to show an false comparison using "=="//

a = 33;
b = 33;
document.write(a === b); // Used dcoument write method to show a true comparison using "===" //

a = 25;
dog = 13;
document.write(a === dog); //used document write method to show a false comparison due to different data type and value //

a = 20;
y = 20;
document.write(a === dog); //used document write method to show a false comparison due to different data type //

a = 60;
a = 70;
document.write(a === b); // used document write method to show a false comparison due to different value types//

document.write(8 < 88 || 88 > 8); // used (or)operator to show true comparison //

document.write(59 < 32 || 59 < 32); // used (or) operator to show false comparison //

function not_function() {
    document.getElementById("not").innerHTML = ! ( 56 > 81);
} // used "not" operator to invert boolen value //

 a = false;
 b = true;
result = a && b;
document.getElementById('output').innerHTML += '\n' + a + ' && ' + b + '   is  ' + result;

var index = 8;
  var result = (typeof index === 'number');
  alert(result);
  // Output: true

  document.write(typeof index);