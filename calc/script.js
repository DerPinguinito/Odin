class Calculator {

    static startingValue = 0;

    static operator = "";

    static activeOperator = false;

    static add(a, b) {
        return a + b;
    };

    static subtract(a, b) {
        return a - b;
    };

    static multiply(a, b) {
        return a * b;
    };

    static divide(a, b) {
        return a / b;
    };
};


class UI {

    constructor() {

        this.#createUI();

    };
    
    static #value_1 = "";

    static #value_2 = "";

    static #createMainSections() {
        const MAIN_DIV = document.createElement("div");
        MAIN_DIV.setAttribute("id", "main-div");

        const SCREEN = document.createElement("div");
        SCREEN.setAttribute("id", "screen-div");

        const BUTTON_AREA = document.createElement("div");
        BUTTON_AREA.setAttribute("id", "button-div");

        MAIN_DIV.appendChild(SCREEN);
        MAIN_DIV.appendChild(BUTTON_AREA);

        return MAIN_DIV;
    };

    static #setScreen() {
        const SCREEN_DIV = document.getElementById("screen-div");
        const OPERATION_OUTPUT = document.createElement("p");
        OPERATION_OUTPUT.setAttribute("id", "output")
        OPERATION_OUTPUT.textContent = 0;

        SCREEN_DIV.appendChild(OPERATION_OUTPUT);
    };

    static #createButton(button) {
        const BUTTON = document.createElement("button");
        BUTTON.textContent = button;
        BUTTON.setAttribute("id", button);
        return BUTTON;
    };

    static #addEventListenerToButton(button) {
        
        return button.addEventListener('click', (e) => {

            switch(true) {

                case (!isNaN(e.target.textContent)):

                    if (!Calculator.activeOperator) {
                        UI.#value_1 += e.target.textContent;
                    };

                    break;

                case (["+", "-", "*", "/"].includes(e.target.textContent)):
                    
                    if (Calculator.operator === "" || Calculator.operator != e.target.textContent) {
                        Calculator.operator = e.target.textContent;
                        Calculator.activeOperator = true;

                    } else {
                        Calculator.operator = "";
                        Calculator.activeOperator = false;
                    };

                    console.log(Calculator.operator);
                    console.log(Calculator.activeOperator);
                    break;

                default:
                    break;
            }

            const OUTPUT = document.getElementById("output");
            OUTPUT.textContent = UI.#value_1;

        });
    };

    static #setButtonArea(buttons) {
        const BUTTON_AREA = document.getElementById("button-div");
        
        // ordered from top to bottom

        const ROW_1 = document.createElement("div");
        const ROW_2 = document.createElement("div");
        const ROW_3 = document.createElement("div");
        const ROW_4 = document.createElement("div");
        const ROW_5 = document.createElement("div");

        ROW_1.appendChild(buttons["C"]);
        ROW_1.appendChild(buttons["+/-"]);
        ROW_1.appendChild(buttons["%"]);
        ROW_1.appendChild(buttons["/"]);

        ROW_2.appendChild(buttons[7]);
        ROW_2.appendChild(buttons[8]);
        ROW_2.appendChild(buttons[9]);
        ROW_2.appendChild(buttons["*"]);
        
        ROW_3.appendChild(buttons[4]);
        ROW_3.appendChild(buttons[5]);
        ROW_3.appendChild(buttons[6]);
        ROW_3.appendChild(buttons["-"]);
        
        ROW_4.appendChild(buttons[1]);
        ROW_4.appendChild(buttons[2]);
        ROW_4.appendChild(buttons[3]);
        ROW_4.appendChild(buttons["+"]);

        ROW_5.appendChild(buttons[0]);
        ROW_5.appendChild(buttons["."]);
        ROW_5.appendChild(buttons["="]);
        
        BUTTON_AREA.appendChild(ROW_1);
        BUTTON_AREA.appendChild(ROW_2);
        BUTTON_AREA.appendChild(ROW_3);
        BUTTON_AREA.appendChild(ROW_4);
        BUTTON_AREA.appendChild(ROW_5);
    }


    #createUI() {
        const BODY = document.querySelector("body");
        const MAIN = UI.#createMainSections();

        BODY.appendChild(MAIN);

        UI.#setScreen();

        let buttonList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "+", "-", "*", "/", "=", "C", "+/-", "%", "."];
        let buttonMap = {};
        
        buttonList.forEach(button => {
            buttonMap[button] = UI.#createButton(button);
            UI.#addEventListenerToButton(buttonMap[button]);
        });
        
        UI.#setButtonArea(buttonMap);
    };

};

const myUI = new UI();