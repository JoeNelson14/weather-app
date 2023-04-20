
export default function getWeather(location) {
  if (location == '') location = 'chicago';
  fetch(`https://api.weatherapi.com/v1/forecast.json?key=c020fe73274a40bbb80191217231404&q=${location}&days=8`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let dt = new Date();
      let daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
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

      let dayArrayElements = Array.from(document.querySelectorAll('.day-container'));
      console.log(data)
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
      
      console.log(dt.getDay());
    })
}