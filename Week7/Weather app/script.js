"use strict";

const inputCity = document.querySelector(".input-city");
const city = document.querySelector(".city");
const image = document.querySelector(".weather__img");
const temp = document.querySelector(".weather__temperature");
const weatherCond = document.querySelector(".weather__condition");
const date = document.querySelector(".date");

const currentDate = new Date();

inputCity.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    console.log(inputCity.value);
    const temp = new Intl.DateTimeFormat("ro-RO", {
      dateStyle: "full",
      timeStyle: "long",
    }).format(currentDate);
    date.textContent = temp;
    getCityInfo(inputCity.value);
    inputCity.value = "";
    inputCity.blur();
  }
});

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    function (pos) {
      const { latitude, longitude } = pos.coords;
      renderMap([latitude, longitude]);
    },
    function () {
      alert("We cannot access your position");
    }
  );
}
let map;
const renderMap = function (coords) {
  map = L.map("map").setView(coords, 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
  L.marker(coords).addTo(map).openPopup();
};

const getCityInfo = function (inputCity) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=8f27e85eb6283722b3a654f4b16e0ea2`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const { lat, lon } = data.coord;
      const coords = [lat, lon];
      manipulateData(data);
      renderWorkoutMarker(coords);
      moveToPop(coords);
    });
};

const manipulateData = function (data) {
  city.textContent = data.name.toUpperCase();
  city.classList.remove("hidden");
  temp.classList.remove("hidden");
  image.classList.remove("hidden");
  weatherCond.classList.remove("hidden");

  temp.textContent = (+data.main.temp - 273.15).toFixed(1) + "°C";
  weatherCond.textContent = data.weather[0].description;

  image.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
};

const moveToPop = function (coords) {
  if (!map) return;
  map.setView(coords, 10, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
};
const renderWorkoutMarker = function (coords) {
  L.marker(coords).addTo(map).openPopup();
};
