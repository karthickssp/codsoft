let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = '';
let history = [];

let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        let result = eval(string);
        if (typeof result !== 'number' || isNaN(result) || !isFinite(result)) {
          input.value = 'Syntax Error';
        } else {
          let precision = getPrecision(result);
          result = result.toFixed(precision);
          input.value = result;
          history.push({ expression: string, result });
          updateHistoryDisplay();
        }
      } catch (error) {
        input.value = 'Invalid';
      }
      string = '';
    } else if (e.target.innerHTML == 'AC') {
      string = '';
      input.value = string;
    } else if (e.target.innerHTML == 'DEL') {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

function updateHistoryDisplay() {
  let historyDisplay = document.getElementById('history');
  let historyHTML = '<h2></h2>';
  var i = 1;
  for (let entry of history) {
    historyHTML += `<p>${i} >> ${entry.expression}=${entry.result}</p>`;
    i++;
  }
  historyDisplay.innerHTML = historyHTML;
}

function cleanHistory() {
  history = [];
  updateHistoryDisplay();
}

function getPrecision(number) {
  let decimalPart = (number % 1).toString().split('.')[1];
  return decimalPart ? 5 : 0;
}
document.getElementById('Delete').addEventListener('click', cleanHistory);