document.addEventListener("DOMContentLoaded", () => {
  // Wait for the fade-out animation to complete
  setTimeout(() => {
    const initialOverlay = document.querySelector(".initial-overlay");
    const carousel = document.querySelector(".carousel");

    // Hide the initial overlay
    initialOverlay.style.display = "none";

    // Show the carousel
    carousel.classList.add("active");
  }, 4000); // Total delay: 3s (animation delay) + 1s (animation duration)
});
