document.getElementById('input1').value = 0;
document.getElementById('input2').value = 0;
document.getElementById('answer').value = 0;


function add() {
  var number1 = Number(document.getElementById('input1').value);
  var number2 = Number(document.getElementById('input2').value);

  answer = number1 + number2;
  document.getElementById('answer').value = answer.toString();
}

function subtract() {
  var number1 = Number(document.getElementById('input1').value);
  var number2 = Number(document.getElementById('input2').value);

  var answer = number1 - number2;
  document.getElementById('answer').value = answer.toString();
}

function multiply() {
  var number1 = Number(document.getElementById('input1').value);
  var number2 = Number(document.getElementById('input2').value);

  var answer = number1 * number2;
  document.getElementById('answer').value = answer.toString();
}

function divide() {
  var number1 = Number(document.getElementById('input1').value);
  var number2 = Number(document.getElementById('input2').value);

  if (number2 == 0)
  {
    alert("You can't divide by zero.")
  }
  else
  {
    var answer = number1 / number2;
    document.getElementById('answer').value = answer.toString();
  }
}

function squared() {
  var number1 = Number(document.getElementById('input1').value);
  var number2 = Number(document.getElementById('input2').value);

  var answer = number1 * number1;
  document.getElementById('answer').value = answer.toString();
}
