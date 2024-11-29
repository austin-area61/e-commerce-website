const carouselInner = document.querySelector(".carousel-inner");
const indicators = document.querySelectorAll(".indicator");
let currentSlide = 0;

// Function to switch slides
function switchSlide(slideIndex) {
  const offset = slideIndex * -100; // Adjust for 100% width
  carouselInner.style.transform = `translateX(${offset}%)`;
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle("active", index === slideIndex);
  });
  currentSlide = slideIndex;
}

// Add click event to indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => switchSlide(index));
});

// Auto-slide functionality (optional)
setInterval(() => {
  const nextSlide = (currentSlide + 1) % indicators.length;
  switchSlide(nextSlide);
}, 5000); // Slide every 5 seconds
