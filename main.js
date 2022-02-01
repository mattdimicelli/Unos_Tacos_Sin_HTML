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
    map.src = '/Unos_Tacos_Sin_HTML/images/mexico-beach.png';
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
    background-image: url('/Unos_Tacos_Sin_HTML/images/taco-plancha.jpg');
    background-size: cover;
    min-height: 100vh;
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

/***/ "./src/header-and-footer.js":
/*!**********************************!*\
  !*** ./src/header-and-footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderHeaderAndFooter)
/* harmony export */ });
function renderHeaderAndFooter() {
    const backgroundContainer = document.createElement('div');
    backgroundContainer.classList.add('background-container');
    const foregroundContainer = document.createElement('div');
    foregroundContainer.classList.add('foreground-container');
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const span = document.createElement('span');
    span.style.color = 'red';
    span.innerText = 'El ';
    const griSpan = document.createElement('span');
    griSpan.style.color = 'white';
    griSpan.innerText = 'Gri';
    const ngoSpan = document.createElement('span');
    ngoSpan.style.color = 'blue';
    ngoSpan.innerText = 'ngo\'s ';
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
    copyright.textContent = 'Copyright © 2021 mattdimicelli';
    backgroundContainer.append(header, foregroundContainer, footer);
    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/mattdimicelli';
    const githubLogo = document.createElement('img');
    githubLogo.src = '/Unos_Tacos_Sin_HTML/images/GitHub-Mark-32px.png';
    githubLogo.alt = 'github logo';
    githubLink.append(githubLogo);
    footer.append(copyright, githubLink);

    const emptyBackgroundContainer = document.querySelector('.background-container');
    emptyBackgroundContainer.replaceWith(backgroundContainer);
}


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
    flags.src = '/Unos_Tacos_Sin_HTML/images/flags.png';
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
  background-image: url('/Unos_Tacos_Sin_HTML/images/taco-plancha.jpg');
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
    carnitas.src = '/Unos_Tacos_Sin_HTML/images/carnitas.jpg';
    carnitas.alt = 'carnitas taco';
    const carnitasH2 = document.createElement('h2');
    carnitasH2.textContent = 'Carnitas';
    carnitasDiv.append(carnitas, carnitasH2);

    const chorizoDiv = document.createElement('div');
    chorizoDiv.classList.add('taco');
    const chorizo = document.createElement('img');
    chorizo.alt = 'chorizo taco';
    chorizo.src = '/Unos_Tacos_Sin_HTML/images/chorizo.jpg';
    const chorizoH2 = document.createElement('h2');
    chorizoH2.textContent = 'Chorizo';
    chorizoDiv.append(chorizo, chorizoH2);

    const suaderoDiv = document.createElement('div');
    suaderoDiv.classList.add('taco');
    const suadero = document.createElement('img');
    suadero.src = '/Unos_Tacos_Sin_HTML/images/suadero.jpg';
    suadero.alt = 'suadero taco';
    const suaderoH2 = document.createElement('h2');
    suaderoH2.textContent = 'Suadero';
    suaderoDiv.append(suadero, suaderoH2);

    const polloDiv = document.createElement('div');
    polloDiv.classList.add('taco');
    const pollo = document.createElement('img');
    pollo.src = '/Unos_Tacos_Sin_HTML/images/pollo.jpg';
    pollo.alt = 'pollo taco';
    const polloH2 = document.createElement('h2');
    polloH2.textContent = 'Pollo';
    polloDiv.append(pollo, polloH2);

    const tripaDiv = document.createElement('div');
    tripaDiv.classList.add('taco');
    const tripa = document.createElement('img');
    tripa.src = '/Unos_Tacos_Sin_HTML/images/tripa.jpg';
    pollo.alt = 'tripa taco';
    const tripaH2 = document.createElement('h2');
    tripaH2.textContent = 'Tripa';
    tripaDiv.append(tripa, tripaH2);

    const alPastorDiv = document.createElement('div');
    alPastorDiv.classList.add('taco');
    const alPastor = document.createElement('img');
    alPastor.src = '/Unos_Tacos_Sin_HTML/images/al-pastor.jpg';
    alPastor.alt = 'al pastor taco';
    const alPastorH2 = document.createElement('h2');
    alPastorH2.textContent = 'Al Pastor';
    alPastorDiv.append(alPastor, alPastorH2);

    const asadaDiv = document.createElement('div');
    asadaDiv.classList.add('taco');
    const asada = document.createElement('img');
    asada.src = '/Unos_Tacos_Sin_HTML/images/asada.jpg';
    asada.alt = 'asada taco';
    const asadaH2 = document.createElement('h2');
    asadaH2.textContent = 'Asada';
    asadaDiv.append(asada, asadaH2);

    const bucheDiv = document.createElement('div');
    bucheDiv.classList.add('taco');
    const buche = document.createElement('img');
    buche.src = '/Unos_Tacos_Sin_HTML/images/buche.png';
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
        background-image: url('/Unos_Tacos_Sin_HTML/images/taco-plancha.jpg');
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
/* harmony import */ var _header_and_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header-and-footer */ "./src/header-and-footer.js");






(0,_header_and_footer__WEBPACK_IMPORTED_MODULE_3__.default)();
(0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();

let tabs = document.querySelector('ul.tabs');
tabs.addEventListener('click', openTab);

function openTab(e) {
    switch (e.target.className) {
    case 'home':
        (0,_main_page__WEBPACK_IMPORTED_MODULE_0__.default)();
        break;
    case 'menu':
        (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__.default)();
        break;
    case 'contact':
        (0,_contact_page__WEBPACK_IMPORTED_MODULE_2__.default)();
        break;
    }
}



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci1hbmQtZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RLbEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSjlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzNQOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDQTtBQUNNO0FBQ1M7OztBQUd4RCwyREFBcUI7QUFDckIsbURBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFjO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLG1EQUFjO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLHNEQUFpQjtBQUN6QjtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCByZW5kZXJDb250YWN0UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBjb250YWN0IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGhvbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIMi50ZXh0Q29udGVudCA9ICc1NjEtMTIzLTM0NTYnO1xuICAgIGNvbnN0IHBob25lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwaG9uZVNwYW4udGV4dENvbnRlbnQgPSAnUGhvbmU6JztcbiAgICBwaG9uZUgyLnByZXBlbmQocGhvbmVTcGFuKTtcbiAgICBjb25zdCBhZGRyZXNzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFkZHJlc3NIMi50ZXh0Q29udGVudCA9ICcgT24gdGhlIGJlYWNoIGF0IHRoZSBlbmQgb2YgUyAzOXRoIFN0IGluIE1leGljbyBCZWFjaCwgRkwsIDMyNDU2JztcbiAgICBjb25zdCBhZGRyZXNzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRyZXNzU3Bhbi50ZXh0Q29udGVudCA9ICdBZGRyZXNzOic7XG4gICAgYWRkcmVzc0gyLnByZXBlbmQoYWRkcmVzc1NwYW4pO1xuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcC5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL21leGljby1iZWFjaC5wbmcnO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKHBob25lSDIsIGFkZHJlc3NIMiwgbWFwKTtcblxuXG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChmb3JlZ3JvdW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0eWxlID0gYFxuICAgICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcblxufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3RhY28tcGxhbmNoYS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlcntcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgaGVpZ2h0OiAyMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB1bC50YWJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmhlYWRlciB1bC50YWJzID4gbGkge1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbmhlYWRlciB1bC50YWJzID4gbGk6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgbWF4LXdpZHRoOiA1NzBweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG59XG5cbmZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBoZWlnaHQ6IDV2aDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICAgIH1cbn1cblxuXG5gO1xuXG4gICAgY29uc3QgZG9jdW1lbnRTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgIGRvY3VtZW50U3R5bGVzLmlubmVySFRNTCA9IHN0eWxlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ29udGFjdFBhZ2U7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJIZWFkZXJBbmRGb290ZXIoKSB7XG4gICAgY29uc3QgYmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1jb250YWluZXInKTtcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICBzcGFuLmlubmVyVGV4dCA9ICdFbCAnO1xuICAgIGNvbnN0IGdyaVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZ3JpU3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gICAgZ3JpU3Bhbi5pbm5lclRleHQgPSAnR3JpJztcbiAgICBjb25zdCBuZ29TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG5nb1NwYW4uc3R5bGUuY29sb3IgPSAnYmx1ZSc7XG4gICAgbmdvU3Bhbi5pbm5lclRleHQgPSAnbmdvXFwncyAnO1xuICAgIGNvbnN0IG1leGlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIG1leGlTcGFuLnN0eWxlLmNvbG9yID0gJ2dyZWVuJztcbiAgICBtZXhpU3Bhbi5pbm5lclRleHQgPSAnTUVYSSc7XG4gICAgY29uc3QgY2FuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYW5TcGFuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBjYW5TcGFuLmlubmVyVGV4dCA9ICdDQU4gJztcbiAgICBjb25zdCB0YWNvc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGFjb3NTcGFuLnN0eWxlLmNvbG9yID0gJ3JlZCc7XG4gICAgdGFjb3NTcGFuLmlubmVyVGV4dCA9ICdUYWNvcyc7XG4gICAgaDEuYXBwZW5kKHNwYW4sIGdyaVNwYW4sIG5nb1NwYW4sIG1leGlTcGFuLCBjYW5TcGFuLHRhY29zU3Bhbik7XG4gICAgY29uc3QgdGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgdGFicy5jbGFzc0xpc3QuYWRkKCd0YWJzJyk7XG4gICAgaGVhZGVyLmFwcGVuZChoMSwgdGFicyk7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBtZW51LnRleHRDb250ZW50ID0gJ01lbnUnO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIGNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnRhY3QuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gICAgdGFicy5hcHBlbmQoaG9tZSwgbWVudSwgY29udGFjdCk7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnKTtcbiAgICBjb3B5cmlnaHQudGV4dENvbnRlbnQgPSAnQ29weXJpZ2h0IMKpIDIwMjEgbWF0dGRpbWljZWxsaSc7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBmb3JlZ3JvdW5kQ29udGFpbmVyLCBmb290ZXIpO1xuICAgIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0aHViTGluay5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXR0ZGltaWNlbGxpJztcbiAgICBjb25zdCBnaXRodWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZ2l0aHViTG9nby5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL0dpdEh1Yi1NYXJrLTMycHgucG5nJztcbiAgICBnaXRodWJMb2dvLmFsdCA9ICdnaXRodWIgbG9nbyc7XG4gICAgZ2l0aHViTGluay5hcHBlbmQoZ2l0aHViTG9nbyk7XG4gICAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGdpdGh1YkxpbmspO1xuXG4gICAgY29uc3QgZW1wdHlCYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJhY2tncm91bmQtY29udGFpbmVyJyk7XG4gICAgZW1wdHlCYWNrZ3JvdW5kQ29udGFpbmVyLnJlcGxhY2VXaXRoKGJhY2tncm91bmRDb250YWluZXIpO1xufVxuIiwiY29uc3QgcmVuZGVyTWFpblBhZ2UgPSAoKSA9PiB7XG5cbiAgICAvL0FjdHVhbGx5IG9ubHkgcmVuZGVycyB0aGUgbWFpbiBwYWdlJ3MgXCJmb3JlZ3JvdW5kIGNvbnRhaW5lclwiLiAgXG4gICAgLy9UaGUgaGVhZGVyIGFuZCB0aGUgZm9vdGVyIGRvIG5vdCBuZWVkIHRvIGJlIHJlLXJlbmRlcmVkIHNpbmNlIHRoZXkgXG4gICAgLy90aGUgc2FtZSBmb3IgZXZlcnkgdGFiXG4gICAgY29uc3QgZm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWdyb3VuZC1jb250YWluZXInKTtcbiAgICBjb25zdCBlbmdsaXNoSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGVuZ2xpc2hIMi50ZXh0Q29udGVudCA9ICdUaGUgYmVzdCB0YWNvcyBub3J0aCBvZiB0aGUgYm9yZGVyISc7XG4gICAgY29uc3Qgc3BhbmlzaEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzcGFuaXNoSDIudGV4dENvbnRlbnQgPSAnwqFMb3MgbWVqb3JlcyB0YWNvcyBlbiBlbCBvdHJvIGxhZG8hJztcbiAgICBjb25zdCBmbGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGZsYWdzLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvZmxhZ3MucG5nJztcbiAgICBmbGFncy5hbHQgPSAnYW4gYW1lcmljYW4gZmxhZyBvbiB0aGUgbGVmdCBhbmQgYSBtZXhpY2FuIGZsYWcgb24gdGhlIHJpZ2h0JztcbiAgICBjb25zdCBlbmdsaXNoVmlzaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZW5nbGlzaFZpc2l0LnRleHRDb250ZW50ID0gJ1Zpc2l0IHVzIGFsbCB3ZWVrIGZyb20gNnBtIHRvIDJhbSEnO1xuICAgIGNvbnN0IHNwYW5pc2hWaXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzcGFuaXNoVmlzaXQudGV4dENvbnRlbnQgPSAnIMKhVmlzw610YW5vcyBsdW5lcyBhIGRvbWluZ28gZGUgNnBtIGEgMmFtISAnO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKGVuZ2xpc2hIMiwgc3BhbmlzaEgyLCBmbGFncywgZW5nbGlzaFZpc2l0LCBzcGFuaXNoVmlzaXQpO1xuXG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChmb3JlZ3JvdW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0eWxlID0gYFxuICAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5odG1sIHtcbiAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgZm9udC1zaXplOiAxLjdyZW07XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3RhY28tcGxhbmNoYS5qcGcnKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAtMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXJ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGhlaWdodDogMjB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB1bC50YWJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oZWFkZXIgdWwudGFicyA+IGxpIHtcbiAgcGFkZGluZzogMnJlbTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG59XG5cbmhlYWRlciB1bC50YWJzID4gbGk6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaGVhZGVyIGgxIHtcbiAgZm9udC1zaXplOiA0cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgbWF4LXdpZHRoOiA2NTBweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogM3JlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIGltZyB7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbmZvb3RlciB7XG5mb250LXNpemU6IDEuNXJlbTtcbmhlaWdodDogNXZoO1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmNvbG9yOiB3aGl0ZTtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG53aWR0aDogMTAwJTtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5mb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmNvcHlyaWdodCB7XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMi40cmVtO1xuICB9XG59YDtcblxuICAgIGNvbnN0IGRvY3VtZW50U3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGUnKTtcbiAgICBkb2N1bWVudFN0eWxlcy5pbm5lckhUTUwgPSBzdHlsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1haW5QYWdlO1xuIiwiXG5jb25zdCByZW5kZXJNZW51UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBtZW51IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICBcblxuICAgIGNvbnN0IGNhcm5pdGFzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2Fybml0YXNEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGNhcm5pdGFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2Fybml0YXMuc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9jYXJuaXRhcy5qcGcnO1xuICAgIGNhcm5pdGFzLmFsdCA9ICdjYXJuaXRhcyB0YWNvJztcbiAgICBjb25zdCBjYXJuaXRhc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjYXJuaXRhc0gyLnRleHRDb250ZW50ID0gJ0Nhcm5pdGFzJztcbiAgICBjYXJuaXRhc0Rpdi5hcHBlbmQoY2Fybml0YXMsIGNhcm5pdGFzSDIpO1xuXG4gICAgY29uc3QgY2hvcml6b0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNob3Jpem9EaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGNob3Jpem8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjaG9yaXpvLmFsdCA9ICdjaG9yaXpvIHRhY28nO1xuICAgIGNob3Jpem8uc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9jaG9yaXpvLmpwZyc7XG4gICAgY29uc3QgY2hvcml6b0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjaG9yaXpvSDIudGV4dENvbnRlbnQgPSAnQ2hvcml6byc7XG4gICAgY2hvcml6b0Rpdi5hcHBlbmQoY2hvcml6bywgY2hvcml6b0gyKTtcblxuICAgIGNvbnN0IHN1YWRlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWFkZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBzdWFkZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3VhZGVyby5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3N1YWRlcm8uanBnJztcbiAgICBzdWFkZXJvLmFsdCA9ICdzdWFkZXJvIHRhY28nO1xuICAgIGNvbnN0IHN1YWRlcm9IMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgc3VhZGVyb0gyLnRleHRDb250ZW50ID0gJ1N1YWRlcm8nO1xuICAgIHN1YWRlcm9EaXYuYXBwZW5kKHN1YWRlcm8sIHN1YWRlcm9IMik7XG5cbiAgICBjb25zdCBwb2xsb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvbGxvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBwb2xsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBvbGxvLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvcG9sbG8uanBnJztcbiAgICBwb2xsby5hbHQgPSAncG9sbG8gdGFjbyc7XG4gICAgY29uc3QgcG9sbG9IMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcG9sbG9IMi50ZXh0Q29udGVudCA9ICdQb2xsbyc7XG4gICAgcG9sbG9EaXYuYXBwZW5kKHBvbGxvLCBwb2xsb0gyKTtcblxuICAgIGNvbnN0IHRyaXBhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJpcGFEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IHRyaXBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHJpcGEuc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy90cmlwYS5qcGcnO1xuICAgIHBvbGxvLmFsdCA9ICd0cmlwYSB0YWNvJztcbiAgICBjb25zdCB0cmlwYUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICB0cmlwYUgyLnRleHRDb250ZW50ID0gJ1RyaXBhJztcbiAgICB0cmlwYURpdi5hcHBlbmQodHJpcGEsIHRyaXBhSDIpO1xuXG4gICAgY29uc3QgYWxQYXN0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbFBhc3RvckRpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgYWxQYXN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhbFBhc3Rvci5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL2FsLXBhc3Rvci5qcGcnO1xuICAgIGFsUGFzdG9yLmFsdCA9ICdhbCBwYXN0b3IgdGFjbyc7XG4gICAgY29uc3QgYWxQYXN0b3JIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYWxQYXN0b3JIMi50ZXh0Q29udGVudCA9ICdBbCBQYXN0b3InO1xuICAgIGFsUGFzdG9yRGl2LmFwcGVuZChhbFBhc3RvciwgYWxQYXN0b3JIMik7XG5cbiAgICBjb25zdCBhc2FkYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFzYWRhRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBhc2FkYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFzYWRhLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvYXNhZGEuanBnJztcbiAgICBhc2FkYS5hbHQgPSAnYXNhZGEgdGFjbyc7XG4gICAgY29uc3QgYXNhZGFIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYXNhZGFIMi50ZXh0Q29udGVudCA9ICdBc2FkYSc7XG4gICAgYXNhZGFEaXYuYXBwZW5kKGFzYWRhLCBhc2FkYUgyKTtcblxuICAgIGNvbnN0IGJ1Y2hlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVjaGVEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGJ1Y2hlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnVjaGUuc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9idWNoZS5wbmcnO1xuICAgIGJ1Y2hlLmFsdCA9ICdidWNoZSB0YWNvJztcbiAgICBjb25zdCBidWNoZUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBidWNoZUgyLnRleHRDb250ZW50ID0gJ0J1Y2hlJztcbiAgICBidWNoZURpdi5hcHBlbmQoYnVjaGUsIGJ1Y2hlSDIpO1xuXG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5hcHBlbmQoY2Fybml0YXNEaXYsIGNob3Jpem9EaXYsIHN1YWRlcm9EaXYsIHBvbGxvRGl2LCB0cmlwYURpdiwgYWxQYXN0b3JEaXYsIGFzYWRhRGl2LCBidWNoZURpdik7XG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChmb3JlZ3JvdW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0eWxlID0gYCAgICAgKiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICBodG1sIHtcbiAgICAgICAgZm9udC1zaXplOiA2Mi41JTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgIH1cblxuICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgIC5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3RhY28tcGxhbmNoYS5qcGcnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgaGVhZGVye1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBoZWlnaHQ6IDIwdmg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGhlYWRlciB1bC50YWJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgIGhlYWRlciB1bC50YWJzID4gbGkge1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG5cbiAgICBoZWFkZXIgdWwudGFicyA+IGxpOmhvdmVyIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICBhbGlnbi1pdGVtczogc3BhY2UtZXZlbmx5O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAycmVtO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIH1cblxuICAgIC50YWNvIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgbWFyZ2luOiAycmVtO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzO1xuICAgIH1cblxuICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBpbWcge1xuXG4gICAgICAgIG1heC13aWR0aDogNTAwO1xuICAgICAgICBtYXgtaGVpZ2h0OiA1MDA7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG1hcmdpbjogM3JlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICB9XG5cbiAgICBmb290ZXIge1xuICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICBoZWlnaHQ6IDV2aDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICAud2hpdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTApXG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAgICAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAgICAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICBgO1xuXG4gICAgY29uc3QgZG9jdW1lbnRTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgIGRvY3VtZW50U3R5bGVzLmlubmVySFRNTCA9IHN0eWxlO1xuXG4gICAgY29uc3QgdGFjb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudGFjbycpO1xuICAgIGZvciAobGV0IHRhY28gb2YgdGFjb3MpIHtcbiAgICAgICAgdGFjby5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBtYWtlRGl2V2hpdGUpO1xuICAgICAgICB0YWNvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgbWFrZURpdkJsYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRGl2V2hpdGUoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnd2hpdGUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWtlRGl2QmxhY2soKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnd2hpdGUnKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51UGFnZTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHJlbmRlck1haW5QYWdlIGZyb20gJy4vbWFpbi1wYWdlJztcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tICcuL21lbnUtcGFnZSc7XG5pbXBvcnQgcmVuZGVyQ29udGFjdFBhZ2UgZnJvbSAnLi9jb250YWN0LXBhZ2UnO1xuaW1wb3J0IHJlbmRlckhlYWRlckFuZEZvb3RlciBmcm9tICcuL2hlYWRlci1hbmQtZm9vdGVyJztcblxuXG5yZW5kZXJIZWFkZXJBbmRGb290ZXIoKTtcbnJlbmRlck1haW5QYWdlKCk7XG5cbmxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndWwudGFicycpO1xudGFicy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5UYWIpO1xuXG5mdW5jdGlvbiBvcGVuVGFiKGUpIHtcbiAgICBzd2l0Y2ggKGUudGFyZ2V0LmNsYXNzTmFtZSkge1xuICAgIGNhc2UgJ2hvbWUnOlxuICAgICAgICByZW5kZXJNYWluUGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdtZW51JzpcbiAgICAgICAgcmVuZGVyTWVudVBhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29udGFjdCc6XG4gICAgICAgIHJlbmRlckNvbnRhY3RQYWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9