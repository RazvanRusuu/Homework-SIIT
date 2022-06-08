"use strict";

const list = document.querySelector(".todo__lists");
const listContainer = document.querySelector(".todo__lists");
const submitBtn = document.querySelector(".btn__submit");
const changeBtn = document.querySelector(".btn__change");

const sortEl = document.querySelector(".sort");
const formContainer = document.querySelector(".form");
const messageValidation = document.querySelector(".message__validation");
const posAbsoluteContainer = document.querySelector(".absolute");
const messageSuccess = document.querySelector(".message__main");
const userIdEl = document.querySelector(".user__id");
const titleEl = document.querySelector(".title");
const statusEl = document.querySelector(".status");
const totalTodo = document.querySelector(".total__value");

let json;

// Clear inputs
const clearInput = function () {
  userIdEl.value = "";
  titleEl.value = "";
  statusEl.value = "";
  userIdEl.focus();
};

// Display message after we add or delete an element
const displayElement = function (element, message) {
  element.classList.remove("hidden");
  displayMessage(messageSuccess, message);
  setTimeout(() => {
    element.classList.add("hidden");
  }, 2000);
};
// display message after user input validation
const displayMessage = function (element, msg) {
  element.textContent = msg;
  setTimeout(() => {
    element.textContent = "";
  }, 2000);
};
// total elements
const displayTotal = function (length) {
  totalTodo.textContent = length;
};
const handleData = function () {
  renderData(json);
  displayTotal(json.length);
  clearInput();
};

const updateInput = function (json) {
  userIdEl.value = json.userId;
  titleEl.value = json.title;
  statusEl.value = json.completed;
  userIdEl.focus();
};

// Display data
const renderData = function (objects, sort = false) {
  listContainer.innerHTML = "";

  const objs = sort ? objects.slice().reverse() : objects;
  objs.forEach((obj, i) => {
    const html = `
      <li class="todo__list">
        <div>
          <p class="todo__object">userId: ${obj?.userId}</p>
          <p class="todo__object">id:${obj?.id}</p>
          <p class="todo__object">title: ${obj?.title}</p>
          <p class="todo__object">completed: ${obj?.completed}</p>
        </div>
        <div class="btns">
          <button class="btn btn__edit" data-id='${obj.id}'>Edit</button>
          <button class="btn btn__delete" data-id='${obj.id}'>Delete</button>
        </div>
      </li>`;

    list.insertAdjacentHTML("beforeend", html);
  });
};

// Get Data
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((data) => {
    json = data;
    renderData(json);
    displayTotal(json.length);
  });

// ============EVENTS Listener=========

// delete data
listContainer.addEventListener("click", function (e) {
  e.preventDefault();
  // Event delegation
  // let toDelete = e.target.closest(".todo__list");
  const clicked = e.target.closest(".btn__delete");
  let parent = e.target.closest(".todo__list");

  if (!clicked) return;
  // listContainer.innerHTML = "";

  // console.log(clicked.dataset.id);

  fetch(`https://jsonplaceholder.typicode.com/todos/${clicked.dataset.id}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        displayElement(posAbsoluteContainer, "Successfully deleted");
      }
      return res.json();
    })
    .then(() => {
      // let findIndex = json.findIndex((obj) => obj.id === +clicked.dataset.id);
      console.log(findIndex);
      console.log(parent);
      listContainer.removeChild(parent);
      // parrent.classList.add("ascuns");

      json.splice(findIndex, 1);
      // renderData(json);
      displayTotal(json.length);
    });
});

// Submit form

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let userId = +userIdEl.value;
  let title = titleEl.value;
  let completed = statusEl.value;

  if (!userId || !title || !completed) {
    displayElement(posAbsoluteContainer, "Please complete fields");
    return;
  }
  if (completed !== "true" && completed !== "false") {
    displayElement(posAbsoluteContainer, "Please enter true or false");
    return;
  }
  listContainer.innerHTML = "";
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      completed: completed === "true" ? true : false,
      title: title,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (response.ok) {
        displayElement(posAbsoluteContainer, "Successfully added");
      }
      return response.json();
    })
    .then((data) => {
      if (reversed) {
        json.unshift(data);
        handleData();
      } else {
        json.push(data);
        handleData();
      }
    });
});

// Reverse btn
let reversed = false;
sortEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("aa");
  renderData(json, !reversed);
  reversed = !reversed;
  // console.log(reversed);
});

// Edit list

let findElem;
let findIndex;
let changeObj;

listContainer.addEventListener("click", function (e) {
  e.preventDefault();
  // Event delegation
  let clicked = e.target.closest(".btn__edit");
  let parrent = e.target.closest(".todo__list");
  if (!clicked) return;
  // display changeBtn
  parrent.classList.toggle("active");
  submitBtn.classList.add("hidden");
  changeBtn.classList.remove("hidden");
  findElem = json.find((el) => el.id === +clicked.dataset.id);
  findIndex = json.findIndex((el) => el.id === +clicked.dataset.id);
  console.log(findElem, findIndex);
  updateInput(findElem);
});
changeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  changeObj = {
    id: findElem.id,
    userId: +userIdEl.value,
    title: titleEl.value,
    completed: statusEl.value,
  };

  json.splice(findIndex, 1, changeObj);

  renderData(json);
  clearInput();
  displayElement(posAbsoluteContainer, "successfully changed");
  submitBtn.classList.remove("hidden");
  changeBtn.classList.add("hidden");
});
