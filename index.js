function email() {
  var emailInput = document.getElementById("emailInput");
  var phoneInput = document.getElementById("phoneInput");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  if (emailInput.checked == true) {
    email.style.display = "block";
  } else {
    email.style.display = "none";
  }

  if (phoneInput.checked == true && emailInput.checked == true) {
    email.style.border = "dashed 2px #ccc";
    phone.style.border = "dashed 2px #ccc";
  } else {
    email.style.border = "none";
    phone.style.border = "none";
  }
}

function phone() {
  var phoneInput = document.getElementById("phoneInput");
  var emailInput = document.getElementById("emailInput");
  var email = document.getElementById("email");
  var phone = document.getElementById("phone");
  if (phoneInput.checked == true) {
    phone.style.display = "block";
  } else {
    phone.style.display = "none";
  }

  if (phoneInput.checked == true && emailInput.checked == true) {
    email.style.border = "dashed 2px #ccc";
    phone.style.border = "dashed 2px #ccc";
  } else {
    email.style.border = "none";
    phone.style.border = "none";
  }
}

let player = document.getElementById("player-list");
new Sortable(player, {
  animation: 150,
  ghostClass: "blue-background-class",
});
