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
	let formattedDate = `Last updated: ${currentDay} ${currentTime}`;
	return formattedDate;
}

let dateTimeStamp = new Date();
dateTimeStamp = formatDate(dateTimeStamp);

let currentDateTimeStamp = document.querySelector("#today-date");
currentDateTimeStamp.innerHTML = dateTimeStamp;

function formatDay(timestamp) {
	let date = new Date(timestamp * 1000);
	let day = date.getDay();
	let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	return days[day];
}

function displayForecast(response) {
	let forecast = response.data.daily;

	let forecastElement = document.querySelector("#forecast");

	let forecastHTML = "";

	forecast.forEach(function (forecastDay, index) {
		if (index > 0 && index < 6) {
			forecastHTML =
				forecastHTML +
				`<div class="col first-column" id="day1">
					<img src="http://openweathermap.org/img/wn/${forecastDay.weather[0].icon}@2x.png" width="35px" />
				</div>

				<div class="col second-column" id="day1">
					<span class="day"> ${formatDay(forecastDay.dt)} </span><br />
					<span class="temp" id=forecast-temp-max>${Math.round(forecastDay.temp.max)}°</span> 
					<span class="temp">|</span>
					<span class="temp" id=forecast-temp-min>${Math.round(forecastDay.temp.min)}° </span>
				</div>
				<div class="w-100"></div>					
`;
		}
	});

	forecastElement.innerHTML = forecastHTML;
	console.log(forecastHTML);
}

function getForecast(coordinates) {
	console.log(coordinates);
	let apiKey = "56745bb39d5e088bb2d89ec97249f297";
	let apiURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;
	axios.get(apiURL).then(displayForecast);
}
/* Current City (Search) & Temperature */

function showCurrentWeather(response) {
	celsiusTemperature = Math.round(response.data.main.temp);
	document.querySelector("#city").innerHTML = response.data.name;
	document.querySelector("#temp-today").innerHTML = celsiusTemperature;
	document.querySelector("#forecast-today").innerHTML = response.data.weather[0].description;
	document
		.querySelector("#icon")
		.setAttribute(
			"src",
			`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
		);

	getForecast(response.data.coord);
}

function searchCity(city) {
	let apiKey = "56745bb39d5e088bb2d89ec97249f297";
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showCurrentWeather);
}

function currentCity(event) {
	event.preventDefault();
	let city = document.querySelector("#city-input").value;
	searchCity(city);
	linkCelsius.classList.add("active");
	linkFahrenheit.classList.remove("active");
}
let placeForm = document.querySelector("#change-city");
placeForm.addEventListener("submit", currentCity);

let formCity = document.querySelector("#search-button");
formCity.addEventListener("click", currentCity);

/* Current City (Geo Location) & Temperature */

function geoLocation(position) {
	linkCelsius.classList.add("active");
	linkFahrenheit.classList.remove("active");

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

function showFahrenheit(event) {
	event.preventDefault();
	let fahrenheitTemperature = (celsiusTemperature * 9) / 5 + 32;
	let currentTemperature = document.querySelector("#temp-today");
	currentTemperature.innerHTML = Math.round(fahrenheitTemperature);
	linkCelsius.classList.remove("active");
	linkFahrenheit.classList.add("active");
}

function showCelsius(event) {
	event.preventDefault();

	let currentTemperature = document.querySelector("#temp-today");
	currentTemperature.innerHTML = celsiusTemperature;
	linkCelsius.classList.add("active");
	linkFahrenheit.classList.remove("active");
}

let celsiusTemperature = null; // global variable to reset celsius

let linkFahrenheit = document.querySelector("#today-fahrenheit");
linkFahrenheit.addEventListener("click", showFahrenheit);

let linkCelsius = document.querySelector("#today-celsius");
linkCelsius.addEventListener("click", showCelsius);

searchCity("London");
