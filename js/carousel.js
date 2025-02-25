class Carousels {
  constructor(options) {
    this.slideWidth = 750;
    this.container = options.container;
    this.slides = this.container.querySelector(".slides");
    this.slideElements = this.container.querySelectorAll(options.slideClass);
    this.prevButton = this.container.querySelector(".prev");
    this.nextButton = this.container.querySelector(".next");
    this.dotsNav = this.container.querySelector(options.dotsClass);
    this.dots = this.dotsNav ? Array.from(this.dotsNav.children) : [];
    this.slidesPerView = options.slidesPerView || 1;

    // State
    this.currentSlide = 0;
    this.isDragging = false;
    this.startPos = 0;
    this.currentTranslate = 0;

    this.currentMultiSlide = 0;
    this.multiCurrentTranslate = 0;

    this.slideCount = Math.ceil(this.slideElements.length / this.slidesPerView);

    this.init();
  }

  init() {
    // Add the active class to the first slide
    if (this.slidesPerView === 1) {
      this.slideElements[this.currentSlide].classList.add("active");
    }

    // Add the active class to the first dot
    this.dots[this.currentSlide]
      .querySelector("button")
      .classList.add("active");

    this.bindEvents();
  }

  bindEvents() {
    // Navigation buttons
    this.prevButton.addEventListener("click", () => this.updateSlides("prev"));
    this.nextButton.addEventListener("click", () => this.updateSlides("next"));

    // Dots navigation
    this.dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        this.moveToSlide(index);
      });
    });

    // Add mouse event listeners to single slide
    this.slides.addEventListener("mousedown", (e) => this.dragStart(e));
    this.slides.addEventListener("mousemove", (e) => this.drag(e));
    this.slides.addEventListener("mouseup", () => this.dragEnd());
    this.slides.addEventListener("mouseleave", () => this.dragEnd());

    // Add touch event listeners
    this.slides.addEventListener("touchstart", (e) => this.dragStart(e), {
      passive: true,
    });
    this.slides.addEventListener("touchmove", (e) => this.drag(e), {
      passive: false,
    });
    this.slides.addEventListener("touchend", () => this.dragEnd());
  }

  updateSlides(direction) {
    // Remove the active class from the current slide
    this.slideElements[this.currentSlide].classList.remove("active");

    // Remove the active class from the dots button
    this.dots[this.currentSlide]
      .querySelector("button")
      .classList.remove("active");

    // Update the current slide
    const increment = direction === "prev" ? -1 : 1;

    this.currentSlide =
      (this.currentSlide + increment + this.slideCount) % this.slideCount;

    this.updateUI();
  }

  moveToSlide(index) {
    // Remove the active class from the current slide
    this.slideElements[this.currentSlide].classList.remove("active");

    // Remove the active class from the dots button
    this.dots[this.currentSlide]
      .querySelector("button")
      .classList.remove("active");

    this.currentSlide = index;

    this.updateUI();
  }

  updateUI() {
    // Add the active class to the current slide, only if there is only one slide per view
    if (this.slidesPerView === 1) {
      this.slideElements[this.currentSlide].classList.add("active");
    }
    // Add the active class to the first dot
    this.dots[this.currentSlide]
      .querySelector("button")
      .classList.add("active");

    // Move the slides by the width of the current slide
    requestAnimationFrame(() => {
      this.slides.style.transform = `translateX(${
        -this.currentSlide * this.slideWidth
      }px)`;
    });

    // Update the current translate
    this.currentTranslate = -this.currentSlide * this.slideWidth;
  }

  dragStart(e) {
    this.isDragging = true;
    this.startPos = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;

    // Update the previous translate
    this.prevTranslate = this.currentTranslate;
    this.slides.classList.add("dragging");
  }

  drag(e) {
    if (!this.isDragging) return;

    // Prevent the page from scrolling when dragging
    if (e.type.includes("touch")) {
      e.preventDefault();
    }

    // Calculate the difference between the current position and the start position
    const currentPosition = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    const diff = currentPosition - this.startPos;

    // Update the current translate
    this.currentTranslate = this.prevTranslate + diff;

    // Limit the drag to the first and last slides
    // Calculate the minimum translate value:
    // - slideCount - 1 gives us the index of the last slide
    // - Multiply by slideWidth to get total distance to last slide
    // - Negative since we're moving slides to the left
    const minTranslate = -(this.slideCount - 1) * this.slideWidth;

    // Calculate the maximum translate value:
    // - 0 since we're moving slides to the left
    this.currentTranslate = Math.max(
      Math.min(this.currentTranslate, 0),
      minTranslate
    );

    requestAnimationFrame(() => {
      this.slides.style.transform = `translateX(${this.currentTranslate}px)`;
    });
  }

  dragEnd() {
    if (!this.isDragging) return;
    this.isDragging = false;
    this.slides.classList.remove("dragging");

    // Calculate the current slide based on the current translate and slidesPerView
    this.currentSlide = Math.min(
      Math.round(-this.currentTranslate / this.slideWidth),
      this.slideCount - 1
    );

    // Update position and state
    this.currentTranslate = -this.currentSlide * this.slideWidth;
    this.prevTranslate = this.currentTranslate;

    requestAnimationFrame(() => {
      this.slides.style.transform = `translateX(${this.currentTranslate}px)`;

      // Update active states only for single slide view
      if (this.slidesPerView === 1) {
        this.slideElements.forEach((slide, index) => {
          slide.classList.toggle("active", index === this.currentSlide);
        });
      }

      this.dots.forEach((dot, index) => {
        dot
          .querySelector("button")
          .classList.toggle("active", index === this.currentSlide);
      });
    });
  }
}
const prevBtn = `<button type="button" class="prev">
            <i class="ri-arrow-left-s-line" style="font-size: 20px"></i>
          </button>`;

const nextBtn = `<button type="button" class="next">
            <i class="ri-arrow-right-s-line" style="font-size: 20px"></i>
          </button>`;

function createSlides(track, slideClass, count) {
  const slideTrack = document.querySelector(`.${track}`);

  const slidesHtml = `<div class="slides">
    ${Array.from({ length: count }, (_, i) => {
      return `<div class="${slideClass}">
        <h3>${i + 1}</h3>
      </div>`;
    }).join("")}
  </div>`;

  slideTrack.innerHTML = prevBtn + slidesHtml + nextBtn;
}

function createDots(dotsClass, count) {
  const dots = document.querySelector(`.${dotsClass}`);

  const dotsHtml = `
    ${Array.from({ length: count }, (_, i) => {
      return `<li id="slide-dot-${i + 1}">
        <button type="button"></button>
      </li>`;
    }).join("")}`;

  dots.innerHTML = dotsHtml;
}

document.addEventListener("DOMContentLoaded", function () {
  createSlides("single-track", "single-slide", 6);
  createDots("single-slide-dots", 6);
  createSlides("multiple-track", "multiple-slide", 9);
  createDots("multiple-slide-dots", 3);
  // createSlides("center-track", "center-slide", 9);

  // Single slide carousel
  new Carousels({
    container: document.querySelector(".single-container"),
    slideClass: ".single-slide",
    dotsClass: ".single-slide-dots",
    slidesPerView: 1,
  });

  // Multiple slides carousel
  new Carousels({
    container: document.querySelector(".multiple-container"),
    slideClass: ".multiple-slide",
    dotsClass: ".multiple-slide-dots",
    slidesPerView: 3,
  });
});
