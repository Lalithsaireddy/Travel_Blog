var slideIndex = 0;
var timer; // Timer variable for the slideshow

// Function to start the automatic slideshow
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";

    // Set a timer for the next slide
    timer = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to navigate slides manually
function changeSlide(step) {
    clearTimeout(timer); // Stop the automatic slideshow
    var slides = document.getElementsByClassName("mySlides");

    // Update the slide index
    slideIndex += step;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }

    // Show the selected slide
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";
}

// Add event listeners for navigation buttons
document.querySelector(".prev").addEventListener("click", function() {
    changeSlide(-1);
});

document.querySelector(".next").addEventListener("click", function() {
    changeSlide(1);
});

// Start the slideshow on page load
showSlides();
