// this section deals with game functionality
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

function play(userInput) {
    const playerChoice = userInput;
    const computerChoice = getComputerChoice();
    const outcome = assessOutcome(playerChoice, computerChoice);
};

// this section handles DOM manipulation

const BODY = document.querySelector("body");
const GAME_DIV = document.createElement("div");
const OPTION_DIV = document.createElement("div");

BODY.appendChild(GAME_DIV);
GAME_DIV.appendChild(OPTION_DIV);

// this section handles the button creation and their events

function createButtons() {
    let buttonList = ["rock", "paper", "scissors"];
    
    buttonList = buttonList.map((button) => {
        const myButton = document.createElement("button");
        myButton.textContent = button;
        myButton.setAttribute("id", button);
        return myButton;
    });

    return buttonList;
};

function setButtonListenerEvent(buttonObject) {
    
    buttonObject.addEventListener('click', () => {
        play(buttonObject.textContent);
    });
    return buttonObject;
};

function appendButtons() {
    let myButtons = createButtons();
    myButtons = myButtons.map((button) => setButtonListenerEvent(button));
    myButtons.forEach((button) => OPTION_DIV.appendChild(button));
}

appendButtons();