const API_KEY = "SUA_CHAVE_AQUI";
const LAT = -22.7253;
const LON = -47.6492;

const currentUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`;
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&units=metric&appid=${API_KEY}`;

const currentEl = document.getElementById("current-weather");
const forecastEl = document.getElementById("forecast");

async function getCurrentWeather() {
  try {
    const response = await fetch(currentUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    showCurrent(data);
  } catch (error) {
    console.error(error);
    currentEl.textContent = "Weather data is currently unavailable.";
  }
}

function showCurrent(data) {
  const icon = data.weather[0].icon;
  const description = data.weather[0].description;
  currentEl.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="" width="80" height="80">
    <p class="temp">${Math.round(data.main.temp)}&deg;C</p>
    <p>${description}</p>`;
}

async function getForecast() {
  try {
    const response = await fetch(forecastUrl);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    showForecast(data.list);
  } catch (error) {
    console.error(error);
    forecastEl.textContent = "Forecast is currently unavailable.";
  }
}

function showForecast(list) {
  const today = new Date().toISOString().split("T")[0];

  const days = list
    .filter(item => item.dt_txt.includes("15:00:00"))
    .filter(item => !item.dt_txt.startsWith(today))
    .slice(0, 3);

  forecastEl.innerHTML = days.map(item => {
    const day = new Date(item.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
    return `<li><strong>${day}:</strong> ${Math.round(item.main.temp)}&deg;C</li>`;
  }).join("");
}

getCurrentWeather();
getForecast();