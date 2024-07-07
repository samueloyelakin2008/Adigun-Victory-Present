// JavaScript (in script.js file)
// Add a fade-in effect to the message and gallery
document.addEventListener("DOMContentLoaded", function() {
    const message = document.querySelector(".message");
    const gallery = document.querySelector(".gallery");
    message.style.opacity = 0;
    gallery.style.opacity = 0;
    setTimeout(function() {
        message.style.opacity = 1;
        gallery.style.opacity = 1;
        message.style.transition = "opacity 2s";
        gallery.style.transition = "opacity 2s";
    }, 500);
});

// Add a hover effect to the images
const images = document.querySelectorAll(".gallery img");
images.forEach(function(image) {
    image.addEventListener("mouseover", function() {
        image.style.transform = "scale(1.1)";
        image.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    });
    image.addEventListener("mouseout", function() {
        image.style.transform = "scale(1)";
        image.style.boxShadow = "none";
    });
});
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(nextSlide, 3000);
