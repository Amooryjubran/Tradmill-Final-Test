let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const content = document.getElementById("content");
const button = document.getElementById("show-more");
const learnMore = document.getElementById("learn");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot, index) => {
      dot.classList.remove("active");
    });
  });

  slides[n].style.display = "block";
  slides[n].style.animation = "moveInLeft 2s ease-in-out";

  dots[n].classList.add("active");
};

button.addEventListener("click", (n) => {
  content.classList.toggle("shrink");
  content.style.animation = "showDetails 2s ease-in-out";

  if (content.className == "shrink") {
    content.style.display = "block";
    button.classList.add("tr-left");
    button.classList.remove("tr-right");
    learnMore.style.opacity = "0";
    learnMore.style.display = "none";

    slides.forEach((slide, index) => {
      slide.classList.add("horizTranslate");
      slide.classList.remove("translateBack");
    });
  } else {
    content.style.display = "none";
    button.classList.add("tr-right");
    button.classList.remove("tr-left");
    learnMore.style.opacity = "1";
    learnMore.style.display = "block";
    slides.forEach((slide, index) => {
      slide.classList.remove("horizTranslate");
      slide.classList.add("translateBack");
    });
  }
});

document.addEventListener("DOMContentLoaded", init(currentSlide));
const next = () => {
  currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);

document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 8000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});
