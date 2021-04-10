// const {
//   builtinModules
// } = require("module");

// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  dateToday = document.querySelector('.dateToday');
city = document.querySelector('.city');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  // const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  // hour = hour % 12 || 12;

  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`; //${showAmPm ? amPm : ''}

  setTimeout(showTime, 1000);
}

// Add Date
function showDate() {
  let todayDate = new Date(),
    day = todayDate.getDate(),
    month = todayDate.getMonth(),
    dayOfWeek = todayDate.getDay();

  if (dayOfWeek === 1) {
    dayOfWeek = 'Monday';
  } else if (dayOfWeek === 2) {
    dayOfWeek = 'Thuesday';
  } else if (dayOfWeek === 3) {
    dayOfWeek = 'Wensday';
  } else if (dayOfWeek === 4) {
    dayOfWeek = 'Thursday';
  } else if (dayOfWeek === 5) {
    dayOfWeek = 'Friday';
  } else if (dayOfWeek === 6) {
    dayOfWeek = 'Saturday';
  } else {
    dayOfWeek = 'Sunday';
  }

  if (month === 0) {
    month = 'January';
  } else if (month === 1) {
    month = 'February';
  } else if (month === 2) {
    month = 'March';
  } else if (month === 3) {
    month = 'April';
  } else if (month === 4) {
    month = 'May';
  } else if (month === 5) {
    month = 'June';
  } else if (month === 6) {
    month = 'July';
  } else if (month === 7) {
    month = 'August';
  } else if (month === 8) {
    month = 'September';
  } else if (month === 9) {
    month = 'October';
  } else if (month === 10) {
    month = 'November';
  } else if (month === 11) {
    month = 'December';
  }

  dateToday.innerHTML = `${dayOfWeek}, ${day} ${month}`;
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
let today = new Date();
let hour = today.getHours();

function setBgGreet() {
  if (hour < 6) {
    // Night
    if (document.body.style.backgroundImage === '') {
      getImage();
    } else {
      timerImageChange;
    }
    greeting.textContent = 'Good Night, ';
    document.body.style.color = '#f1f1f1';
  } else if (hour < 12) {
    // Morning
    if (document.body.style.backgroundImage === '') {
      getImage();
    } else {
      timerImageChange;
    }
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    if (document.body.style.backgroundImage === '') {
      getImage();
    } else {
      ttimerImageChange;
    }
    greeting.textContent = 'Good Afternoon, ';
  } else {
    // Evening
    if (document.body.style.backgroundImage === '') {
      getImage();
    } else {
      timerImageChange;
    }
    greeting.textContent = 'Good Evening, ';
    document.body.style.color = '#f1f1f1';
  }
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

//Get City
function getCity() {
  if (localStorage.getItem('city') === null) {
    city.textContent = '[Enter City]';
  } else {
    city.textContent = localStorage.getItem('city');
  }
}
function setCity(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('city', e.target.innerText);
      getWeather();
      city.blur();
    }
  } else {
    localStorage.setItem('city', e.target.innerText);
    getWeather();
  }
}

// Set '' onfocus
// for Name
name.onfocus = function clearOnFocus() {
  name.innerText = '';
};
name.onblur = function clearEmptyOnBlur() {
  if (name.innerText === '') {
    name.innerText = localStorage.getItem('name');
  }
};
//for Focus
focus.onfocus = function clearOnFocus() {
  focus.innerText = '';
};
focus.onblur = function clearEmptyOnBlur() {
  if (focus.innerText === '') {
    focus.innerText = localStorage.getItem('focus');
  }
};
//for Weather
city.onfocus = function clearOnFocus() {
  city.innerText = '';
};
city.onblur = function clearEmptyOnBlur() {
  if (city.innerText === '') {
    city.innerText = localStorage.getItem('city');
  }
};

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Background images
const baseMorning = '../momentum/assets/images/morning/';
const baseAfternoon = '../momentum/assets/images/day/';
const baseEvening = '../momentum/assets/images/evening/';
const baseNight = '../momentum/assets/images/night/';
const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
  '06.jpg',
  '07.jpg',
  '08.jpg',
  '09.jpg',
  '10.jpg',
  '11.jpg',
  '12.jpg',
  '13.jpg',
  '14.jpg',
  '15.jpg',
  '16.jpg',
  '17.jpg',
  '18.jpg',
  '19.jpg',
  '20.jpg',
];

let i = 0;

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {
    body.style.backgroundImage = `url(${src})`;
  };
}

function getImage() {
  const index = i % images.length;
  let imageSrc = '';
  if (hour < 6) {
    imageSrc = baseNight + images[index];
    document.body.style.color = 'white';
  } else if (hour < 12) {
    imageSrc = baseMorning + images[index];
  } else if (hour < 18) {
    imageSrc = baseAfternoon + images[index];
  } else {
    imageSrc = baseEvening + images[index];
    document.body.style.color = 'white';
  }
  viewBgImage(imageSrc);
  i++;
  btn.disabled = true;
  setTimeout(function () {
    btn.disabled = false;
  }, 1000);
}
const btn = document.querySelector('.btn');
btn.addEventListener('click', getImage);

// timer 1h to change bg-img
let today_change = new Date(),
  min = today_change.getMinutes(),
  sec = today_change.getSeconds();
let timerImageChange = setTimeout(function tick() {
  getImage();
  timerImageChange = setTimeout(tick, 3600000);
}, (60 - (min + 1)) * 60000 + (60 - sec) * 1000);

// Quotes
const blockquote = document.querySelector('blockquote');
const figcaption = document.querySelector('figcaption');
const btnQuote = document.querySelector('.btnQuote');

async function getQuote() {
  const url = `https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`;
  const res = await fetch(url);
  const data = await res.json();
  blockquote.textContent = data.quoteText;
  figcaption.textContent = data.quoteAuthor;
}
document.addEventListener('DOMContentLoaded', getQuote);
btnQuote.addEventListener('click', getQuote);

// Weather

async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=91f988c0e7506ddf9565d6c0bd26931c&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data.weather[0].id, data.weather[0].description, data.main.temp);
  weatherIcon.className = 'weather-icon owf';
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${data.main.temp}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `${data.main.humidity} %`;
  windSpeed.textContent = `${data.wind.speed} m/s`;
}
// function setCity(event) {
//   if (event.code === 'Enter') {
//     getWeather();
//     city.blur();
//   }
// }
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
getWeather();
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.windspeed');
const weatherDescription = document.querySelector('.weather-description');

// Run
showTime();
showDate();
setBgGreet();
getName();
getFocus();
getCity();
