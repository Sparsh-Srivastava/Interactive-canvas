function email() {
  var checkBox = document.getElementById("emailInput");
  var data = document.getElementById("email");
  if (checkBox.checked == true) {
    data.style.display = "block";
  } else {
    data.style.display = "none";
  }
}

function phone() {
  var checkBox = document.getElementById("phoneInput");
  var data = document.getElementById("phone");
  if (checkBox.checked == true) {
    data.style.display = "block";
  } else {
    data.style.display = "none";
  }
}
