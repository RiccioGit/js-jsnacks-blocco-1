
var numberOne = parseInt(prompt("Inserisci un numero"));
var numberTwo = parseInt(prompt("Inserisci un altro numero"));

if (numberOne > numberTwo) {
  document.getElementById("best-number").innerHTML = numberOne + " è il numero maggiore."
} else if(numberOne < numberTwo) {
  document.getElementById("best-number").innerHTML = numberTwo + " è il numero maggiore."
} else {
  document.getElementById("best-number").innerHTML = "I numeri sono uguali";
}
