var slideIndex = 1; 
showSlides(slideIndex);
                                

function plusSlides(n) { 
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) { 
  showSlides(slideIndex = n); 
}

function showSlides(n) { 
  var i; // variable created with the value of i //
  var slides = document.getElementsByClassName("mySlides"); 
  var dots = document.getElementsByClassName("dot"); 
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length} 
  for (i = 0; i < slides.length; i++) { 
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) { 
      dots[i].className = dots[i].className.replace(" active", ""); 
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var slideIndex = 0;
showSlides();

function showSlides() { // made function showSlides //
  var i; //gave variable value I //
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}



function countdown() { // countdown function made //
    var seconds = document.getElementById("seconds").value; 

    function tick() { 
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); 
    if(seconds == -1) { 
        alert("Time is up"); 
    }
        }
    tick() ;
}