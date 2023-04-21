import getWeather from "./getWeather";
import './style.css';
import loadPage from "./loadPage";
import getTimeDate from "./getTimeDate";

const success = (position) => {
  let location = `${position.coords.latitude},${position.coords.longitude}`;
  getWeather(location);
  setInterval(getWeather, 60000, location);
};

const denied = (err) => {
  getWeather('40.7128,-74.0060');
  setInterval(getWeather, 60000, '40.7128,-74.0060');
};

getWeather('40.7128,-74.0060');
navigator.geolocation.getCurrentPosition(success, denied, { enableHighAccuracy: true });


loadPage();
getTimeDate();

// updates time every second, and gets weather every minute
setInterval(getTimeDate, 1000);
