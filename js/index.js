
function rollDice() {

    // Generate random number
    let randomNumber1 = Math.floor(Math.random()*6)+1;
    let randomNumber2 = Math.floor(Math.random()*6)+1;

    // Getting the dice elements
    let dice1Src = document.getElementsByClassName("img1")[0];
    let dice2Src = document.getElementsByClassName("img2")[0];

    //Creating the first dice number for the source
    let diceNumber1 = "images/dice" + randomNumber1 + ".png"; 
    dice1Src.setAttribute("src", diceNumber1);

    //Creating the second dice number for the source
    let diceNumber2 = "images/dice" + randomNumber2 + ".png";
    dice2Src.setAttribute("src", diceNumber2);

    // initiate h1 
    let h1;

    // check for winner
    if (randomNumber1 === randomNumber2) {
        h1 = document.querySelector("h1").textContent = "Draw!";

    } else if (randomNumber1 > randomNumber2) {
        h1 = document.querySelector("h1").textContent = "🚩 Player 1 wins!";
        
    } else if (randomNumber1 < randomNumber2) {
        h1 = document.querySelector("h1").textContent = "Player 2 wins! 🚩";

    }
}

const button = document.getElementById("btn");
button.addEventListener('click', rollDice);