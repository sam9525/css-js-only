class CardRotate {
  constructor(options) {
    this.card = options.card;
    this.cards = this.card.querySelectorAll(".card-content");
    this.mask = document.createElement("div");
    // Keep track of the focused clone
    this.focusedClone = null;
  }

  init() {
    this.cards.forEach((card) => {
      this.handleClick(card);
      this.handleMouseMove(card);
      this.handleMouseEnter(card);
      this.handleMouseLeave(card);
    });
  }

  handleClick(card) {
    card.addEventListener("click", () => {
      // Prevent clicking if a card is already focused or if the clicked card is hidden
      if (this.focusedClone || card.style.visibility === "hidden") {
        return;
      }

      // Calcualte Focus Position
      const rect = card.getBoundingClientRect();
      const startX = rect.left + rect.width / 2;
      const startY = rect.top + rect.height / 2;

      // Clone the card
      const clone = card.cloneNode(true);
      // Store the clone
      this.focusedClone = clone;
      // Keep a reference to the original
      clone.originalCard = card;

      // Hide the original card to preserve layout space
      card.style.visibility = "hidden";

      // Set animation start position on the clone
      clone.style.setProperty("--start-x", `${startX}px`);
      clone.style.setProperty("--start-y", `${startY}px`);

      // Add focus class to start animation
      clone.classList.add("focus");

      // Add rotation class to the first image in the clone
      // Avoid the conflicting with the flyIn and flyOut animation
      const cloneImage = clone.querySelector("img:first-child");
      if (cloneImage) {
        cloneImage.classList.add("card-rotation");
      }

      // Add the clone to the body
      document.body.appendChild(clone);

      // Setup and show the mask
      this.mask.id = "background-mask";
      document.body.appendChild(this.mask);

      // Add hover effect to the clone
      this.handleMouseMove(clone);
      this.handleMouseEnter(clone);
      this.handleMouseLeave(clone);

      // Unfocus Logic
      const unfocus = () => {
        // Already unfocused
        if (!this.focusedClone) return;

        // Reference the clone to unfocus
        const currentClone = this.focusedClone;
        const originalCard = currentClone.originalCard;

        currentClone.classList.add("unfocus");
        // Remove mask immediately or animate out
        this.mask.remove();

        // Wait for flyOut animation to finish
        currentClone.addEventListener(
          "animationend",
          () => {
            currentClone.remove();
            // Show original card again
            originalCard.style.visibility = "visible";
            // Clear focused clone tracker
            this.focusedClone = null;
          },
          { once: true }
        );
      };

      // Click mask or clone to unfocus
      this.mask.addEventListener("click", unfocus, { once: true });
      clone.addEventListener("click", unfocus, { once: true });
    });
  }

  handleMouseMove(card) {
    if (!card) return;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const height = rect.height;
      const width = rect.width;

      // Calculate mouse position relative to the card
      const xVal = e.clientX - rect.left;
      const yVal = e.clientY - rect.top;

      const xRotation = -20 * ((yVal - height / 2) / height);
      const yRotation = 20 * ((xVal - width / 2) / width);

      // For focused cards, apply rotation to the image element
      if (card.classList.contains("focus")) {
        const image = card.querySelector("img:first-child");
        if (image) {
          image.style.transform = `rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        }
      } else {
        // For original cards, use the original transform
        const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
        card.style.transform = transformString;
      }
    });
  }

  handleMouseEnter(card) {
    if (!card) return;

    card.addEventListener("mouseenter", () => {
      if (card.classList.contains("focus")) {
        const image = card.querySelector("img:first-child");
        if (image) {
          image.style.transform = "rotateX(0) rotateY(0)";
        }
      } else {
        card.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
      }
    });
  }

  handleMouseLeave(card) {
    if (!card) return;

    card.addEventListener("mouseleave", () => {
      if (card.classList.contains("focus")) {
        const image = card.querySelector("img:first-child");
        if (image) {
          image.style.transform = "rotateX(0) rotateY(0)";
        }
      } else {
        card.style.transform =
          "perspective(500px) scale(1) rotateX(0) rotateY(0)";
      }
    });
  }
}

// Initialize the card rotate functionality
document.addEventListener("DOMContentLoaded", () => {
  const cardRotate = new CardRotate({
    card: document.querySelector(".card"),
  });
  cardRotate.init();
});
