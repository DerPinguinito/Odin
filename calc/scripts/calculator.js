export default class Calculator {
    static operationOutput = 0;
    static processingNumbers = "";
    static operator = '';
    static operate = false;
    
    static addition(a, b) {
        return a + b;
    }
    static subtraction(a, b) {
        return a - b;
    }
    static multiplication(a, b) {
        return a * b;
    }
    static divition(a, b) {
        return a / b;
    }
}