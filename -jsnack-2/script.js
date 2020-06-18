var btn = document.getElementById('btn');

btn.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var familyName = document.getElementById("familyName").value;
  var fullName = "Sig. / Sig.ra: " + name + " " + familyName;
  console.log(fullName);
});
