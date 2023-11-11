/* 
   Filename: "advanced_calculator.js"
   Content: This code implements an advanced calculator with various mathematical operations.
*/

// Calculator class
class Calculator {
  constructor() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
    this.memory = 0;
  }

  // Input digit
  inputDigit(digit) {
    if (this.waitingForSecondOperand) {
      this.displayValue = digit;
      this.waitingForSecondOperand = false;
    } else {
      this.displayValue = this.displayValue === '0' ? digit : this.displayValue + digit;
    }
  }

  // Input decimal point
  inputDecimal() {
    if (this.waitingForSecondOperand) {
      this.displayValue = '0.';
      this.waitingForSecondOperand = false;
      return;
    }

    if (!this.displayValue.includes('.')) {
      this.displayValue += '.';
    }
  }

  // Perform arithmetic operation
  performOperation(operator) {
    const input = parseFloat(this.displayValue);

    if (this.firstOperand === null) {
      this.firstOperand = input;
    } else if (this.operator) {
      const result = this.calculate();
      this.displayValue = String(result);
      this.firstOperand = result;
    }

    this.waitingForSecondOperand = true;
    this.operator = operator;
  }

  // Calculate result
  calculate() {
    const firstOperand = this.firstOperand;
    const secondOperand = parseFloat(this.displayValue);

    if (this.operator === '+') {
      return firstOperand + secondOperand;
    } else if (this.operator === '-') {
      return firstOperand - secondOperand;
    } else if (this.operator === '*') {
      return firstOperand * secondOperand;
    } else if (this.operator === '/') {
      return firstOperand / secondOperand;
    }

    return secondOperand;
  }

  // Clear calculator display
  clearDisplay() {
    this.displayValue = '0';
    this.firstOperand = null;
    this.waitingForSecondOperand = false;
    this.operator = null;
  }

  // Memory functions
  addToMemory() {
    const currentValue = parseFloat(this.displayValue);
    this.memory += currentValue;
  }

  subtractFromMemory() {
    const currentValue = parseFloat(this.displayValue);
    this.memory -= currentValue;
  }

  clearMemory() {
    this.memory = 0;
  }
}

// Test the calculator
const calculator = new Calculator();

calculator.inputDigit('5');
calculator.inputDecimal();
calculator.inputDigit('2');
calculator.performOperation('+');
calculator.inputDigit('4');
calculator.calculate();  // 9.2

calculator.clearDisplay();
calculator.inputDigit('8');
calculator.performOperation('*');
calculator.inputDigit('3');
calculator.calculate();  // 24

calculator.addToMemory();
calculator.clearDisplay();
calculator.inputDigit('1');
calculator.performOperation('-');
calculator.inputDigit('7');
calculator.calculate();  // -6

console.log(calculator.memory);  // 18