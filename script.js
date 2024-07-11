
let random = Math.trunc(Math.random() * 3 + 1);

const sci = document.querySelector(".scissors");
const pap = document.querySelector(".paper");
const roc = document.querySelector(".rock");
const playerr = document.querySelector(".player");;
const computerr = document.querySelector(".computer");
const display1 = document.querySelector(".display1");
const display2 = document.querySelector(".display2");
const again = document.querySelector(".again");
const overlay = document.querySelector(".overlay");

let playerScore = 0;
let computerScore = 0;

const open = function () {

    again.classList.remove("hidden");
    overlay.classList.remove("hidden");
   
}

const close = function () {
    again.classList.add("hidden");
    overlay.classList.add("hidden");
   
}


let check = function () {
    if (random == "1") {
        display2.innerHTML = "<H1>✌️ <H1>"
    }
    else if (random == "2") {
        display2.innerHTML = "<H1> 🫱 <H1>"
    } else if (random == "3") {
        display2.innerHTML = "<H1>👊 <H1>"
    }
}

let scissors = function () {

    music();
    if (playerScore < "3" && computerScore < "3") {
        random = Math.trunc(Math.random() * 3 + 1);
        check();
        console.log(random);
        display1.innerHTML = "<h1>✌️<h1>";

        if (random == 1) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore;

        }
        if (random == 2) {
            playerr.innerHTML = playerScore += 1;
            computerr.innerHTML = computerScore;
        }
        if (random == 3) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore += 1;
        }
    }
    decide();
}


let paper = function () {
    music();
    if (playerScore < "3" && computerScore < "3") {
        random = Math.trunc(Math.random() * 3 + 1);
        console.log(random);
        check();
        display1.innerHTML = "<h1>🫱 <h1>"
        if (random == 1) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore += 1;
        }
        if (random == 2) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore;
        }
        if (random == 3) {
            playerr.innerHTML = playerScore += 1;
            computerr.innerHTML = computerScore;
        }
    }
    decide();
}


let rock = function () {
    music();
    if (playerScore < "3" && computerScore < "3") {
        random = Math.trunc(Math.random() * 3 + 1);
        check();
        console.log(random);
        display1.innerHTML = "<h1>👊<H1>"
        if (random == 1) {
            playerr.innerHTML = playerScore += 1;
            computerr.innerHTML = computerScore;
        }
        if (random == 2) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore += 1;
        }
        if (random == 3) {
            playerr.innerHTML = playerScore;
            computerr.innerHTML = computerScore;
        }

    }
    decide();
}
let decide = function () {

    if (playerScore == "3") {
        gameover();
        playerr.innerHTML = `(${playerScore})`;
        computerr.innerHTML = `(${computerScore})`;
        document.querySelector(".scoretitle").innerHTML = "GAME OVER"
        open();
    }
    else if (computerScore == "3") {
        gameover();
        playerr.innerHTML = `(${playerScore})`;
        computerr.innerHTML = `(${computerScore})`;
        document.querySelector(".scoretitle").innerHTML = "GAME OVER"
        open();
    }
}

sci.addEventListener("click", scissors);
pap.addEventListener("click", paper);
roc.addEventListener("click", rock);



again.addEventListener("click", function () {

   
    random = Math.trunc(Math.random() * 3 + 1);
    playerScore = 0;
    computerScore = 0;
    playerr.innerHTML = playerScore;
    computerr.innerHTML = computerScore;
    close();
});

let music=function(){
    let audio=new Audio("clickk.mp3");
    audio.play();
    console.log( audio.play());
}
let gameover=function(){
    new Audio("gameover.mp3").play();
}

