let cancel = document.querySelector(".cancel");
let overlay = document.querySelector(".overlay");
let content = document.getElementById("gallery");
let imgBox = document.querySelector(".imgBox");
let img = document.querySelector(".imgBox img");
let slides = document.querySelectorAll(".slide");
let filterButtons = document.querySelectorAll(".filter");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let count = 0;

// update concept

function updateSlides() {
  slides = document.querySelectorAll(".slide:not([style*='display: none'])");
  count = 0;
}

// filter

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    document.querySelectorAll(".slide").forEach((slide) => {
      const category = slide.dataset.category;
      slide.style.display =
        filter === "all" || filter === category ? "inline-block" : "none";
    });

    updateSlides();
  });
});

// image effect

content.addEventListener("click", (elem) => {
  let currentSrc = elem.target.src;
  if (currentSrc !== undefined) {
    overlay.classList.add("overlayShow");
    imgBox.classList.add("imgShow");
    img.src = currentSrc;
    count = Array.from(slides).findIndex((slide) => slide.src === currentSrc);
  }
});

// cancel button

cancel.addEventListener("click", () => {
  overlay.classList.remove("overlayShow");
  imgBox.classList.remove("imgShow");
});

// previous and next button

prev.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = slides.length - 1;
  }
  img.src = slides[count].src;
});

next.addEventListener("click", () => {
  count++;
  if (count == slides.length) {
    count = 0;
  }
  img.src = slides[count].src;
});
