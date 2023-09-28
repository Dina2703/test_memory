const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  }

  secondCard = this;
  hasFlippedCard = false;

  checkForMatch();
}

function checkForMatch() {
  if (firstCard.dataset.color === secondCard.dataset.color) {
    disableCards();
    return;
  }

  unFlipCards();
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
}
function unFlipCards() {
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }, 1500);
}

// A more elegantly way of writing the matching condition is to use a ternary operator.
// let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// isMatch ? disableCards() : unflipCards();

cards.forEach((card) => card.addEventListener("click", flipCard));
