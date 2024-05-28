let timer = 1500; // 25 minutes in seconds
let intervalId = null;

const greenbutton = document.getElementById("greenbutton");
const redbutton = document.getElementById("redbutton");
const graybutton = document.getElementById("graybutton");

greenbutton.addEventListener("click", startTimer);

function startTimer() {
  intervalId = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = formatTime(timer);
    if (timer === 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

redbutton.addEventListener("click", stopTimer);

function stopTimer() {
  clearInterval(intervalId);
  document.querySelector('.stop-button').setAttribute("disabled", "true");
  document.querySelector('.start-button').removeAttribute("disabled");
}

graybutton.addEventListener("click", resetTimer);

function resetTimer() {
  timer = 1500;
  document.getElementById("timer").textContent = "25:00";
  clearInterval(intervalId);
  document.querySelector('.stop-button').setAttribute("disabled", "true");
  document.querySelector('.start-button').removeAttribute("disabled");
}

function formatTime(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}