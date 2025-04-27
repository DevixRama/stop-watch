
console.log("working time-watch in javascript");

// add UI to container class
let container = document.getElementsByClassName("container")[0]



// Access the button
let startBtn = document.getElementsByClassName("btn")[0].getElementsByTagName("button")[0]
let stopBtn = document.getElementsByClassName("btn")[0].getElementsByTagName("button")[1]
let resetBtn = document.getElementsByClassName("btn")[0].getElementsByTagName("button")[2]



// Button access by addEventListener
let seconds = 0;
let timerId;

function startTimer() {
    timerId = setInterval(() => {
        seconds++;
        let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
        let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        let secs = String(seconds % 60).padStart(2, '0');
        container.querySelector('.timer').innerHTML = `${hrs}:${mins}:${secs}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerId);
}

function resetTimer() {
    container.querySelector('.timer').innerHTML = "00:00:00";
    seconds = 0;
    stopTimer();
}


startBtn.addEventListener("click", startTimer)
stopBtn.addEventListener("click",stopTimer)
resetBtn.addEventListener("click", resetTimer)


