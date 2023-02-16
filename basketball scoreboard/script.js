const homeDisplay= document.querySelector(" .box-1 h1");
const guestDisplay = document.querySelector('.box-2 h1');

let homeScore = 0
let guestScore= 0

// HOMESCORE FUNCTION
function add1_1() {
  homeScore += 1;
  homeDisplay.innerText = homeScore;
}

function add2_1() {
  homeScore += 2;
  homeDisplay.innerText = homeScore;
}

function add3_1() {
  homeScore += 3;
  homeDisplay.innerText = homeScore;
}

function reset1() {
  homeScore = 0;
  homeDisplay.innerText = homeScore;
}

//GUESTSCORE FUNCTION
function add1_2() {
guestScore += 1;
guestDisplay.innerText = guestScore;
}

function add2_2() {
  guestScore += 2;
  guestDisplay.innerText = guestScore;
}

function add3_2() {
  guestScore += 3;
  guestDisplay.innerText = guestScore;
}

function reset2() {
  guestScore = 0;
  guestDisplay.innerText = guestScore;
}

const timer = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let timeInSeconds = 300;
let intervalId;

function startTimer() {
  if (!intervalId) {
    intervalId = setInterval(() => {
      if (timeInSeconds <= 0) {
        clearInterval(intervalId);
        timer.innerText = "00:00:00";
        startBtn.disabled = false;
        stopBtn.disabled = true;
      } else {
        timeInSeconds--;
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;
        timer.innerText = `${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
      }
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
  startBtn.disabled = false;
  stopBtn.disabled = true;
}
