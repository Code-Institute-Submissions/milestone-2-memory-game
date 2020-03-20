const cards = document.querySelectorAll(".card");

let hasTurnedCard = false;
let secureBoard = false;
let cardOne, cardTwo;

/* Function for turning Cards */

function turnCard() {
    if (secureBoard) return;
    if (this === cardOne) return;

    this.classList.add("turn");

    if (!hasTurnedCard) {
        hasTurnedCard = true;
        cardOne = this;

        return;
    }

    cardTwo = this;
    checkForBingo();
}
/* Checking for a Match (Needs fixing) */

function checkForBingo() {
    let isCorrect = cardOne.dataset.framework === cardTwo.dataset.framework;
    isCorrect ? unableCards() : unturnCards();
}

function unableCards() {
    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);

    restartBoard();
}

function reverseCards() {
    secureBoard = true;

    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");

    restartBoard();
    }, 1500);
}

function restartBoard() {
    hasTurnedCard = secureBoard = false;
    cardOne = cardTwo = null;
}

/* Randomising the card Pairs */

(function randomise() {
    cards.forEach(card => {
        const secretLocation = Math.floor(Math.random() * cards.length);
        card.style.order = secretLocation;
    });
})();

cards.forEach(card => card.addEventListener("click", turnCard));