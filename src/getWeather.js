import sunIcon from './sun.png';
import nightIcon from './night.png';
import nightRainIcon from './night_rain.png';
import rainIcon from './rain.png';
import snowIcon from './snowflake.png';
import sunCloudyBG from './sun_cloudy.png'
import sunnyBG from './sunny_bg.jpg';
import rainBG from './rain_bg.jpg';
import cloudyBG from './cloudy_bg.jpg';
import snowBG from './snow_bg.jpg';
import nightBG from './night_bg.jpg';

export default function getWeather(location) {
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=c020fe73274a40bbb80191217231404&q=${location}&days=8`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let dt = new Date();
      let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

      let cityText = document.querySelector('.city-text');
      cityText.textContent = `${data.location.name}, ${data.location.region.slice(0,2).toUpperCase()}`;

      let currentTempText = document.querySelector('.current-temp-text');
      currentTempText.textContent = Math.round(data.current.temp_f);

      let conditionText = document.querySelector('.current-weather-text');
      conditionText.textContent = data.current.condition.text;

      let currentWeatherIcon = document.querySelector('.current-weather-icon');
      let body = document.querySelector('body');

      let hrs = dt.getHours();

      if (conditionText.textContent.toLowerCase().includes('sunny') && (hrs < 17 && hrs > 5)) {
        currentWeatherIcon.setAttribute('src', sunIcon);
        body.style.backgroundImage = `url(${sunnyBG})`;
      }
      else if (conditionText.textContent.toLowerCase().includes('rain') && (hrs < 17 && hrs > 5)) {
        currentWeatherIcon.setAttribute('src', rainIcon);
        body.style.backgroundImage = `url(${rainBG})`;
      }
      else if (conditionText.textContent.toLowerCase().includes('clear') && (hrs >= 17 && hrs <= 5)) {
        currentWeatherIcon.setAttribute('src', nightIcon);
        body.style.backgroundImage = `url(${nightBG})`;
      }
      else if (conditionText.textContent.toLowerCase().includes('rain') && (hrs >= 17 && hrs >= 5)) {
        currentWeatherIcon.setAttribute('src', nightRainIcon);
        body.style.backgroundImage = `url(${rainBG})`;
      }
      else if (conditionText.textContent.toLowerCase().includes('snow') ||
      conditionText.textContent.toLowerCase().includes('blizzard')) {
        currentWeatherIcon.setAttribute('src', snowIcon);
        body.style.backgroundImage = `url(${snowBG})`;
      }
      else if (conditionText.textContent.toLowerCase().includes('cloudy')) {
        currentWeatherIcon.setAttribute('src', sunCloudyBG);
        body.style.backgroundImage = `url(${cloudyBG})`;
      }

      let highNumber = document.querySelector('.high-number');
      highNumber.textContent = Math.round(data.forecast.forecastday[0].day.maxtemp_f);

      let lowNumber = document.querySelector('.low-number');
      lowNumber.textContent = Math.round(data.forecast.forecastday[0].day.mintemp_f);

      let cloudyNumber = document.querySelector('.cloudy-number');
      cloudyNumber.textContent = data.current.cloud + '%';

      let perciptiationNumber = document.querySelector('.percipitation-number');
      perciptiationNumber.textContent = data.current.precip_in + 'in';

      let humidityNumber = document.querySelector('.humidity-number');
      humidityNumber.textContent = data.current.humidity + '%';

      let windNumber = document.querySelector('.wind-number');
      windNumber.textContent = data.current.wind_mph + 'mph';

      let dayArrayElements = document.querySelectorAll('.day-container');
      let dayCount = dt.getDay();

      for (let i = 0; i < dayArrayElements.length; i++)
      {
        if (dayCount > 6) dayCount = 0;
        dayArrayElements[i].firstChild.textContent = daysArray[dayCount];
        dayArrayElements[i].firstChild.nextSibling.textContent = data.forecast.forecastday[i+1].day.condition.text;
        dayArrayElements[i].firstChild.nextSibling.nextSibling.textContent = 'H: ' + Math.round(data.forecast.forecastday[i+1].day.maxtemp_f);
        dayArrayElements[i].firstChild.nextSibling.nextSibling.nextSibling.textContent =
          'L: ' + Math.round(data.forecast.forecastday[i+1].day.mintemp_f);
        dayCount++;
      }
    })
}