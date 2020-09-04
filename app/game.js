const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.start-button');

let lastHole = null;
let timeUp = false;
let timeLimit = 20000;
let score = 0;
let countdown = null;

const pickRandomHole = (holes) => {
    const randomHole = Math.floor(Math.random() * holes.length);
    const hole = holes[randomHole];
    if (hole !== lastHole) {
        lastHole = hole;
        return hole;
    }
    return pickRandomHole(holes);
};

const popOut = () => {
    const time = Math.random() * 1300 + 400;
    const hole = pickRandomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp)
            popOut();
    }, time);
};
// popOut();
