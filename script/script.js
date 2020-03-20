const cards = document.querySelectorAll(".card");

let hasTurnedCard = false;
let cardOne, cardTwo;

const turnCard = e => {
    const target = e.target.parentElement;

    target.classList.add("turn");

    if (!hasTurnedCard) {
        // First Click

        hasTurnedCard = true;
        cardOne = target;
    } else {
        // Second click

        hasTurnedCard = false;
        cardTwo = target;

        checkForBingo();
    }
};

// Check for same cards

const checkForBingo = () => {
    if (cardOne.dataset.framework === cardTwo.dataset.framework) {
        cardOne.removeEventListener("click", turnCard);
        cardTwo.removeEventListener("click", turnCard);
    } else {
        setTimeout(() => {
            cardOne.classList.remove("turn");
            cardTwo.classList.remove("turn");
        }, 1000);
    }
};

/* Function for turning Cards */

//function turnCard() {
   

/* Randomising the card Pairs */

(function randomise() {
    cards.forEach(card => {
        const secretLocation = Math.floor(Math.random() * cards.length);
        card.style.order = secretLocation;
    });
})();

cards.forEach(card => card.addEventListener("click", turnCard));