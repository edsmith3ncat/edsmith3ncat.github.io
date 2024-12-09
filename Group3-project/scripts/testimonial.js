/**
 * This script sets up the carousel for the testimonials section on the BarberConnect website.
 * It creates a smooth, interactive experience where testimonials slide automatically,
 * users can also navigate using arrows or dots if they prefer.
 * The goal is to make client feedback easy and enjoyable to read.
 */

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1, // Show one testimonial at a time
    loop: true, // Loop through testimonials
    autoplay: true, // Enable automatic sliding
    autoplayTimeout: 5000, // 5 seconds per slide
    nav: true, // Add navigation arrows
    dots: true // Show navigation dots
  });
});
