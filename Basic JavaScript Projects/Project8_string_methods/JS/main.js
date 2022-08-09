function full_sentence () { 
    var part_1 = " Every day ";
    var part_2 = " I code more ";
    var part_3 = " and learn a ";
    var part_4 = " new way to succeed ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4); 
    document.getElementById("concatenate").innerHTML = whole_sentence; // used the document getelementbyid to display my function //
}


function slice_method() { 
    var sentence = "Develop a richer identity and reduce the chances of an identity crisis" //created a variable named sentence with a sentece value //
    var section = sentence.slice(8,25);
    document.getElementById("slice").innerHTML = section;
}


function numbers() { // created a function //
    var b = 77; 
    document.getElementById("numbers_strings").innerHTML = b.toString(); 

}
function precision_method() { // created a function named precision method //
    var x = 22323.2698745632547; // created var x with a value of 22323.2698745632547 //
    document.getElementById("precision").innerHTML = x.toPrecision(10); 
}
