const slideImages = document.querySelectorAll(".slide-image");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const numberOfImages = slideImages.length;
let currentImage = 0;

// Next Button

nextBtn.addEventListener("click", () => {
  currentImage++;

  if (currentImage > numberOfImages - 1) {
    currentImage = 0;
  }

  updateActiveClass();
});

// Update Active Class

function updateActiveClass() {
  const currentActiveSlide = document.querySelector(".slide-image.active");

  currentActiveSlide.classList.remove("active");
  slideImages[currentImage].classList.add("active");
}

// Previous Button

prevBtn.addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = numberOfImages - 1;
  }

  updateActiveClass();
});

// Automate Slider

setInterval(automateSlide, 5000);

function automateSlide() {
  currentImage++;

  if (currentImage > numberOfImages - 1) {
    currentImage = 0;
  }

  updateActiveClass();
}
