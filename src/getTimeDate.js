

export default function getTimeDate() {
  let dt = new Date();
  let hours = dt.getHours();
  let dayOrNight = hours >= 12 ? 'pm' : 'am';
  hours = (hours % 12) || 12;
  let minutes = dt.getMinutes();
  if (minutes < 10) minutes = '0' + minutes;
  let day = new Intl.DateTimeFormat('en-us', { dateStyle: 'full' }).format(dt);
  let finalTime = `${day}, ${hours}:${minutes}${dayOrNight}`;
  document.querySelector('.date-text').textContent = finalTime;
}