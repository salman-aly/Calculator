var display = document.getElementById("displayArea");

function addToScreen(value) {
  var calculatorValue = displayArea.value;
  var operator = ["+", "-", "%", "/", "*"];
  var last = calculatorValue[calculatorValue.length - 1];
  var newInput = value;

  if (operator.indexOf(last) !== -1 && operator.indexOf(newInput) !== -1) {
    calculatorValue = calculatorValue.slice(0, -1) + newInput;
  } else {
    calculatorValue += newInput;
  }

  display.value = calculatorValue;
}

function clearDisplay() {
  document.getElementById("displayArea").value = "";
}
function singleDeleteValue() {
  var inputElement = document.getElementById("displayArea");
  var inputValue = inputElement.value;
  if (inputValue.length > 0) {
    var updatedValue = inputValue.slice(0, -1);
    inputElement.value = updatedValue;
  }
}

function sum() {
  var result = eval(document.getElementById("displayArea").value);
  document.getElementById("displayArea").value = result;
}
