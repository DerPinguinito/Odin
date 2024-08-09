import Calculator from "./calculator.js"


export default class MyUI {
    constructor() {
        this.#startUI();
    }
    static #BUTTONS = document.querySelectorAll("button");
    static #createOnClickEventForNumberButton(button) {
        button.addEventListener('click', (e) => {
            Calculator.processingNumbers += e.target.textContent;
            MyUI.#updateProcessingNumberDisplay();
        })
    }
    static #assignonClickEventsToButtons(buttons) {
        buttons.forEach(button => {
            switch (true) {
                case(["+", "-", "*", "/"].includes(button.id)):
                    null;
                    break;
                default:
                    MyUI.#createOnClickEventForNumberButton(button);
                    break;
            }
        })
    }
    static #updateOutput() {
        const OUTPUT = document.getElementById("operation-output");
        OUTPUT.textContent = Calculator.operationOutput;
    }
    static #updateProcessingNumberDisplay() {
        if (Calculator.processingNumbers.startsWith("0") && Calculator.processingNumbers[1] !== ".") {
            Calculator.processingNumbers = Calculator.processingNumbers.replace("0", "");
        }
        Calculator.processingNumbers ? null : Calculator.processingNumbers = "0";
        const DISPLAY = document.getElementById("digit-display");
        DISPLAY.textContent = Calculator.processingNumbers;
    }
    #startUI() {
        MyUI.#updateOutput();
        MyUI.#updateProcessingNumberDisplay();
        MyUI.#assignonClickEventsToButtons(MyUI.#BUTTONS);
    }
}