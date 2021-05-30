## Introduction

Greetings 👋

My name is Marian and this repository contains the code for my final project for the SheCodes Plus workshop for which I developed a weather application using the [OpenWeatherMap API](https://openweathermap.org/api).

This is my first attempt at better documenting my progress and capturing lessons learnt, so I ask that you be kind and keep in mind that I'm still learning 👩🏼‍💻😀

The application is responsive but not perfect. We haven't covered all the content but I managed to create something that should display nicely on your desktop/laptop and most mobile devices 🤞🏼

Link to app:
to be added upon course completion

Link to course certificate:
to be added upon course completion

## Languages & tools

<p align="left"> <a href="https://getbootstrap.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.figma.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="figma" width="40" height="40"/> </a> </p>

## Items to be completed/fixed/updated

📌 = temp solution, to be investigated further
🍏 = IOS related
🔚 = decomissioned feature

## To Do

PLANNING FINAL WEEK

- Add HTML and CSS for 5-day Forecast (using fake data) ✅
- Create JS forecast template ✅
- Add the API call to get the Forecast data ✅
- Replace dummy content with real data in JS ✅

- Revisit font hierarchy ✅
- Revisit colour scheme (to work with new icons)
- Add country code to output
- Add alt text (including image icons)

## Fixes / Solutions

### `Temperature & Units Today`

- Styling of units upon click (C in darker colour | F in lighter colour > Temp displayed is in C). How to change CSS styling from JS?

  > 🔚 SOLVED by Element.Classlist ([MDN Web Docs > Element:classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) || [Codegrepper > Adding a class to an element ](https://www.codegrepper.com/code-examples/whatever/add+class+to+an+element+mdn))

- Behaviour unit conversion, need to test different scenarios to identify rootcause

  > 🔚 SOLVED by positioning the global variable 'celsiusTemperature' which can be called upon within the different functions ([freeCodeCamp > Global variables in Javascript explained](https://www.freecodecamp.org/news/global-variables-in-javascript-explained/) || [W3Schools > JS Scope explained](https://www.w3schools.com/js/js_scope.asp))

- Fix colour when hovering over the C/F units, is set to blue?

  > 🔚 SOLVED by adding the :hover pseudo class and fixing the colour ([MDN Web Docs > :hover](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover))

- Fix alignment of units (ok in browsers, not on mobile)?

  > 🔚 📌 SOLVED by wrapping the | in an anchor element. Found no clear answer on why vertical-align doesn't work on mobile (appears to be the device size being below a certain threshold), putting line-height to 1 for both classes gave the best solution for now.

- Fix autozoom on mobile (IOS) when the search-bar is in focus

  > 🍏📌 SOLVED by updating the fontsize to 16px. Apparently IOS will zoom the page if the fontsize of the input field is below 16px and changing the fontsize appears to be the simplest solution. ([Webflow Forums > Prevent zoom in on form focus state for mobile (IOS)](https://forum.webflow.com/t/prevent-zoom-in-on-form-focus-state-for-mobile/33867))

### `Search Bar`

- Remove blue auto-focus colour for search bar and current location button

  > SOLVED by removing box shadow on :focus (btn) and using !important (Specificity) to overwrite bootstrap CSS for form-control ([MDN Web Docs > Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) || [CSS Tricks > When using !important is the right choice](https://css-tricks.com/when-using-important-is-the-right-choice/))

- X icon to clear search didn't appear on iphone

  > 🍏📌 SOLVED by adding CSS snippet, solution found via [Stackoverflow > <input type=“search”> no longer shows cancel button (x) under iOS](https://stackoverflow.com/questions/35583503/input-type-search-no-longer-shows-cancel-button-x-under-ios) - Solution not supported on Firefox, see MDN for more context. [MDN Web Docs > ::-webkit-search-cancel-button](https://developer.mozilla.org/en-US/docs/Web/CSS/::-webkit-search-cancel-button)

- When using the current location button after having performed a search, the name from the previous search stays in the search bar. How to reset?

- "Current location" button not working on iPhone (search button performs as expected), works fine on laptop.

### `Weather Icons (API)`

- For current weather, fix aligment with text

  > 🔚 SOLVED by removing CSS padding and center aligning the row div in Bootstrap(([Stackflow > Vertical align center in Bootstrap](https://stackoverflow.com/questions/42252443/vertical-align-center-in-bootstrap))

### `Graphics & Final Styling`

- Create own weather icons (seperate set for day/night) > to match the [condition codes](https://openweathermap.org/weather-conditions#Weather-Condition-Codes-2). ‼ use PNG (2x) instead of SVG

- Update Bootstrap to be responsive
  > Was able to find a workable solution after reading this blog ["How the Bootstrap 4 Grid works"](https://uxplanet.org/how-the-bootstrap-4-grid-works-a1b04703a3b7)
