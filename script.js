const secArrow = document.querySelector(".sec-arrow");
const minArrow = document.querySelector(".min-arrow");
const hourArrow = document.querySelector(".hour-arrow");
const week_Day = document.querySelector(".weekDay");
const monthDay = document.querySelector(".Day");

let currentTime = new Date()
let currentSec = currentTime.getSeconds();
let currentMin = currentTime.getMinutes();
let currentHour = currentTime.getHours();


let weekDay;
switch (currentTime.getDay()) {
  case 0:
    weekDay = "SUN";
    break;
  case 1:
    weekDay = "MON";
    break;
  case 2:
    weekDay = "TUE";
    break;
  case 3:
    weekDay = "WED";
    break;
  case 4:
    weekDay = "THU";
    break;
  case 5:
    weekDay = "FRI";
    break;
  case  6:
    weekDay = "SAT";
}

week_Day.textContent = weekDay;
monthDay.textContent = currentTime.getDate();

let secDegree = currentSec * 6;
let minDegree = (currentMin * 6) + (currentSec / 60 * 6);
let hourDegree;

currentHour <= 12 ? hourDegree = (currentHour * 30) + (minDegree / 12) :
    hourDegree = (currentHour - 12) * 30 + minDegree / 12;


secArrow.style.transform = 'rotate(' + secDegree + 'deg)';
minArrow.style.transform = 'rotate(' + minDegree + 'deg)';
hourArrow.style.transform = 'rotate(' + hourDegree + 'deg)';

setInterval(() => {
    secArrow.style.transform += 'rotate(6deg)';
    minArrow.style.transform += 'rotate(0.1deg)';
    hourArrow.style.transform += 'rotate(' + 30 / 3600 + 'deg)';
}, 1000);
