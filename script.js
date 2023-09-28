const cards = document.querySelectorAll(".card");
const restartBtn = document.querySelector(".btn");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard = null;
let secondCard = null;

restartBtn.addEventListener("click", reset);

function reset() {
  location.reload();
}

function flipCard() {
  if (lockBoard) return;

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
  lockBoard = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false;
  }, 1500);
}

// A more elegantly way of writing the matching condition is to use a ternary operator.
// let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
// isMatch ? disableCards() : unflipCards();

(function shuffle() {
  cards.forEach((card) => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
})();

cards.forEach((card) => card.addEventListener("click", flipCard));
