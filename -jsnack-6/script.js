var coinLaunch = document.getElementById("coinLaunch");

coinLaunch.addEventListener("click", function () {

  var number = Math.floor(Math.random () * 10);
  console.log(number);

  if (!(number % 2)) {
    document.getElementById("testa").className ="show";
    document.getElementById("croce").className ="hidden";

  } else if (number % 2) {
    document.getElementById("croce").className ="show";
    document.getElementById("testa").className ="hidden";
  }
  
})
