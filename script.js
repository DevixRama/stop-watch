console.log("time-watch is working javascript");



let buttons = document.querySelectorAll(".structure button");
let toggleBtn = buttons[0];
let resetBtn = buttons[1];
let timerDisplay = document.querySelector(".timer");
let totalCenSec = 0;
let timerId;
let isRunning = false;




function toggleTimer() {

    if (isRunning) {

        clearInterval(timerId);
        toggleBtn.innerText = "Start";

    } else {

        timerId = setInterval(() => {
            totalCenSec++;
            let mins = String(Math.floor(totalCenSec / 6000)).padStart(2, '0');
            let secs = String(Math.floor((totalCenSec % 6000) / 100)).padStart(2, '0');
            let cenSec = String(totalCenSec % 100).padStart(2, '0');
            timerDisplay.innerHTML = `${mins}:${secs}:${cenSec}`;
        }, 10);
        toggleBtn.innerText = "Stop";
    }
    isRunning = !isRunning;
    toggleBtn.style.backgroundColor = isRunning ? "gray" : "green";
}


function resetTimer() {
    clearInterval(timerId);
    isRunning = false;
    toggleBtn.innerText = "Start";
    totalCenSec = 0;
    timerDisplay.innerText = "00:00:00";
    toggleBtn.style.backgroundColor = "green"; // reset color
}



toggleBtn.addEventListener("click", toggleTimer)
resetBtn.addEventListener("click", resetTimer)


