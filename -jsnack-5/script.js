
document.getElementById('btn').addEventListener("click", function () {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var operation = document.getElementById("operation").value;
  var totalNumber;
  if (operation == "sum") {
    totalNumber = num1 + num2;
    document.getElementById("result").innerHTML = "Il risultato è " + totalNumber;
  } else if (operation == "substraction") {
    totalNumber = num1 - num2;
    document.getElementById("result").innerHTML = "Il risultato è " + totalNumber;
  } else if (operation == "multiplication") {
    totalNumber = num1 * num2;
    document.getElementById("result").innerHTML = "Il risultato è " + totalNumber;
  } else if (operation == "division") {
    totalNumber = num1 / num2;
    document.getElementById("result").innerHTML = "Il risultato è " + totalNumber;
  }
});
