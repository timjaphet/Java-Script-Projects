// This variable keeps track of who's turn it is.
let activePlayer = 'X';
//This array stores an array of moves. We use this to determine win conditions.
let selectedSquares =[];

//This function is for placing an x or o in a square.
function placeXoro(squareNumber) {
    //This condition ensures a square hasnt be selected already.
    //The .some() method is used to  check each element of selectedsquare array to
    //see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //this variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //this condition check whos turn it is.
        if (activePlayer === 'X') {
            //if active player is equal to 'x', the x.png is placed in HTML
            select.style.backgroundImage = 'url("images/x.png")';
        //Active player may only be 'x' or 'o' so, if not 'x' it must be 'o'
        } else {
            //If active player is equal to 'o', the o.png is placed in HTML.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer) ;
        //this calls a function to check for any win conditions.
        checkWinconditions();
        // this condition is for changing the active player.
        if (activePlayer === 'X') {
            //If active player is 'x' change it to 'o'.
            activePlayer = 'O';
            //if active player is anything other than 'x'.
        } else {
            //change the activeplayer to 'x'
            activePlayer = 'X';
        }





        //this function results in a random square being selected.
        audio('./media/place.mp3') ;
        //thiis condition check to see iff it is computers turn.
        if(activePlayer === 'O') {
            //this function disables clicking for computer choice.
            disableClick();
            //this function waits 1 scond before placing the image
            //and enabling click.
            setTimeout(function (){ computersTurn(); }, 1000);
        }
        //returning true is needed for our computersturn() function to work.
        return true;
    }
    //this function results in a random square being selected.
    function computersTurn() {
        //this boolean is needed for our while loop
        let success = false;
        //this variable stores a random number 0-8
        let pickAsquare;
        //this condition allows our while loop to keep
        // trying if a square is selected already.
        while(!success) {
            //a randome number between 0 and 8 is selected
            pickAsquare = String(Math.floor(Math.random() * 9));
            //if the random number evaluates returns true, the square hasnt been selected yet
            if (placeXoro(pickAsquare)) {
                //this line calls the function.
                placeXoro(pickAsquare);
                // this changes our boolean and ends the loop.
               success = true;
            }
        }
    }
}
  
//this function parses the selectedsquares array to search for in conditions.
//drawWinLine function is called to draw line if condition is met.
function checkWinconditions() {
    if      (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90 );}
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520);}
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520);}
    //this condition check for tie. If none of the above conditions register
    //and 9 squares are selected, the code executes.
    else if (selectedSquares.length >= 9) {
        //this function plays the tie game sound.
        audio("./media/tie.mp3");
        //this function sets a .3 second timer before the restGame is called.
        setTimeout(function () { resetGame(); }, 1000);
    }


    //this function checks if an array includes 3 strings.
    //it is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        //the next 3 variables will be used to check for 3 in a row.
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        // if the 3 variables we pass are all included in our array true is
        // returned and our else if condition executes the drawWinLine function.
        if (a === true && b === true && c === true) { return true;}
    }
    

}

//this function makes our body elemet temporaily unclickable
function disableClick() {
    //this makes our body unclickable
    body.style.pointerEvents = 'none';
    setTimeout(function() {body.style.pointerEvents = 'auto';}, 1000)
}

//this function takes astring parameter of the path you set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //we created a new audio object and we pass the path as a parameter.
    let audio = new Audio(audioURL);
    //play method play our audio sound.
    audio.play();
}

//this function utilizes html canvas draw win lines
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //this line accesses our html canvas element 
    const canvas = document.getElementById('win-lines') ;
    //this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext( '2d') ;
    //this line indicates where the start of alines x axis is
    let x1 = coordX1,
        //this line indicates where the start of alines y axis
        y1 = coordY1,
        //this line indicates where the end of line x axis
        x2 = coordX2,
        //this line indicates where the end of a lines x axis is
        y2 = coordY2,
        // this variable stores temporary x axis data we update in our animation loop
        x = x1,
        //this variable stores temporary y axis data we update in our animations loop.
        y = y1;

    //this function interacts with the cavnas
    function animateLineDrawing() {
        //this variable creates the loop for when the game ends it restarts
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //this method clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //this method starts a new path
        c.beginPath();
        //this method moves us to a starting point for our line
        c.moveTo(x1 ,y1);
        //this  method indicates the end point in our line
        c.lineTo(x, y);
        //this method set the width of our line
        c.lineWidth = 10;
        //this method sets the color of our line
        c.strokeStyle = 'rgba(70, 255, 33, .8 )';
        //this method draws everything wee laid our above
        c.stroke();
        //this condition checks if weve reached the endpoint
        if ( x1 <= x2 && y1 <= y2) {
            //this condition adds 10 to the previous end x point
            if( x < x2) { x += 10; }
            //this condition adds 10 to the previous end y point
            if ( y < y2) { y += 10; }
            //this condition cancels our animation loop if reach the end points 
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        //this condition is similar to the one above
        //it was necessary for the 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //this function clears our canvas after our win line is drawn
    function clear() {
        //this line starts our animation loop
        const animationLoop = requestAnimationFrame(clear);
        //this line clears our canvas
        c.clearRect(0, 0, 608, 608);
        //this line stops our animation loop
        cancelAnimationFrame(animationLoop);
    }
    //this line disallows clicking while the win sound is playing
    disableClick();
    //this line plays the win sound
    audio("./media/winGame.mp3");
    //this line calls our main animation loop
    animateLineDrawing();
    //this line waits 1 second
    //then, clears canvas, resets game, and allows clicking again
    setTimeout(function () { clear(); resetGame(); }, 1000)
}

//this function resets the game in a tie or a win
function resetGame() {
    //this for loop iterates through each HTML square element
    for (let i = 0; i < 9; i++) {
        //this variable gets the html element of i
        let square = document.getElementById(String(i));
        //this removes our elements backgroundImage
        square.style.backgroundImage = '';
    }
    //this resets our array so it is empty and we can start over
    selectedSquares = [];
}