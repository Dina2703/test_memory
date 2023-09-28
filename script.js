const cards = document.querySelectorAll(".card");

const flipFunc = (el) => {
  el.classList.toggle("flip");
};

cards.forEach((card, index) =>
  card.addEventListener("click", () => console.log(index + " clicked"))
);
// console.log(cards);
