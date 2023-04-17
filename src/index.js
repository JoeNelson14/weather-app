import getWeather from "./getWeather";
import './style.css';
import loadPage from "./loadPage";


let location = prompt('Enter your city');
if (location == '') location = 'chicago'.toUpperCase();
loadPage(location);
getWeather(location);