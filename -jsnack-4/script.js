document.getElementById('btn').addEventListener("click", function () {
  var number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  document.getElementById('number').classList.add("even", "odd");
  if (!(number % 2)) {
  document.getElementById('number').classList.remove("even");
  } else {
  document.getElementById('number').classList.remove("odd");
  }
})
