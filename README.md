## Introduction

Greetings 👋

My name is Marian and this repository contains the code for my final project for the SheCodes Plus workshop for which I developed a weather application using the [OpenWeatherMap API](https://openweathermap.org/api).

This is my first attempt at better documenting my progress and capturing lessons learnt, so I ask that you be kind and keep in mind that I'm still learning 👩🏼‍💻😀

The application itself isn't fully responsive as we haven't covered that yet, but I managed to create something that should display nicely on your desktop/laptop and most mobile devices 🤞🏼

Link to final project:
to be added upon course completion

Link to course certificate:
to be added upon course completion

## Languages & tools

<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> </p>

## Items to be completed/fixed/updated

### Temperature & Units Today

- Styling of units upon click (C in darker colour | F in lighter colour > Temp displayed is in C). How to change CSS styling from JS?

  > SOLVED by Element.Classlist ([MDN Web Docs > Element:classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) || [Codegrepper > Adding a class to an element ](https://www.codegrepper.com/code-examples/whatever/add+class+to+an+element+mdn))

- Behaviour unit conversion, need to test different scenarios to identify rootcause

  > SOLVED by positioning the global variable 'celsiusTemperature' which can be called upon within the different functions ([freeCodeCamp > Global variables in Javascript explained](https://www.freecodecamp.org/news/global-variables-in-javascript-explained/) || [W3Schools > JS Scope explained](https://www.w3schools.com/js/js_scope.asp))

- Fix colour when hovering over the C/F units, is set to blue?

  > SOLVED by adding the :hover pseudo class and fixing the colour ([MDN Web Docs > :hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover))

- Current location button not working on safari/iphone (works fine in Chrome)

- Fix alignment of units (ok in browsers, not on mobile)?

### Search Bar

- Remove blue auto-focus colour for search bar and current location button

  > SOLVED by removing box shadow on :focus (btn) and using !important (Specificity) to overwrite bootstrap CSS for form-control ([MDN Web Docs > Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) || [CSS Tricks > When using !important is the right choice](https://css-tricks.com/when-using-important-is-the-right-choice/))

- Add CSS ease-in-out when hovering over search bar

- X icon to clear search to remain in focus

- When using the current location button after having performed a search, the name from the previous search stays in the search bar. How to reset?

### Weather Icons (API)

- For current weather, fix aligment with text

> SOLVED by removing CSS padding and center aligning the row div in Bootstrap(([Stackflow > Vertical align center in Bootstrap](https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap))

- Alt text for icons to match description of weather condition

- Icons to update for 5-day forecast

### 5 Day Forecast

TBD

### Graphics & Final Styling

- Create own weather icons (seperate set for day/night) > to match the [condition codes](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2)

- Different background depending on time of day (nice to have)

- Revisit font hierarchy
