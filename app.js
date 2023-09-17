var currentInput = "";
var currentOperator = "";
var preInput = "";
var lastNewOperator = "+";
var allOperators = ["+", "-", "/", "%"];

function clearDisplay() {
  currentInput = "";
  currentOperator = "";
  preInput = "";
  document.getElementById("displayArea").value = "";
}

function number(value) {
  currentInput += value;
  document.getElementById("displayArea").value = currentInput;
}

function operator(value) {
  currentOperator = value;
  preInput = document.getElementById("displayArea").value;
  currentInput = "";
  document.getElementById("displayArea").value =
    preInput + currentOperator + currentInput;
}

function updateCurrentInput() {
  if (
    allOperators.indexOf(lastOperatorRemove) !== -1 &&
    allOperators.indexOf(newInput) !== -1
  ) {
    currentInput = currentInput.slice(0, -1) + lastNewOperator;
  } else {
    lastNewOperator += newInput;
  }
  document.getElementById("displayArea").value = currentInput;
}

function equal() {
  var result = 0;
  var num1 = parseFloat(preInput);
  var num2 = parseFloat(currentInput);
  if (currentOperator === "+") {
    result = num1 + num2;
  } else if (currentOperator === "-") {
    result = num1 - num2;
  } else if (currentOperator === "/") {
    result = num1 / num2;
  } else if (currentOperator === "%") {
    result = num1 % num2;
  }

  document.getElementById("displayArea").value = result;
  currentInput = result.toString();
  currentOperator = "";
  preInput = "";
}
