const cards = document.querySelectorAll(".card");

let hasTurnedCard = false;
let resetBoard = false;
let cardOne, cardTwo;

function turnCard() {
    this.classList.add("turn");

    if (!hasTurnedCard) {
        hasturnedCard = true;
        cardOne = this;
    }

    cardTwo = this;
    hasTurnedCard = false;

    checkForBingo();
}

function checkForBingo() {
    let bingo = cardOne.dataset.name === cardTwo.dataset.name;
    bingo ? unableCards() : reverseCards();
}

function unableCards() {
    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);
}

function reverseCards() {
    resetBoard = true;

    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");

    resetBoard = false;
    }, 1500);
}

cards.forEach(card => card.addEventListener("click", turnCard));