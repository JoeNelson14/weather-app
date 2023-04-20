import getWeather from "./getWeather";
import './style.css';
import loadPage from "./loadPage";
import getTimeDate from "./getTimeDate";


let location = '';
if (location == '') location = 'chicago'.toUpperCase();
loadPage(location);
getWeather(location);
getTimeDate();

// updates time every second, and gets weather every minute
setInterval(getTimeDate, 1000);
setInterval(getWeather(location), 60000);