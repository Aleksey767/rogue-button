const randomValue = 20;
const maxAttempts = 15;
const words = [
    "nice try",
    "whew close!",
    "missed me!",
    "are you even trying?",
    "too slow!",
    "given up yet?",
    "you'll never catch me!",
    "try to be better",
    "just do it",
    "do not give up",
    "you are doing well",
    "almost got it",
];

const cancelButton = document.querySelector(".cancel-btn");
const cancelHeader = document.querySelector(".cancel-header");
const ghost = document.querySelector(".ghost");

let pityCount = 0;

function getRandomInt(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

function runAway() {
    if (pityCount < maxAttempts) {
        pityCount += 1;
        cancelButton.textContent = words[getRandomInt(0, words.length - 1)];
        ghost.style.cssText = `transform: translate(${getRandomInt(-randomValue, randomValue)}vw, ${getRandomInt(-randomValue, randomValue)}vh);`;
    } else {
        cancelButton.textContent = "Ok, I'm tired and I'm leave";
        cancelHeader.textContent = "Your purchase was successful.";
        ghost.style.cssText = "opacity: 0; pointer-events: none;";
    }
}

cancelButton.addEventListener("mouseover", runAway)