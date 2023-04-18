import getWeather from "./getWeather";
import './style.css';
import loadPage from "./loadPage";


let location = '';
if (location == '') location = 'chicago'.toUpperCase();
loadPage(location);
getWeather(location);