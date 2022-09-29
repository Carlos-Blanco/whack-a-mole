const square = document.querySelectorAll('.sqaure');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#timeLeft');
let score = document.querySelector('#score');

let result = 0;

function ramdomSquare() {
  square.forEach( className  => {
    className.classList.remove('.mole');
  });
  let ramdomposition = square[Math.floor(Math.ramdom()*9)]
}