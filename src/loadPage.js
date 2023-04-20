import getTimeDate from "./getTimeDate";
import sunCloudyIcon from './sun_cloudy.png';
import sunIcon from './sun.png';
import sunRainIcon from './sun_rain.png';
import nightIcon from './night.png';
import nightRainIcon from './night_rain.png';
import rainIcon from './rain.png';
import snowIcon from './snowflake.png';
import sunnySky from './sunny_sky.jpg';
import rainBG from './rain_bg.jpg';

export default function loadPage(location) {
  /////// ELEMENT VARIABLES \\\\\\\
  let body = document.querySelector('body');
  let contentContainer = document.querySelector('#content');
  let headerContainer = document.createElement('div');
  let locationContainer = document.createElement('div');
  let cityText = document.createElement('h1');
  let dateText = document.createElement('h2');
  let currentTempText = document.createElement('h3');
  let weatherIconContainer = document.createElement('div');
  let currentWeatherImg = document.createElement('img');
  let currentWeatherText = document.createElement('h4');
  let locationLabel = document.createElement('label');
  let locationInput = document.createElement('input');
  let weatherDetailsTitle = document.createElement('h5');

  let extraWeatherContainer = document.createElement('div');
  let highText = document.createElement('p');
  let highNumber = document.createElement('p');
  let lowText = document.createElement('p');
  let lowNumber = document.createElement('p');
  let cloudyText = document.createElement('p');
  let cloudyNumber = document.createElement('p');
  let percipitationText = document.createElement('p');
  let perciptiationNumber = document.createElement('p');
  let humidityText = document.createElement('p');
  let humidityNumber = document.createElement('p');
  let windText = document.createElement('p');
  let windNumber = document.createElement('p');
  let horizontalRule = document.createElement('hr');
  let futureDayContainer = document.createElement('div');
  let futureCastContainer = document.createElement('div');
  

  /////// CLASS NAMES \\\\\\\
  headerContainer.classList.add('header-container');
  locationContainer.classList.add('location-container');
  cityText.classList.add('city-text');
  dateText.classList.add('date-text');
  currentTempText.classList.add('current-temp-text');
  weatherIconContainer.classList.add('weather-icon-container');
  currentWeatherImg.classList.add('current-weather-icon');
  currentWeatherText.classList.add('current-weather-text');
  locationLabel.classList.add('location-label');
  weatherDetailsTitle.classList.add('weather-details-title');

  extraWeatherContainer.classList.add('extra-weather-container');
  highNumber.classList.add('high-number');
  lowNumber.classList.add('low-number');
  cloudyNumber.classList.add('cloudy-number');
  perciptiationNumber.classList.add('percipitation-number');
  humidityNumber.classList.add('humidity-number');
  windNumber.classList.add('wind-number');
  futureDayContainer.classList.add('future-day-container');
  futureCastContainer.classList.add('future-cast-container');

  /////// ATTRIBUTES \\\\\\\
  currentWeatherImg.setAttribute('src', rainIcon);
  body.style.backgroundImage = `url(${rainBG})`;
  locationLabel.setAttribute('for', 'location-input');
  locationInput.setAttribute('type', 'text');
  locationInput.setAttribute('id', 'location-input');
  locationInput.setAttribute('name', 'location-input');

  /////// TEXT CONTENT \\\\\\\
  cityText.textContent = location;
  currentTempText.textContent = '56';
  currentWeatherText.textContent ='Rainy';
  highText.textContent = 'High';
  lowText.textContent = 'Low';
  cloudyText.textContent = 'Cloudy';
  percipitationText.textContent = 'Percipitation';
  humidityText.textContent = 'Humidity';
  windText.textContent = 'Wind';
  locationLabel.textContent = 'Enter Location';
  weatherDetailsTitle.textContent = 'Weather Details';

  for (let i = 1; i < 8; i++)
  {
    let day = document.createElement('p');
    day.classList.add('future-day', `day${i}`);
    futureDayContainer.append(day);
  }


  /////// APPEND ELEMENTS TO DOM \\\\\\\
  locationContainer.append(cityText, dateText);
  weatherIconContainer.append(currentWeatherImg, currentWeatherText);
  extraWeatherContainer.append(highText, highNumber, lowText, lowNumber, cloudyText, cloudyNumber, 
    percipitationText, perciptiationNumber, humidityText, humidityNumber, windText, windNumber);
  futureCastContainer.append(locationLabel, locationInput, horizontalRule, weatherDetailsTitle, extraWeatherContainer);
  headerContainer.append(currentTempText, locationContainer, weatherIconContainer);
  contentContainer.append(headerContainer, futureCastContainer);
}