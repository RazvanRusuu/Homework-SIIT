"use strict";

const obj = {
  dog: "https://random.dog/woof.json",
  cat: "https://api.thecatapi.com/v1/images/search",
  fox: "https://randomfox.ca/floof/",
};

// Select ELEMENTS
const body = document.querySelector("body");
const select = document.querySelector("select");
const form = document.querySelector("form");
const imgContainer = document.querySelector(".img__container");

// CreateELEMENTS
const button = document.createElement("button");
const img = document.createElement("img");
button.innerText = "Get photo";
button.classList = "btn btn__value";

// Event listner when page is loaded
window.addEventListener("load", displayEL);

// Insert options dynamically
function displayEL() {
  form.append(button);
  Object.keys(obj).forEach((option) => {
    insertOptions(option);
  });
}
function insertOptions(el) {
  let option = document.createElement("option");
  option.value = el;
  option.innerText = el;
  option.classList.add("option");
  select.append(option);
}

// Get data from api
const getData = function (e) {
  e.preventDefault();
  fetch(obj[select.value])
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      handleData(data);
    });
};
// Handle data from api
const handleData = function (data) {
  if (select.value === "dog") {
    img.src = data.url;
  }
  if (select.value === "fox") {
    img.src = data.image;
  }
  if (select.value === "cat") {
    const [source] = data;
    img.src = source.url;
  }
  imgContainer.appendChild(img);
};
// Event listner on button
button.addEventListener("click", getData);
