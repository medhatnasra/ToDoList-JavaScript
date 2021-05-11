// Selectors
const list = document.querySelector(".links");
const clickicon = document.querySelector(".fa-arrow-circle-down");
const input = document.querySelector(".form-input");
const glass = document.querySelector(".glass-radio");
const glass2 = document.querySelector(".glass-radio2");
const glass3 = document.querySelector(".glass-radio3");
const filter = document.querySelector("#filterlist");

// EventListeners
clickicon.addEventListener("click", poppup);
list.addEventListener("click", check);
filter.addEventListener("click", filtertodo);

// List transition
window.onload = function () {
  list.classList.add("appear");
};

list.addEventListener("transitionend", function () {
  glass.classList.add("popup");
  glass2.classList.add("popup");
  glass3.classList.add("popup");
});

// List item display

function poppup() {
  let li = document.createElement("li");
  li.innerHTML = input.value;
  let button = document.createElement("button");
  button.innerHTML =
    '<i class="fas fa-trash"></i><i class="fas fa-check-square"></i>';

  li.appendChild(button);
  li.classList.add("list-appear");

  list.appendChild(li);

  //   CLEAR INPUT VALUE
  input.value = "";
}

// LIST CHECKING

function check(e) {
  // DELETE CHECK
  let item = e.target;
  console.log(item.classList);
  if (item.classList[1] === "fa-trash") {
    const parent = item.parentElement.parentElement;
    // Animation
    parent.classList.add("fall");
    // When transition end
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
  }
  //   MARK CHECK
  if (item.classList[1] === "fa-check-square") {
    const parent = item.parentElement.parentElement;
    parent.classList.toggle("completed");
  }
}



// Adding Filter 
function filtertodo(e) {
  const todos = list.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "All":
        todo.style.display = "block";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "block";
        } else {
          todo.style.display = "none";
        }
        break;
    }
  });
}
