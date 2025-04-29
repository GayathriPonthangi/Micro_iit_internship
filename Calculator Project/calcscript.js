const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    let expression = display.value;

    expression = expression.replace(
      /(\d+(\.\d+)?|\))\^(\d+(\.\d+)?|\()/g,
      (match, base, _, exp) => {
        return `Math.pow(${base},${exp})`;
      }
    );

    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}

function squareRoot() {
  try {
    display.value = Math.sqrt(eval(display.value));
  } catch {
    display.value = "Error";
  }
}

function square() {
  try {
    display.value = Math.pow(eval(display.value), 2);
  } catch {
    display.value = "Error";
  }
}
function percentage() {
  try {
    display.value = eval(display.value) / 100;
  } catch {
    display.value = "Error";
  }
}