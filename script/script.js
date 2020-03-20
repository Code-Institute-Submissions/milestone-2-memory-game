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
    secureBoard = true;

    checkForBingo();
}
/* Checking for a Match (Needs fixing) */

function checkForBingo() {
    let isCorrect = cardOne.dataset.name === cardTwo.dataset.name;
    isCorrect ? unableCards() : unturnCards();
}

function unableCards() {
    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);

    restartBoard();
}

function reverseCards() {
    setTimeout(() => {
        cardOne.classList.remove("turn");
        cardTwo.classList.remove("turn");

    restartBoard();
    }, 1500);
}

function restartBoard() {
    [hasTurnedCard, secureBoard] = [false, false];
    [cardOne, cardTwo] = [null, null];
}

/* Randomising the card Pairs */

(function randomise() {
    cards.forEach(card => {
        let secretLocation = Math.floor(Math.random() * 12);
        card.style.order = secretLocation;
    });
})();

cards.forEach(card => card.addEventListener("click", turnCard));