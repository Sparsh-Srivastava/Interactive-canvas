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

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
