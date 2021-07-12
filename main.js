/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


const renderContactPage = () => {

    //Actually only renders the contact page's "foreground container".  
    //The header and the footer do not need to be re-rendered since they 
    //the same for every tab
    const foregroundContainer = document.createElement('div');
    foregroundContainer.classList.add('foreground-container');

    const phoneH2 = document.createElement('h2');
    phoneH2.textContent = '561-123-3456';
    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = 'Phone:';
    phoneH2.prepend(phoneSpan);
    const addressH2 = document.createElement('h2');
    addressH2.textContent = ' On the beach at the end of S 39th St in Mexico Beach, FL, 32456';
    const addressSpan = document.createElement('span');
    addressSpan.textContent = 'Address:';
    addressH2.prepend(addressSpan);
    const map = document.createElement('img');
    map.src = '/restaurant/images/mexico-beach.png';
    foregroundContainer.append(phoneH2, addressH2, map);




    const emptyForegroundContainer = document.querySelector('.foreground-container');
    emptyForegroundContainer.replaceWith(foregroundContainer);

    const style = `
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

html {
    font-size: 62.5%;
}

p {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.foreground-container h2, p {
    font-size: 1.7rem;
    margin: 1rem;

}

.foreground-container span {
    font-size: 2.5rem;
    margin-right: 1rem;
}

.background-container {
    background-image: url('/restaurant/images/taco-plancha.jpg');
    background-size: cover;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

header{
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
    background-color: rgba(0,0,0,0.85);
    width: 100%;
}

header ul.tabs {
    display: flex;
    justify-content: center;
    width: 100%;
    list-style: none;
}

header ul.tabs > li {
    padding: 2rem;
    font-size: 2.5rem;
}

header ul.tabs > li:hover {
    text-decoration: underline;
}

header h1 {
    font-size: 4rem;
    text-align: center;
    margin-top: 2rem;
}

.foreground-container {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    background-color: rgba(0,0,0,0.60);
    max-width: 570px;
    align-items: center;
    color: white;
    width: 100vw;
    text-align: center;
    padding: 2rem 0;
    margin-bottom: 2rem;
    margin-top: 2rem;
}

.foreground-container img {
    width: 90%;
    max-width: 600px;
    margin-bottom: 1rem;
    margin-top: 1rem;
    border: 1px solid green;
}

footer {
  font-size: 1.5rem;
  height: 5vh;
  flex-direction: row;
  color: white;
  display: flex;
  justify-content: center;
  background-color: rgba(0,0,0,0.60);
  width: 100%;
  align-items: center;
  font-size: 1.7rem;
}

.copyright {
    margin-right: 1rem;
}



@media only screen and (min-width: 450px) {
    .foreground-container h2, p {
        font-size: 2rem;
    }
}

@media only screen and (min-width: 900px) {
    .foreground-container h2, p {
        font-size: 2.4rem;
    }
}


`;

    const documentStyles = document.querySelector('style');
    documentStyles.innerHTML = style;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);


/***/ }),

/***/ "./src/main-page.js":
/*!**************************!*\
  !*** ./src/main-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const renderMainPage = () => {

    //Actually only renders the main page's "foreground container".  
    //The header and the footer do not need to be re-rendered since they 
    //the same for every tab
    const foregroundContainer = document.createElement('div');
    foregroundContainer.classList.add('foreground-container');
    const englishH2 = document.createElement('h2');
    englishH2.textContent = 'The best tacos north of the border!';
    const spanishH2 = document.createElement('h2');
    spanishH2.textContent = '¡Los mejores tacos en el otro lado!';
    const flags = document.createElement('img');
    flags.src = '/restaurant/images/flags.png';
    flags.alt = 'an american flag on the left and a mexican flag on the right';
    const englishVisit = document.createElement('p');
    englishVisit.textContent = 'Visit us all week from 6pm to 2am!';
    const spanishVisit = document.createElement('p');
    spanishVisit.textContent = ' ¡Visítanos lunes a domingo de 6pm a 2am! ';
    foregroundContainer.append(englishH2, spanishH2, flags, englishVisit, spanishVisit);



    const emptyForegroundContainer = document.querySelector('.foreground-container');
    emptyForegroundContainer.replaceWith(foregroundContainer);

    const style = `
  * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

p {
  margin-bottom: 1rem;
  font-size: 2rem;
}

.foreground-container h2, p {
  font-size: 1.7rem;
  margin-bottom: 1rem;
}

.background-container {
  background-image: url('/restaurant/images/taco-plancha.jpg');
  background-size: cover;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

header{
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
  background-color: rgba(0,0,0,0.85);
  width: 100%;
}

header ul.tabs {
  display: flex;
  justify-content: center;
  width: 100%;
  list-style: none;
}

header ul.tabs > li {
  padding: 2rem;
  font-size: 2.5rem;
}

header ul.tabs > li:hover {
  text-decoration: underline;
}

header h1 {
  font-size: 4rem;
  text-align: center;
  margin-top: 2rem;
}

.foreground-container {
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  background-color: rgba(0,0,0,0.60);
  max-width: 650px;
  align-items: center;
  color: white;
  width: 100vw;
  text-align: center;
  padding: 3rem;
}

.foreground-container img {
  max-width: 300px;
  width: 50%;
  margin-bottom: 2rem;
  margin-top: 2rem;
}

footer {
font-size: 1.5rem;
height: 5vh;
flex-direction: row;
color: white;
display: flex;
justify-content: center;
background-color: rgba(0,0,0,0.60);
width: 100%;
align-items: center;
font-size: 1.7rem;
}

.copyright {
  margin-right: 1rem;
}

@media only screen and (min-width: 450px) {
  .foreground-container h2, p {
      font-size: 2rem;
  }
}

@media only screen and (min-width: 900px) {
  .foreground-container h2, p {
      font-size: 2.4rem;
  }
}`;

    const documentStyles = document.querySelector('style');
    documentStyles.innerHTML = style;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMainPage);


/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const renderMenuPage = () => {

    //Actually only renders the menu page's "foreground container".  
    //The header and the footer do not need to be re-rendered since they 
    //the same for every tab
    const foregroundContainer = document.createElement('div');
    foregroundContainer.classList.add('foreground-container');
  

    const carnitasDiv = document.createElement('div');
    carnitasDiv.classList.add('taco');
    const carnitas = document.createElement('img');
    carnitas.src = '/restaurant/images/carnitas.jpg';
    carnitas.alt = 'carnitas taco';
    const carnitasH2 = document.createElement('h2');
    carnitasH2.textContent = 'Carnitas';
    carnitasDiv.append(carnitas, carnitasH2);

    const chorizoDiv = document.createElement('div');
    chorizoDiv.classList.add('taco');
    const chorizo = document.createElement('img');
    chorizo.alt = 'chorizo taco';
    chorizo.src = '/restaurant/images/chorizo.jpg';
    const chorizoH2 = document.createElement('h2');
    chorizoH2.textContent = 'Chorizo';
    chorizoDiv.append(chorizo, chorizoH2);

    const suaderoDiv = document.createElement('div');
    suaderoDiv.classList.add('taco');
    const suadero = document.createElement('img');
    suadero.src = '/restaurant/images/suadero.jpg';
    suadero.alt = 'suadero taco';
    const suaderoH2 = document.createElement('h2');
    suaderoH2.textContent = 'Suadero';
    suaderoDiv.append(suadero, suaderoH2);

    const polloDiv = document.createElement('div');
    polloDiv.classList.add('taco');
    const pollo = document.createElement('img');
    pollo.src = '/restaurant/images/pollo.jpg';
    pollo.alt = 'pollo taco';
    const polloH2 = document.createElement('h2');
    polloH2.textContent = 'Pollo';
    polloDiv.append(pollo, polloH2);

    const tripaDiv = document.createElement('div');
    tripaDiv.classList.add('taco');
    const tripa = document.createElement('img');
    tripa.src = '/restaurant/images/tripa.jpg';
    pollo.alt = 'tripa taco';
    const tripaH2 = document.createElement('h2');
    tripaH2.textContent = 'Tripa';
    tripaDiv.append(tripa, tripaH2);

    const alPastorDiv = document.createElement('div');
    alPastorDiv.classList.add('taco');
    const alPastor = document.createElement('img');
    alPastor.src = '/restaurant/images/al-pastor.jpg';
    alPastor.alt = 'al pastor taco';
    const alPastorH2 = document.createElement('h2');
    alPastorH2.textContent = 'Al Pastor';
    alPastorDiv.append(alPastor, alPastorH2);

    const asadaDiv = document.createElement('div');
    asadaDiv.classList.add('taco');
    const asada = document.createElement('img');
    asada.src = '/restaurant/images/asada.jpg';
    asada.alt = 'asada taco';
    const asadaH2 = document.createElement('h2');
    asadaH2.textContent = 'Asada';
    asadaDiv.append(asada, asadaH2);

    const bucheDiv = document.createElement('div');
    bucheDiv.classList.add('taco');
    const buche = document.createElement('img');
    buche.src = '/restaurant/images/buche.png';
    buche.alt = 'buche taco';
    const bucheH2 = document.createElement('h2');
    bucheH2.textContent = 'Buche';
    bucheDiv.append(buche, bucheH2);

    foregroundContainer.append(carnitasDiv, chorizoDiv, suaderoDiv, polloDiv, tripaDiv, alPastorDiv, asadaDiv, bucheDiv);


    const emptyForegroundContainer = document.querySelector('.foreground-container');
    emptyForegroundContainer.replaceWith(foregroundContainer);

    const style = `     * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        font-size: 62.5%;
    }

    p {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    .foreground-container h2, p {
        font-size: 1.7rem;
        margin-bottom: 1rem;
    }

    .background-container {
        background-image: url('/restaurant/images/taco-plancha.jpg');
        background-size:cover;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        z-index: -1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    header{
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        height: 20vh;
        background-color: rgba(0,0,0,0.85);
        width: 100%;
    }

    header ul.tabs {
        display: flex;
        justify-content: center;
        width: 100%;
        list-style: none;
    }

    header ul.tabs > li {
        padding: 2rem;
        font-size: 2.5rem;
    }

    header ul.tabs > li:hover {
        text-decoration: underline;
    }

    header h1 {
        font-size: 4rem;
        text-align: center;
        margin-top: 2rem;
    }

    .foreground-container {
        display: flex;
        flex-direction: row;
        border: 1px solid red;
        background-color: rgba(0,0,0,0.60);
        max-width: 800px;
        align-items: space-evenly;
        color: white;
        width: 100vw;
        text-align: center;
        padding: 2rem;
        justify-content: space-evenly;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        margin-top: 2rem;
    }

    .taco {
        background-color: rgba(0,0,0,0.60);
        border: 1px solid green;
        padding-left: 0;
        padding-right: 0;
        margin: 2rem;
        width: 90%;
        max-width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        transition: background 0.25s;
    }

    .foreground-container img {

        max-width: 500;
        max-height: 500;
        width: 150px;
        height: 150px;
        object-fit: cover;
        margin: 3rem;
        margin-bottom: 1rem;
        border-radius: 20px;
    }

    footer {
      font-size: 1.5rem;
      height: 5vh;
      flex-direction: row;
      color: white;
      display: flex;
      justify-content: center;
      background-color: rgba(0,0,0,0.60);
      width: 100%;
      align-items: center;
      font-size: 1.7rem;
    }

    .copyright {
        margin-right: 1rem;
    }

    .white {
        background-color: rgba(255, 255, 255, 0.10)
    }

    @media only screen and (min-width: 450px) {
        .foreground-container h2, p {
            font-size: 2rem;
        }
    }

    @media only screen and (min-width: 900px) {
        .foreground-container h2, p {
            font-size: 2.4rem;
        }
    }
    
   `;

    const documentStyles = document.querySelector('style');
    documentStyles.innerHTML = style;

    const tacos = document.querySelectorAll('div.taco');
    for (let taco of tacos) {
        taco.addEventListener('mouseover', makeDivWhite);
        taco.addEventListener('mouseout', makeDivBlack);
    }

    function makeDivWhite() {
        this.classList.add('white');
    }

    function makeDivBlack() {
        this.classList.remove('white');
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page */ "./src/main-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");





renderHeaderAndFooter();
(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();

let tabs = document.querySelector("ul.tabs");
tabs.addEventListener("click", openTab);

function openTab(e) {
  switch (e.target.className) {
    case "home":
      (0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();
      break;
    case "menu":
      (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.default)();
      break;
    case "contact":
      (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__.default)();
      break;
  }
}

function renderHeaderAndFooter() {
  const backgroundContainer = document.createElement('div');
  backgroundContainer.classList.add('background-container');
  const foregroundContainer = document.createElement('div');
  foregroundContainer.classList.add('foreground-container');
  const header = document.createElement('header');
  const h1 = document.createElement('h1');
  const span = document.createElement('span');
  span.style.color = "red";
  span.innerText = "El ";
  const griSpan = document.createElement('span');
  griSpan.style.color = 'white';
  griSpan.innerText = 'Gri';
  const ngoSpan = document.createElement('span');
  ngoSpan.style.color = 'blue';
  ngoSpan.innerText = "ngo's ";
  const mexiSpan = document.createElement('span');
  mexiSpan.style.color = 'green';
  mexiSpan.innerText = 'MEXI';
  const canSpan = document.createElement('span');
  canSpan.style.color = 'white';
  canSpan.innerText = 'CAN ';
  const tacosSpan = document.createElement('span');
  tacosSpan.style.color = 'red';
  tacosSpan.innerText = 'Tacos';
  h1.append(span, griSpan, ngoSpan, mexiSpan, canSpan,tacosSpan);
  const tabs = document.createElement('ul');
  tabs.classList.add('tabs');
  header.append(h1, tabs);
  const home = document.createElement('li');
  home.classList.add('home');
  home.textContent = 'Home';
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.classList.add('menu');
  const contact = document.createElement('li');
  contact.classList.add('contact');
  contact.textContent = 'Contact';
  tabs.append(home, menu, contact);
  const footer = document.createElement('footer');
  const copyright = document.createElement('span');
  copyright.classList.add('copyright');
  copyright.textContent = "Copyright © 2021 mattdimicelli";
  backgroundContainer.append(header, foregroundContainer, footer);
  const githubLink = document.createElement('a');
  githubLink.href = "https://github.com/mattdimicelli";
  const githubLogo = document.createElement('img');
  githubLogo.src = "/restaurant/images/GitHub-Mark-32px.png";
  githubLogo.alt = "github logo";
  githubLink.append(githubLogo);
  footer.append(copyright, githubLink);

  const emptyBackgroundContainer = document.querySelector(".background-container");
  emptyBackgroundContainer.replaceWith(backgroundContainer);
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0S2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSjlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzNQOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNBO0FBQ007OztBQUcvQztBQUNBLG1EQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQjtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQjtBQUNBO0FBQ0EsTUFBTSxzREFBaUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCByZW5kZXJDb250YWN0UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBjb250YWN0IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGhvbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIMi50ZXh0Q29udGVudCA9ICc1NjEtMTIzLTM0NTYnO1xuICAgIGNvbnN0IHBob25lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwaG9uZVNwYW4udGV4dENvbnRlbnQgPSAnUGhvbmU6JztcbiAgICBwaG9uZUgyLnByZXBlbmQocGhvbmVTcGFuKTtcbiAgICBjb25zdCBhZGRyZXNzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFkZHJlc3NIMi50ZXh0Q29udGVudCA9ICcgT24gdGhlIGJlYWNoIGF0IHRoZSBlbmQgb2YgUyAzOXRoIFN0IGluIE1leGljbyBCZWFjaCwgRkwsIDMyNDU2JztcbiAgICBjb25zdCBhZGRyZXNzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRyZXNzU3Bhbi50ZXh0Q29udGVudCA9ICdBZGRyZXNzOic7XG4gICAgYWRkcmVzc0gyLnByZXBlbmQoYWRkcmVzc1NwYW4pO1xuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcC5zcmMgPSAnL3Jlc3RhdXJhbnQvaW1hZ2VzL21leGljby1iZWFjaC5wbmcnO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKHBob25lSDIsIGFkZHJlc3NIMiwgbWFwKTtcblxuXG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChmb3JlZ3JvdW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0eWxlID0gYFxuICAgICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcblxufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL3Jlc3RhdXJhbnQvaW1hZ2VzL3RhY28tcGxhbmNoYS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaGVhZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHVsLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgICBtYXgtd2lkdGg6IDU3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGhlaWdodDogNXZoO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5jb3B5cmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgfVxufVxuXG5cbmA7XG5cbiAgICBjb25zdCBkb2N1bWVudFN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgZG9jdW1lbnRTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0UGFnZTtcbiIsImNvbnN0IHJlbmRlck1haW5QYWdlID0gKCkgPT4ge1xuXG4gICAgLy9BY3R1YWxseSBvbmx5IHJlbmRlcnMgdGhlIG1haW4gcGFnZSdzIFwiZm9yZWdyb3VuZCBjb250YWluZXJcIi4gIFxuICAgIC8vVGhlIGhlYWRlciBhbmQgdGhlIGZvb3RlciBkbyBub3QgbmVlZCB0byBiZSByZS1yZW5kZXJlZCBzaW5jZSB0aGV5IFxuICAgIC8vdGhlIHNhbWUgZm9yIGV2ZXJ5IHRhYlxuICAgIGNvbnN0IGZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgZW5nbGlzaEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBlbmdsaXNoSDIudGV4dENvbnRlbnQgPSAnVGhlIGJlc3QgdGFjb3Mgbm9ydGggb2YgdGhlIGJvcmRlciEnO1xuICAgIGNvbnN0IHNwYW5pc2hIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3BhbmlzaEgyLnRleHRDb250ZW50ID0gJ8KhTG9zIG1lam9yZXMgdGFjb3MgZW4gZWwgb3RybyBsYWRvISc7XG4gICAgY29uc3QgZmxhZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBmbGFncy5zcmMgPSAnL3Jlc3RhdXJhbnQvaW1hZ2VzL2ZsYWdzLnBuZyc7XG4gICAgZmxhZ3MuYWx0ID0gJ2FuIGFtZXJpY2FuIGZsYWcgb24gdGhlIGxlZnQgYW5kIGEgbWV4aWNhbiBmbGFnIG9uIHRoZSByaWdodCc7XG4gICAgY29uc3QgZW5nbGlzaFZpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGVuZ2xpc2hWaXNpdC50ZXh0Q29udGVudCA9ICdWaXNpdCB1cyBhbGwgd2VlayBmcm9tIDZwbSB0byAyYW0hJztcbiAgICBjb25zdCBzcGFuaXNoVmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3BhbmlzaFZpc2l0LnRleHRDb250ZW50ID0gJyDCoVZpc8OtdGFub3MgbHVuZXMgYSBkb21pbmdvIGRlIDZwbSBhIDJhbSEgJztcbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChlbmdsaXNoSDIsIHNwYW5pc2hIMiwgZmxhZ3MsIGVuZ2xpc2hWaXNpdCwgc3BhbmlzaFZpc2l0KTtcblxuXG5cbiAgICBjb25zdCBlbXB0eUZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWdyb3VuZC1jb250YWluZXInKTtcbiAgICBlbXB0eUZvcmVncm91bmRDb250YWluZXIucmVwbGFjZVdpdGgoZm9yZWdyb3VuZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzdHlsZSA9IGBcbiAgKiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbnAge1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9yZXN0YXVyYW50L2ltYWdlcy90YWNvLXBsYW5jaGEuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogLTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaGVhZGVye1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBoZWlnaHQ6IDIwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIgdWwudGFicyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaSB7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5oZWFkZXIgdWwudGFicyA+IGxpOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogNHJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gIG1heC13aWR0aDogNjUwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDNyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciBpbWcge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG5mb290ZXIge1xuZm9udC1zaXplOiAxLjVyZW07XG5oZWlnaHQ6IDV2aDtcbmZsZXgtZGlyZWN0aW9uOiByb3c7XG5jb2xvcjogd2hpdGU7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xud2lkdGg6IDEwMCU7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5jb3B5cmlnaHQge1xuICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgfVxufWA7XG5cbiAgICBjb25zdCBkb2N1bWVudFN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgZG9jdW1lbnRTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNYWluUGFnZTtcbiIsIlxuY29uc3QgcmVuZGVyTWVudVBhZ2UgPSAoKSA9PiB7XG5cbiAgICAvL0FjdHVhbGx5IG9ubHkgcmVuZGVycyB0aGUgbWVudSBwYWdlJ3MgXCJmb3JlZ3JvdW5kIGNvbnRhaW5lclwiLiAgXG4gICAgLy9UaGUgaGVhZGVyIGFuZCB0aGUgZm9vdGVyIGRvIG5vdCBuZWVkIHRvIGJlIHJlLXJlbmRlcmVkIHNpbmNlIHRoZXkgXG4gICAgLy90aGUgc2FtZSBmb3IgZXZlcnkgdGFiXG4gICAgY29uc3QgZm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWdyb3VuZC1jb250YWluZXInKTtcbiAgXG5cbiAgICBjb25zdCBjYXJuaXRhc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcm5pdGFzRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBjYXJuaXRhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNhcm5pdGFzLnNyYyA9ICcvcmVzdGF1cmFudC9pbWFnZXMvY2Fybml0YXMuanBnJztcbiAgICBjYXJuaXRhcy5hbHQgPSAnY2Fybml0YXMgdGFjbyc7XG4gICAgY29uc3QgY2Fybml0YXNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2Fybml0YXNIMi50ZXh0Q29udGVudCA9ICdDYXJuaXRhcyc7XG4gICAgY2Fybml0YXNEaXYuYXBwZW5kKGNhcm5pdGFzLCBjYXJuaXRhc0gyKTtcblxuICAgIGNvbnN0IGNob3Jpem9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaG9yaXpvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBjaG9yaXpvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hvcml6by5hbHQgPSAnY2hvcml6byB0YWNvJztcbiAgICBjaG9yaXpvLnNyYyA9ICcvcmVzdGF1cmFudC9pbWFnZXMvY2hvcml6by5qcGcnO1xuICAgIGNvbnN0IGNob3Jpem9IMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2hvcml6b0gyLnRleHRDb250ZW50ID0gJ0Nob3Jpem8nO1xuICAgIGNob3Jpem9EaXYuYXBwZW5kKGNob3Jpem8sIGNob3Jpem9IMik7XG5cbiAgICBjb25zdCBzdWFkZXJvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3VhZGVyb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3Qgc3VhZGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHN1YWRlcm8uc3JjID0gJy9yZXN0YXVyYW50L2ltYWdlcy9zdWFkZXJvLmpwZyc7XG4gICAgc3VhZGVyby5hbHQgPSAnc3VhZGVybyB0YWNvJztcbiAgICBjb25zdCBzdWFkZXJvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1YWRlcm9IMi50ZXh0Q29udGVudCA9ICdTdWFkZXJvJztcbiAgICBzdWFkZXJvRGl2LmFwcGVuZChzdWFkZXJvLCBzdWFkZXJvSDIpO1xuXG4gICAgY29uc3QgcG9sbG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwb2xsb0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgcG9sbG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBwb2xsby5zcmMgPSAnL3Jlc3RhdXJhbnQvaW1hZ2VzL3BvbGxvLmpwZyc7XG4gICAgcG9sbG8uYWx0ID0gJ3BvbGxvIHRhY28nO1xuICAgIGNvbnN0IHBvbGxvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBvbGxvSDIudGV4dENvbnRlbnQgPSAnUG9sbG8nO1xuICAgIHBvbGxvRGl2LmFwcGVuZChwb2xsbywgcG9sbG9IMik7XG5cbiAgICBjb25zdCB0cmlwYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRyaXBhRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCB0cmlwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHRyaXBhLnNyYyA9ICcvcmVzdGF1cmFudC9pbWFnZXMvdHJpcGEuanBnJztcbiAgICBwb2xsby5hbHQgPSAndHJpcGEgdGFjbyc7XG4gICAgY29uc3QgdHJpcGFIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdHJpcGFIMi50ZXh0Q29udGVudCA9ICdUcmlwYSc7XG4gICAgdHJpcGFEaXYuYXBwZW5kKHRyaXBhLCB0cmlwYUgyKTtcblxuICAgIGNvbnN0IGFsUGFzdG9yRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWxQYXN0b3JEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGFsUGFzdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWxQYXN0b3Iuc3JjID0gJy9yZXN0YXVyYW50L2ltYWdlcy9hbC1wYXN0b3IuanBnJztcbiAgICBhbFBhc3Rvci5hbHQgPSAnYWwgcGFzdG9yIHRhY28nO1xuICAgIGNvbnN0IGFsUGFzdG9ySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFsUGFzdG9ySDIudGV4dENvbnRlbnQgPSAnQWwgUGFzdG9yJztcbiAgICBhbFBhc3RvckRpdi5hcHBlbmQoYWxQYXN0b3IsIGFsUGFzdG9ySDIpO1xuXG4gICAgY29uc3QgYXNhZGFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhc2FkYURpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgYXNhZGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhc2FkYS5zcmMgPSAnL3Jlc3RhdXJhbnQvaW1hZ2VzL2FzYWRhLmpwZyc7XG4gICAgYXNhZGEuYWx0ID0gJ2FzYWRhIHRhY28nO1xuICAgIGNvbnN0IGFzYWRhSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFzYWRhSDIudGV4dENvbnRlbnQgPSAnQXNhZGEnO1xuICAgIGFzYWRhRGl2LmFwcGVuZChhc2FkYSwgYXNhZGFIMik7XG5cbiAgICBjb25zdCBidWNoZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1Y2hlRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBidWNoZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGJ1Y2hlLnNyYyA9ICcvcmVzdGF1cmFudC9pbWFnZXMvYnVjaGUucG5nJztcbiAgICBidWNoZS5hbHQgPSAnYnVjaGUgdGFjbyc7XG4gICAgY29uc3QgYnVjaGVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYnVjaGVIMi50ZXh0Q29udGVudCA9ICdCdWNoZSc7XG4gICAgYnVjaGVEaXYuYXBwZW5kKGJ1Y2hlLCBidWNoZUgyKTtcblxuICAgIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKGNhcm5pdGFzRGl2LCBjaG9yaXpvRGl2LCBzdWFkZXJvRGl2LCBwb2xsb0RpdiwgdHJpcGFEaXYsIGFsUGFzdG9yRGl2LCBhc2FkYURpdiwgYnVjaGVEaXYpO1xuXG5cbiAgICBjb25zdCBlbXB0eUZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9yZWdyb3VuZC1jb250YWluZXInKTtcbiAgICBlbXB0eUZvcmVncm91bmRDb250YWluZXIucmVwbGFjZVdpdGgoZm9yZWdyb3VuZENvbnRhaW5lcik7XG5cbiAgICBjb25zdCBzdHlsZSA9IGAgICAgICoge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgaHRtbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNjIuNSU7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9yZXN0YXVyYW50L2ltYWdlcy90YWNvLXBsYW5jaGEuanBnJyk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIGhlYWRlcntcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgaGVpZ2h0OiAyMHZoO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBoZWFkZXIgdWwudGFicyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICBoZWFkZXIgdWwudGFicyA+IGxpIHtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgfVxuXG4gICAgaGVhZGVyIHVsLnRhYnMgPiBsaTpob3ZlciB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cblxuICAgIGhlYWRlciBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMnJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAudGFjbyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMnJlbTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cztcbiAgICB9XG5cbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaW1nIHtcblxuICAgICAgICBtYXgtd2lkdGg6IDUwMDtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwO1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBtYXJnaW46IDNyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgfVxuXG4gICAgZm9vdGVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgaGVpZ2h0OiA1dmg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIH1cblxuICAgIC5jb3B5cmlnaHQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxuXG4gICAgLndoaXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEwKVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICAgICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAgICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgYDtcblxuICAgIGNvbnN0IGRvY3VtZW50U3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGUnKTtcbiAgICBkb2N1bWVudFN0eWxlcy5pbm5lckhUTUwgPSBzdHlsZTtcblxuICAgIGNvbnN0IHRhY29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnRhY28nKTtcbiAgICBmb3IgKGxldCB0YWNvIG9mIHRhY29zKSB7XG4gICAgICAgIHRhY28uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgbWFrZURpdldoaXRlKTtcbiAgICAgICAgdGFjby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIG1ha2VEaXZCbGFjayk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURpdldoaXRlKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ3doaXRlJyk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZURpdkJsYWNrKCkge1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3doaXRlJyk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJNYWluUGFnZSBmcm9tIFwiLi9tYWluLXBhZ2VcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51LXBhZ2VcIjtcbmltcG9ydCByZW5kZXJDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcblxuXG5yZW5kZXJIZWFkZXJBbmRGb290ZXIoKTtcbnJlbmRlck1haW5QYWdlKCk7XG5cbmxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLnRhYnNcIik7XG50YWJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFiKTtcblxuZnVuY3Rpb24gb3BlblRhYihlKSB7XG4gIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgY2FzZSBcImhvbWVcIjpcbiAgICAgIHJlbmRlck1haW5QYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVudVwiOlxuICAgICAgcmVuZGVyTWVudVBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICByZW5kZXJDb250YWN0UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyQW5kRm9vdGVyKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JlZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBzcGFuLmlubmVyVGV4dCA9IFwiRWwgXCI7XG4gIGNvbnN0IGdyaVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdyaVNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICBncmlTcGFuLmlubmVyVGV4dCA9ICdHcmknO1xuICBjb25zdCBuZ29TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBuZ29TcGFuLnN0eWxlLmNvbG9yID0gJ2JsdWUnO1xuICBuZ29TcGFuLmlubmVyVGV4dCA9IFwibmdvJ3MgXCI7XG4gIGNvbnN0IG1leGlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZXhpU3Bhbi5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gIG1leGlTcGFuLmlubmVyVGV4dCA9ICdNRVhJJztcbiAgY29uc3QgY2FuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2FuU3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gIGNhblNwYW4uaW5uZXJUZXh0ID0gJ0NBTiAnO1xuICBjb25zdCB0YWNvc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRhY29zU3Bhbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICB0YWNvc1NwYW4uaW5uZXJUZXh0ID0gJ1RhY29zJztcbiAgaDEuYXBwZW5kKHNwYW4sIGdyaVNwYW4sIG5nb1NwYW4sIG1leGlTcGFuLCBjYW5TcGFuLHRhY29zU3Bhbik7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgaGVhZGVyLmFwcGVuZChoMSwgdGFicyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHRhYnMuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0Jyk7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgbWF0dGRpbWljZWxsaVwiO1xuICBiYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGZvcmVncm91bmRDb250YWluZXIsIGZvb3Rlcik7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL21hdHRkaW1pY2VsbGlcIjtcbiAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBnaXRodWJMb2dvLnNyYyA9IFwiL3Jlc3RhdXJhbnQvaW1hZ2VzL0dpdEh1Yi1NYXJrLTMycHgucG5nXCI7XG4gIGdpdGh1YkxvZ28uYWx0ID0gXCJnaXRodWIgbG9nb1wiO1xuICBnaXRodWJMaW5rLmFwcGVuZChnaXRodWJMb2dvKTtcbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGdpdGh1YkxpbmspO1xuXG4gIGNvbnN0IGVtcHR5QmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZC1jb250YWluZXJcIik7XG4gIGVtcHR5QmFja2dyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==