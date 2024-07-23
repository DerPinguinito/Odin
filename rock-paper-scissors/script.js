let playerScore = 0;
let computerScore = 0;

const DRAW_ALERT = "it's a draw";
const WINNER_ALERT = "you win!";
const LOSE_ALERT = "you lose!";


function genRandom() {
    return Math.floor(Math.random() * 3) + 1;
};


function matchChoice(choiceNumber) {
    switch(true) {
        case (choiceNumber === 1):
            return "rock";
        case (choiceNumber === 2):
            return "paper";
        default:
            return "scissors";
    };
};


function getChoice(input) {
    switch(true) {
        case (input === 1):
            return "rock";
        case (input === 2):
            return "paper";
        default:
            return "scissors";
    };
};


function play(playerChoice) {
    const P1 = playerChoice;
    const P2 = matchChoice(genRandom());
    let result = "";

    switch(true) {
        case (P1 === P2):
            result = "draw";
            alert(DRAW_ALERT);
            break;
        case (P1 === "rock" && P2 === "scissors"):
            result = "win";
            alert(WINNER_ALERT);
            break;
        case (P1 === "paper" && P2 === "rock"):
            result = "win";
            alert(WINNER_ALERT);
            break;
        case (P1 === "scissors" && P2 === "paper"):
            result = "win";
            alert(WINNER_ALERT);
            break;
        default:
            result = "lose";
            alert(LOSE_ALERT);
            break;
    };

    switch(true) {
        case (result === "draw"):
            break;
        case (result === "win"):
            playerScore++;
            break;
        default:
            computerScore++;
            break;
    };

    checkWinner();
};


function checkWinner() {
    if (playerScore < 5 && computerScore < 5) {
        getInput();
    } else if (playerScore === 5) {
        alert("You're the winner!");
        return;
    } else {
        alert("Computer wins!");
        return;
    };

};

function getInput() {
    let input = prompt("Input 1 for Rock, 2 for Paper or 3 for Scissors");
    input = parseInt(input);
    if (input !== 1 && input !== 2 && input !== 3) {
        alert("Please enter a valid option only");
        getInput();
    } else {
        const CHOICE = getChoice(input);
        play(CHOICE);
    };

};

getInput();