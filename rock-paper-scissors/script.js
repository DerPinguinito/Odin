// this section deals with game functionality

let roundNumber = 0;
let userScore = 0;
let computerScore = 0;


function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
};


function getComputerChoice() {
    const randomNumber = getRandomNumber();
    
    switch(true) {
        case (randomNumber === 1):
            return "rock";
        case (randomNumber === 2):
            return "paper";
        default:
            return "scissors";
    };
};


function assessOutcome(playerChoice, computerChoice) {

    switch(true) {
        case (playerChoice === computerChoice):
            return "draw";
        case (playerChoice === "rock" && computerChoice === "scissors"):
            return "winner";
        case (playerChoice === "paper" && computerChoice === "rock"):
            return "winner";
        case (playerChoice === "scissors" && computerChoice === "paper"):
            return "winner";
        default:
            return "loser";
    };
};


function updateScores() {
    PLAYER_SCORE.textContent = `Player: ${userScore}`;
    COMPUTER_SCORE.textContent = `Computer: ${computerScore}`;
}


function addScores(outcome) {
    
    switch(true) {
        case (outcome === "winner"):
            userScore++;
            updateScores();
            break;
        case (outcome === "loser"):
            computerScore++;
            updateScores;
            break;
        default:
            break;
    };
};


function checkIfWinner() {
    
    if (userScore < 5 && computerScore < 5) {
        return;
    } else if (userScore === 5) {
        null // if user is the winner
    } else {
        null // if computer is the winner
    }
    
};



function updateRoundNumber() {
    roundNumber++;
    ROUND_NUMBER.textContent = `Round #${roundNumber}`;
};


function displayOutcome(playerChoice, computerChoice, outcome) {
    const OUTPUT = `Player draws ${playerChoice}. Computer draws ${computerChoice}. `;
    
    switch(true) {
        case (outcome === "winner"):
            DRAWS.textContent = OUTPUT + "You win!";
            break;
        case (outcome === "loser"):
            DRAWS.textContent = OUTPUT + "You lose!";
            break;
        default:
            DRAWS.textContent = OUTPUT + "It's a draw";
            break;
    };
};


function play(userInput) {
    updateRoundNumber();
    const playerChoice = userInput;
    const computerChoice = getComputerChoice();
    const outcome = assessOutcome(playerChoice, computerChoice);
    displayOutcome(playerChoice, computerChoice, outcome);
    addScores(outcome);
};


function resetGame() {
    roundNumber = 0;
    userScore = 0;
    computerScore = 0;
    updateScores();
    ROUND_NUMBER.textContent = '';
    DRAWS.textContent = '';
};


// this section handles DOM manipulation

const BODY = document.querySelector("body");
const GAME_DIV = document.createElement("div");
const RESULTS_DIV = document.createElement("div");
const OPTION_DIV = document.createElement("div");
const ROUND_DIV = document.createElement("div");

BODY.appendChild(GAME_DIV);
GAME_DIV.appendChild(RESULTS_DIV);
GAME_DIV.appendChild(OPTION_DIV);
GAME_DIV.appendChild(ROUND_DIV);

const PLAYER_SCORE = document.createElement("p");
PLAYER_SCORE.textContent = `Player: ${userScore}`;
const COMPUTER_SCORE = document.createElement("p");
COMPUTER_SCORE.textContent = `Computer: ${computerScore}`;

RESULTS_DIV.appendChild(PLAYER_SCORE);
RESULTS_DIV.appendChild(COMPUTER_SCORE);

const ROUND_NUMBER = document.createElement("p");

ROUND_DIV.appendChild(ROUND_NUMBER);

const ROUND_DRAWS = document.createElement("div");

ROUND_DIV.appendChild(ROUND_DRAWS);

const DRAWS = document.createElement("p");

ROUND_DRAWS.appendChild(DRAWS);


// this section handles the button creation and their events

function createButtons() {
    let buttonList = ["rock", "paper", "scissors", "reset"];
    
    buttonList = buttonList.map((button) => {
        const myButton = document.createElement("button");

        if (button !== "reset") { 
            myButton.toggleAttribute("rps");
            myButton.textContent = button;
            return myButton;

        } else {
            myButton.toggleAttribute("reset");
            myButton.textContent = button;
            return myButton;
        };
    });

    return buttonList;
};


function setButtonListenerEvent(buttonObject) {
    
    if (buttonObject.textContent === "reset") {
        
        buttonObject.addEventListener('click', () => {
            resetGame();
        });

    } else {

        buttonObject.addEventListener('click', () => {
            play(buttonObject.textContent);
        });
    };

    return buttonObject;
};


function appendButtons() {
    let myButtons = createButtons();
    myButtons = myButtons.map((button) => setButtonListenerEvent(button));
    myButtons.forEach((button) => OPTION_DIV.appendChild(button));
}


appendButtons();