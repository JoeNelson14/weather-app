
export default function getWeather(location) {
  if (location == '') location = 'chicago';
  let weather;
  fetch(`https://api.weatherapi.com/v1/current.json?key=c020fe73274a40bbb80191217231404&q=${location}`, { mode: 'cors' })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      let currentTempText = document.querySelector('.current-temp-text');
    })
}