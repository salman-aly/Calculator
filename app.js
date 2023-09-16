var currentInput = "";
var currentOperator = "";
var preInput = "";

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
  preInput = currentInput;
  currentInput = "";
  document.getElementById("displayArea").value =
    preInput + currentOperator + currentInput;
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
    num1 % num2;
  }

  document.getElementById("displayArea").value = result;
  currentInput = result.toString();
  currentOperator = "";
  preInput = "";
}
