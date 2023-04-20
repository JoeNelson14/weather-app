import refreshInfo from ".";
export default function getWeather(location) {
  if (location == '') location = 'chicago';
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=c020fe73274a40bbb80191217231404&q=${location}`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let currentTempText = document.querySelector('.current-temp-text');
      currentTempText.textContent = Math.round(data.current.temp_f);

      let highNumber = document.querySelector('.high-number');
      highNumber.textContent = Math.round(data.forecast.forecastday[0].day.maxtemp_f);

      let lowNumber = document.querySelector('.low-number');
      lowNumber.textContent = Math.round(data.forecast.forecastday[0].day.mintemp_f);

      let cloudyNumber = document.querySelector('.cloudy-number');
      cloudyNumber.textContent = data.current.cloud + '%';

      let perciptiationNumber = document.querySelector('.percipitation-number');
      perciptiationNumber.textContent = data.current.precip_in + 'in';

      let humidityNumber = document.querySelector('.humidity-number');
      humidityNumber.textContent = data.current.humidity;

      let windNumber = document.querySelector('.wind-number');
      windNumber.textContent = data.current.wind_mph + 'mph';
    })
}