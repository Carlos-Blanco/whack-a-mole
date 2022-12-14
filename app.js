const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeleft = document.querySelector('#timeLeft');
let score = document.querySelector('#score');

let result = 0;
let currentTime = 60

function randomSquare() {
  square.forEach( className  => {
    className.classList.remove('mole');
  });
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole');
  hitPosition = randomPosition.id;
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if(id.id === hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null
    }
  })
})

function moveMole() {
  let timerId = null;
  timerId = setInterval(randomSquare, 1000);
}
 
moveMole();

function countDown() {
  currentTime--;
  timeleft.textContent = currentTime;
  if(currentTime === 0) {
    clearInterval(timerId);
    alert('GAME OVER, YOUR SCORE IS ' + result);
  }
}

let timerId = setInterval(countDown, 1000);
