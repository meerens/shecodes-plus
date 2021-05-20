## Introduction

Greetings 👋

My name is Marian and this repository contains the code for my final project for the SheCodes Plus workshop for which I developed a weather application using the [OpenWeatherMap API](https://openweathermap.org/api).

Link to final project:
to be added upon course completion

Link to course certificate:
to be added upon course completion

## Languages & tools

<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> </p>

## Items to be be completed/fixed/updated

### Temperature & Units Today

- Fix alignment of units (ok in browsers, not on mobile)?

- Styling of units upon click (C in darker colour | F in lighter colour > Temp displayed is in C). How to change CSS styling from JS?

  > SOLVED by adding active class and adding/removing the class via JS

- Behaviour unit conversion, need to test different scenarios to identify rootcause

  > SOLVED by positioning the global variable 'celsiusTemperature'

- Fix colour when hovering over the C/F units, is set to blue?

- Current location button not working on safari/iphone (works fine in Chrome)

### Search Bar

- X icon to clear search to remain in focus

- Add CSS ease-in-out when hovering over search bar

- When using the current location button after having performed a search, the name from the previous search stays in the search bar. How to reset?

### Weather Icons (API)

- For current weather, fix aligment with text

- Icons to update for 5-day forecast

- Alt text for icons to match description of weather condition

- Different icons for day time and night time

### 5 Day Forecast

TBD

### Graphics

- Create own weather icons? > to match the [condition codes](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)

- Different background depending on time of day (nice to have)
