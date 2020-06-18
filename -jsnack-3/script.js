
document.getElementById('btn').addEventListener("click", function () {
  var number = parseInt(prompt("Inserisci un numero"));
  var text = document.getElementById('colour');

  if (number >= 1) {
    text.className = "green";
  } else if (number < 0) {
    text.className = "red";
  } else {
    text.className = "blue";
  }
})
