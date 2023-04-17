import getTimeDate from "./getTimeDate";
import sunCloudyIcon from './sun_cloudy.png';
import sunIcon from './sun.png';
import sunRainIcon from './sun_rain.png';
import nightIcon from './night.png';
import nightRainIcon from './night_rain.png';
import rainIcon from './rain.png';
import snowIcon from './snowflake.png';

export default function loadPage(location) {
  /////// ELEMENT VARIABLES \\\\\\\
  let body = document.querySelector('body');
  let contentContainer = document.querySelector('#content');
  let headerGrid = document.createElement('div');
  let cityText = document.createElement('h1');
  let dateText = document.createElement('h2');
  let currentTempText = document.createElement('h3');
  let currentWeatherImg = document.createElement('img');
  let extraWeatherContainer = document.createElement('div');
  let percipitationText = document.createElement('p');
  let humidityText = document.createElement('p');
  let windText = document.createElement('p');
  let futureCastContainer = document.createElement('div');

  for (let i = 1; i < 8; i++)
  {
    let card = document.createElement('div');
    card.classList.add(`card${i}`, 'card');
    futureCastContainer.append(card);
  }

  /////// CLASS NAMES \\\\\\\
  headerGrid.classList.add('header-grid');
  cityText.classList.add('city-text');
  dateText.classList.add('date-text');
  currentTempText.classList.add('current-temp-text');
  currentWeatherImg.classList.add('current-weather-icon');
  extraWeatherContainer.classList.add('extra-weather-container');
  percipitationText.classList.add('percipitation-text');
  humidityText.classList.add('humidity-text');
  windText.classList.add('wind-text');
  futureCastContainer.classList.add('future-cast-container');

  /////// ATTRIBUTES \\\\\\\
  currentWeatherImg.setAttribute('src', sunIcon);

  /////// TEXT CONTENT \\\\\\\
  cityText.textContent = location;
  dateText.textContent = getTimeDate();
  currentTempText.textContent = '56';
  percipitationText.textContent = 'Percipitation';
  humidityText.textContent = 'Humidity';
  windText.textContent = 'Wind';


  /////// APPEND ELEMENTS TO DOM \\\\\\\
  extraWeatherContainer.append(percipitationText, humidityText, windText);
  headerGrid.append(cityText, dateText, currentTempText, currentWeatherImg, extraWeatherContainer);
  contentContainer.append(headerGrid);
  body.append(futureCastContainer);
}