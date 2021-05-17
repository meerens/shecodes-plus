/* Current Date & Time + Formatting */

function formatDate(date) {
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let currentDate = date.getDate();
	let currentMonth = months[date.getMonth()];
	let currentDay = days[date.getDay()];
	let currentTime = date.toLocaleString(undefined, {
		minute: "2-digit",
		hour: "2-digit",
	});
	let formattedDate = `${currentDay} ${currentDate} ${currentMonth} ${currentTime}`;
	return formattedDate;
}

let dateTimeStamp = new Date();
dateTimeStamp = formatDate(dateTimeStamp);

let currentDateTimeStamp = document.querySelector("#today-date");
currentDateTimeStamp.innerHTML = dateTimeStamp;

/* Current City (Search) & Temperature */

function showCurrentWeather(response) {
	document.querySelector("#city").innerHTML = response.data.name;
	document.querySelector("#temp-today").innerHTML = Math.round(response.data.main.temp);
	document.querySelector("#forecast-today").innerHTML = response.data.weather[0].description;
}

function searchCity(city) {
	let apiKey = "56745bb39d5e088bb2d89ec97249f297";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showCurrentWeather);
}
searchCity("London");

function currentCity(event) {
	event.preventDefault();
	let city = document.querySelector("#city-input").value;
	searchCity(city);
}
let placeForm = document.querySelector("#change-city");
placeForm.addEventListener("submit", currentCity);

let formCity = document.querySelector("#search-button");
formCity.addEventListener("click", currentCity);

/* Current City (Geo Location) & Temperature */

function geoLocation(position) {
	let apiKey = "56745bb39d5e088bb2d89ec97249f297";
	let latitude = position.coords.latitude;
	let longitude = position.coords.longitude;
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showCurrentWeather);
}

function geoPosition(event) {
	event.preventDefault();
	navigator.geolocation.getCurrentPosition(geoLocation);
}

let currentGeo = document.querySelector("#location-button");
currentGeo.addEventListener("click", geoPosition);

/* Celsius | Fahrenheit Conversion */

function todayFahrenheit() {
	let temperature = document.querySelector("#temp-today");
	temperature.innerHTML = Math.round((temperature.innerHTML * 9) / 5 + 32);
}

let linkFahrenheit = document.querySelector("#today-fahrenheit");
linkFahrenheit.addEventListener("click", todayFahrenheit);

function todayCelsius() {
	let temperature = document.querySelector("#temp-today");
	temperature.innerHTML = Math.round(((temperature.innerHTML - 32) * 5) / 9);
}

let linkCelsius = document.querySelector("#today-celsius");
linkCelsius.addEventListener("click", todayCelsius);
