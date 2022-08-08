var x=44; 
function add_numbers_1() { 
    document.write(44 + x + "<br>");//used the document.write method to display my function//
}
function add_numbers_2() {//created an function named add_numbers_2//
    document.write(x + 100 +"<br>" );
}
add_numbers_1();//calling my function//
add_numbers_2();//calling my function//

function add_numbers_3() { 
    var p = 10;
    document.write(30 + p + "<br>");
}
function add_numbers_7() {
    document.write(p + 200);
}
add_numbers_3();//calling my function//
add_numbers_7();//calling my functuon//

function subtract_numbers_1() { 
    var y = 20; 
    console.log(40 - y); 
}
function subtract_numbers_2() { 
    var y = 15;
    console.log(x - 11);
}
subtract_numbers_1();// calling my function //
subtract_numbers_2();// calling my function //



function smoke_function() { 
    Age = document.getElementById("Age").value; 
    if (Age >= 18) { 
        Smoke = " You can smoke"; 
    }
    else { 
        Smoke = " You can not smoke";
    }
    document.getElementById("can_you_smoke").innerHTML = Smoke;
}

function Time_function() { 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) { 
        Reply = "It is morning time.";
    }
    else if (Time > 12 == Time < 18) { 
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time."; 
    }
    document.getElementById("Time_of_day").innerHTML = Reply; // used getelementbyid method to display one of the three replys //
}