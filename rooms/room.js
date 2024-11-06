let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function showNextTestimonial() {
    testimonials[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % testimonials.length;
    testimonials[currentIndex].classList.add('active');
}

// Change testimonial every 5 seconds
setInterval(showNextTestimonial, 5000);


const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});