const cards = document.querySelectorAll(".card");

let hasTurnedCard = false;
let boardLock = false;
let cardOne, cardTwo;
let moves = 0;
let counter = document.querySelector(".moves");
let second = 0, minute = 0, hour = 0;
let timer = document.querySelector(".timer");
let restartButton = document.querySelector(".restart");


const turnCard = e => {
    if (boardLock) return;

    const target = e.target.parentElement;

    if (target === cardOne) return;

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
    const isEqual = cardOne.dataset.framework === cardTwo.dataset.framework;

    isEqual ? disableCards() : unturnCards();
};


const disableCards = () => {
    cardOne.removeEventListener("click", turnCard);
    cardTwo.removeEventListener("click", turnCard);
};

const unturnCards = () => {
    boardLock = true;

        setTimeout(() => {
            cardOne.classList.remove("turn");
            cardTwo.classList.remove("turn");

        restartBoard();
        }, 1000);
};

const restartBoard = () => {
    // spread operator (left here for version control)
    //[hasTurnedCard, boardLock] = [false, false];
    //[cardOne, cardTwo] = [null, null];


    // Good version, double insertation
    hasTurnedCard = boardLock = false;
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

restartButton.addEventListener("click", function(){location.reload(true)});

/* Weather Forecast API */

$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Rīga,LV&units=metric&APPID=5f18c160394ef7c42881dcd5a5a0c781", 
function(data) {
    console.log(data);

    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = Math.floor(data.main.temp);

    var weather = data.weather[0].main;
        
    $(".icon").attr("src", icon);
    $(".weather").append(weather);
    $(".temp").append(temp);
  }
);