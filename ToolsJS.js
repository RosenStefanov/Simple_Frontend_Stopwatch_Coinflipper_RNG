function timeToString(time) {
    let diffInHrs = time / 3600000;
    let hh = Math.floor(diffInHrs);

    let diffInMin = (diffInHrs - hh) * 60;
    let mm = Math.floor(diffInMin);

    let diffInSec = (diffInMin - mm) * 60;
    let ss = Math.floor(diffInSec);

    let diffInMs = (diffInSec - ss) * 100;
    let ms = Math.floor(diffInMs);

    let formattedMM = mm.toString().padStart(2, "0");
    let formattedSS = ss.toString().padStart(2, "0");
    let formattedMS = ms.toString().padStart(2, "0");

    return `${formattedMM}:${formattedSS}:${formattedMS}`;
}

let startTime;
let elapsedTime = 0;
let timerInterval;
let rngnumber;
let coin;

function print(txt) {
    document.getElementById("display").innerHTML = txt;
}

function printrng(txt) {
    document.getElementById("display1").innerHTML = txt;
}

function printcoin(txt) {
    document.getElementById("display2").innerHTML = txt;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        print(timeToString(elapsedTime));
    }, 10);
    showButton("PAUSE");
}

function rng() {
    printrng("");

    setTimeout(() => {
        rngnumber = Math.floor(Math.random() * 101);
        printrng(rngnumber);
    }, 150);

}

function coinflip() {
    printcoin(" ");
    setTimeout(() => {
        coin = Math.floor(Math.random() * 2);
        if (coin == 0) {
            printcoin("HEADS")
        } else if (coin == 1) {
            printcoin("TAILS")
        }
    }, 150);

}

function pause() {
    clearInterval(timerInterval);
    showButton("PLAY");
}

function reset() {
    clearInterval(timerInterval);
    print("00:00:00");
    elapsedTime = 0;
    showButton("PLAY");
}

function showButton(buttonKey) {
    const buttonToShow = buttonKey === "PLAY" ? playButton : pauseButton;
    const buttonToHide = buttonKey === "PLAY" ? pauseButton : playButton;
    buttonToShow.style.display = "block";
    buttonToHide.style.display = "none";
}

playButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
resetButton.addEventListener("click", reset);
buttonNewRng.addEventListener("click", rng);
buttonCoin.addEventListener("click", coinflip)