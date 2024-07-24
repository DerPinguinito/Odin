// this section deals with game functionality

function play(choice) {
    console.log(choice);
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