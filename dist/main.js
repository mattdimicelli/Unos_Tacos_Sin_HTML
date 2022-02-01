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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hlYWRlci1hbmQtZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWVudS1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RLbEI7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSjlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzNQOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDQTtBQUNNO0FBQ1M7OztBQUd4RCwyREFBcUI7QUFDckIsbURBQWM7O0FBRWQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG1EQUFjO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLG1EQUFjO0FBQ3RCO0FBQ0E7QUFDQSxRQUFRLHNEQUFpQjtBQUN6QjtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCByZW5kZXJDb250YWN0UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBjb250YWN0IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGhvbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIMi50ZXh0Q29udGVudCA9ICc1NjEtMTIzLTM0NTYnO1xuICAgIGNvbnN0IHBob25lU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBwaG9uZVNwYW4udGV4dENvbnRlbnQgPSAnUGhvbmU6JztcbiAgICBwaG9uZUgyLnByZXBlbmQocGhvbmVTcGFuKTtcbiAgICBjb25zdCBhZGRyZXNzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFkZHJlc3NIMi50ZXh0Q29udGVudCA9ICcgT24gdGhlIGJlYWNoIGF0IHRoZSBlbmQgb2YgUyAzOXRoIFN0IGluIE1leGljbyBCZWFjaCwgRkwsIDMyNDU2JztcbiAgICBjb25zdCBhZGRyZXNzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRyZXNzU3Bhbi50ZXh0Q29udGVudCA9ICdBZGRyZXNzOic7XG4gICAgYWRkcmVzc0gyLnByZXBlbmQoYWRkcmVzc1NwYW4pO1xuICAgIGNvbnN0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcC5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL21leGljby1iZWFjaC5wbmcnO1xuICAgIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKHBob25lSDIsIGFkZHJlc3NIMiwgbWFwKTtcblxuXG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChmb3JlZ3JvdW5kQ29udGFpbmVyKTtcblxuICAgIGNvbnN0IHN0eWxlID0gYFxuICAgICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICAgIGZvbnQtc2l6ZTogNjIuNSU7XG59XG5cbnAge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgIGZvbnQtc2l6ZTogMS43cmVtO1xuICAgIG1hcmdpbjogMXJlbTtcblxufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4uYmFja2dyb3VuZC1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3RhY28tcGxhbmNoYS5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuaGVhZGVye1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBoZWlnaHQ6IDIwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHVsLnRhYnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaSB7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbmhlYWRlciBoMSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbiAgICBtYXgtd2lkdGg6IDU3MHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnJlbSAwO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbn1cblxuZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGhlaWdodDogNXZoO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjdyZW07XG59XG5cbi5jb3B5cmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gICAgfVxufVxuXG5cbmA7XG5cbiAgICBjb25zdCBkb2N1bWVudFN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgZG9jdW1lbnRTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0UGFnZTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlbmRlckhlYWRlckFuZEZvb3RlcigpIHtcbiAgICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFja2dyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdiYWNrZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICAgIHNwYW4uaW5uZXJUZXh0ID0gJ0VsICc7XG4gICAgY29uc3QgZ3JpU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBncmlTcGFuLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcbiAgICBncmlTcGFuLmlubmVyVGV4dCA9ICdHcmknO1xuICAgIGNvbnN0IG5nb1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbmdvU3Bhbi5zdHlsZS5jb2xvciA9ICdibHVlJztcbiAgICBuZ29TcGFuLmlubmVyVGV4dCA9ICduZ29cXCdzICc7XG4gICAgY29uc3QgbWV4aVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbWV4aVNwYW4uc3R5bGUuY29sb3IgPSAnZ3JlZW4nO1xuICAgIG1leGlTcGFuLmlubmVyVGV4dCA9ICdNRVhJJztcbiAgICBjb25zdCBjYW5TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNhblNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICAgIGNhblNwYW4uaW5uZXJUZXh0ID0gJ0NBTiAnO1xuICAgIGNvbnN0IHRhY29zU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0YWNvc1NwYW4uc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB0YWNvc1NwYW4uaW5uZXJUZXh0ID0gJ1RhY29zJztcbiAgICBoMS5hcHBlbmQoc3BhbiwgZ3JpU3BhbiwgbmdvU3BhbiwgbWV4aVNwYW4sIGNhblNwYW4sdGFjb3NTcGFuKTtcbiAgICBjb25zdCB0YWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgICBoZWFkZXIuYXBwZW5kKGgxLCB0YWJzKTtcbiAgICBjb25zdCBob21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgICBob21lLnRleHRDb250ZW50ID0gJ0hvbWUnO1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgY29udGFjdC50ZXh0Q29udGVudCA9ICdDb250YWN0JztcbiAgICB0YWJzLmFwcGVuZChob21lLCBtZW51LCBjb250YWN0KTtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgICBjb25zdCBjb3B5cmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29weXJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2NvcHlyaWdodCcpO1xuICAgIGNvcHlyaWdodC50ZXh0Q29udGVudCA9ICdDb3B5cmlnaHQgwqkgMjAyMSBtYXR0ZGltaWNlbGxpJztcbiAgICBiYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGZvcmVncm91bmRDb250YWluZXIsIGZvb3Rlcik7XG4gICAgY29uc3QgZ2l0aHViTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRodWJMaW5rLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL21hdHRkaW1pY2VsbGknO1xuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBnaXRodWJMb2dvLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvR2l0SHViLU1hcmstMzJweC5wbmcnO1xuICAgIGdpdGh1YkxvZ28uYWx0ID0gJ2dpdGh1YiBsb2dvJztcbiAgICBnaXRodWJMaW5rLmFwcGVuZChnaXRodWJMb2dvKTtcbiAgICBmb290ZXIuYXBwZW5kKGNvcHlyaWdodCwgZ2l0aHViTGluayk7XG5cbiAgICBjb25zdCBlbXB0eUJhY2tncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1jb250YWluZXInKTtcbiAgICBlbXB0eUJhY2tncm91bmRDb250YWluZXIucmVwbGFjZVdpdGgoYmFja2dyb3VuZENvbnRhaW5lcik7XG59XG4iLCJjb25zdCByZW5kZXJNYWluUGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBtYWluIHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGVuZ2xpc2hIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgZW5nbGlzaEgyLnRleHRDb250ZW50ID0gJ1RoZSBiZXN0IHRhY29zIG5vcnRoIG9mIHRoZSBib3JkZXIhJztcbiAgICBjb25zdCBzcGFuaXNoSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHNwYW5pc2hIMi50ZXh0Q29udGVudCA9ICfCoUxvcyBtZWpvcmVzIHRhY29zIGVuIGVsIG90cm8gbGFkbyEnO1xuICAgIGNvbnN0IGZsYWdzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgZmxhZ3Muc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9mbGFncy5wbmcnO1xuICAgIGZsYWdzLmFsdCA9ICdhbiBhbWVyaWNhbiBmbGFnIG9uIHRoZSBsZWZ0IGFuZCBhIG1leGljYW4gZmxhZyBvbiB0aGUgcmlnaHQnO1xuICAgIGNvbnN0IGVuZ2xpc2hWaXNpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBlbmdsaXNoVmlzaXQudGV4dENvbnRlbnQgPSAnVmlzaXQgdXMgYWxsIHdlZWsgZnJvbSA2cG0gdG8gMmFtISc7XG4gICAgY29uc3Qgc3BhbmlzaFZpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNwYW5pc2hWaXNpdC50ZXh0Q29udGVudCA9ICcgwqFWaXPDrXRhbm9zIGx1bmVzIGEgZG9taW5nbyBkZSA2cG0gYSAyYW0hICc7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5hcHBlbmQoZW5nbGlzaEgyLCBzcGFuaXNoSDIsIGZsYWdzLCBlbmdsaXNoVmlzaXQsIHNwYW5pc2hWaXNpdCk7XG5cblxuXG4gICAgY29uc3QgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gICAgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyLnJlcGxhY2VXaXRoKGZvcmVncm91bmRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBgXG4gICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvdGFjby1wbGFuY2hhLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHVsLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmhlYWRlciB1bC50YWJzID4gbGkge1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuZm9vdGVyIHtcbmZvbnQtc2l6ZTogMS41cmVtO1xuaGVpZ2h0OiA1dmg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuY29sb3I6IHdoaXRlO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbndpZHRoOiAxMDAlO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gIH1cbn1gO1xuXG4gICAgY29uc3QgZG9jdW1lbnRTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzdHlsZScpO1xuICAgIGRvY3VtZW50U3R5bGVzLmlubmVySFRNTCA9IHN0eWxlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWFpblBhZ2U7XG4iLCJcbmNvbnN0IHJlbmRlck1lbnVQYWdlID0gKCkgPT4ge1xuXG4gICAgLy9BY3R1YWxseSBvbmx5IHJlbmRlcnMgdGhlIG1lbnUgcGFnZSdzIFwiZm9yZWdyb3VuZCBjb250YWluZXJcIi4gIFxuICAgIC8vVGhlIGhlYWRlciBhbmQgdGhlIGZvb3RlciBkbyBub3QgbmVlZCB0byBiZSByZS1yZW5kZXJlZCBzaW5jZSB0aGV5IFxuICAgIC8vdGhlIHNhbWUgZm9yIGV2ZXJ5IHRhYlxuICAgIGNvbnN0IGZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gIFxuXG4gICAgY29uc3QgY2Fybml0YXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJuaXRhc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgY2Fybml0YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBjYXJuaXRhcy5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL2Nhcm5pdGFzLmpwZyc7XG4gICAgY2Fybml0YXMuYWx0ID0gJ2Nhcm5pdGFzIHRhY28nO1xuICAgIGNvbnN0IGNhcm5pdGFzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNhcm5pdGFzSDIudGV4dENvbnRlbnQgPSAnQ2Fybml0YXMnO1xuICAgIGNhcm5pdGFzRGl2LmFwcGVuZChjYXJuaXRhcywgY2Fybml0YXNIMik7XG5cbiAgICBjb25zdCBjaG9yaXpvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hvcml6b0Rpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgY2hvcml6byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNob3Jpem8uYWx0ID0gJ2Nob3Jpem8gdGFjbyc7XG4gICAgY2hvcml6by5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL2Nob3Jpem8uanBnJztcbiAgICBjb25zdCBjaG9yaXpvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNob3Jpem9IMi50ZXh0Q29udGVudCA9ICdDaG9yaXpvJztcbiAgICBjaG9yaXpvRGl2LmFwcGVuZChjaG9yaXpvLCBjaG9yaXpvSDIpO1xuXG4gICAgY29uc3Qgc3VhZGVyb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN1YWRlcm9EaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IHN1YWRlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBzdWFkZXJvLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvc3VhZGVyby5qcGcnO1xuICAgIHN1YWRlcm8uYWx0ID0gJ3N1YWRlcm8gdGFjbyc7XG4gICAgY29uc3Qgc3VhZGVyb0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzdWFkZXJvSDIudGV4dENvbnRlbnQgPSAnU3VhZGVybyc7XG4gICAgc3VhZGVyb0Rpdi5hcHBlbmQoc3VhZGVybywgc3VhZGVyb0gyKTtcblxuICAgIGNvbnN0IHBvbGxvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9sbG9EaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IHBvbGxvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9sbG8uc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9wb2xsby5qcGcnO1xuICAgIHBvbGxvLmFsdCA9ICdwb2xsbyB0YWNvJztcbiAgICBjb25zdCBwb2xsb0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBwb2xsb0gyLnRleHRDb250ZW50ID0gJ1BvbGxvJztcbiAgICBwb2xsb0Rpdi5hcHBlbmQocG9sbG8sIHBvbGxvSDIpO1xuXG4gICAgY29uc3QgdHJpcGFEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0cmlwYURpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgdHJpcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB0cmlwYS5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL3RyaXBhLmpwZyc7XG4gICAgcG9sbG8uYWx0ID0gJ3RyaXBhIHRhY28nO1xuICAgIGNvbnN0IHRyaXBhSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHRyaXBhSDIudGV4dENvbnRlbnQgPSAnVHJpcGEnO1xuICAgIHRyaXBhRGl2LmFwcGVuZCh0cmlwYSwgdHJpcGFIMik7XG5cbiAgICBjb25zdCBhbFBhc3RvckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFsUGFzdG9yRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBhbFBhc3RvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFsUGFzdG9yLnNyYyA9ICcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvYWwtcGFzdG9yLmpwZyc7XG4gICAgYWxQYXN0b3IuYWx0ID0gJ2FsIHBhc3RvciB0YWNvJztcbiAgICBjb25zdCBhbFBhc3RvckgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhbFBhc3RvckgyLnRleHRDb250ZW50ID0gJ0FsIFBhc3Rvcic7XG4gICAgYWxQYXN0b3JEaXYuYXBwZW5kKGFsUGFzdG9yLCBhbFBhc3RvckgyKTtcblxuICAgIGNvbnN0IGFzYWRhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYXNhZGFEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGFzYWRhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYXNhZGEuc3JjID0gJy9Vbm9zX1RhY29zX1Npbl9IVE1ML2ltYWdlcy9hc2FkYS5qcGcnO1xuICAgIGFzYWRhLmFsdCA9ICdhc2FkYSB0YWNvJztcbiAgICBjb25zdCBhc2FkYUgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhc2FkYUgyLnRleHRDb250ZW50ID0gJ0FzYWRhJztcbiAgICBhc2FkYURpdi5hcHBlbmQoYXNhZGEsIGFzYWRhSDIpO1xuXG4gICAgY29uc3QgYnVjaGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidWNoZURpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgYnVjaGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBidWNoZS5zcmMgPSAnL1Vub3NfVGFjb3NfU2luX0hUTUwvaW1hZ2VzL2J1Y2hlLnBuZyc7XG4gICAgYnVjaGUuYWx0ID0gJ2J1Y2hlIHRhY28nO1xuICAgIGNvbnN0IGJ1Y2hlSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGJ1Y2hlSDIudGV4dENvbnRlbnQgPSAnQnVjaGUnO1xuICAgIGJ1Y2hlRGl2LmFwcGVuZChidWNoZSwgYnVjaGVIMik7XG5cbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChjYXJuaXRhc0RpdiwgY2hvcml6b0Rpdiwgc3VhZGVyb0RpdiwgcG9sbG9EaXYsIHRyaXBhRGl2LCBhbFBhc3RvckRpdiwgYXNhZGFEaXYsIGJ1Y2hlRGl2KTtcblxuXG4gICAgY29uc3QgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gICAgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyLnJlcGxhY2VXaXRoKGZvcmVncm91bmRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBgICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvVW5vc19UYWNvc19TaW5fSFRNTC9pbWFnZXMvdGFjby1wbGFuY2hhLmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICBoZWFkZXJ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHVsLnRhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHVsLnRhYnMgPiBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxuICAgIGhlYWRlciB1bC50YWJzID4gbGk6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBoZWFkZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLnRhY28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXM7XG4gICAgfVxuXG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGltZyB7XG5cbiAgICAgICAgbWF4LXdpZHRoOiA1MDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogNXZoO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIC53aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMClcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgIGA7XG5cbiAgICBjb25zdCBkb2N1bWVudFN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlJyk7XG4gICAgZG9jdW1lbnRTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGU7XG5cbiAgICBjb25zdCB0YWNvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi50YWNvJyk7XG4gICAgZm9yIChsZXQgdGFjbyBvZiB0YWNvcykge1xuICAgICAgICB0YWNvLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIG1ha2VEaXZXaGl0ZSk7XG4gICAgICAgIHRhY28uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBtYWtlRGl2QmxhY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VEaXZXaGl0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCd3aGl0ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG1ha2VEaXZCbGFjaygpIHtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCd3aGl0ZScpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnVQYWdlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcmVuZGVyTWFpblBhZ2UgZnJvbSAnLi9tYWluLXBhZ2UnO1xuaW1wb3J0IHJlbmRlck1lbnVQYWdlIGZyb20gJy4vbWVudS1wYWdlJztcbmltcG9ydCByZW5kZXJDb250YWN0UGFnZSBmcm9tICcuL2NvbnRhY3QtcGFnZSc7XG5pbXBvcnQgcmVuZGVySGVhZGVyQW5kRm9vdGVyIGZyb20gJy4vaGVhZGVyLWFuZC1mb290ZXInO1xuXG5cbnJlbmRlckhlYWRlckFuZEZvb3RlcigpO1xucmVuZGVyTWFpblBhZ2UoKTtcblxubGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd1bC50YWJzJyk7XG50YWJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlblRhYik7XG5cbmZ1bmN0aW9uIG9wZW5UYWIoZSkge1xuICAgIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgY2FzZSAnaG9tZSc6XG4gICAgICAgIHJlbmRlck1haW5QYWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICByZW5kZXJNZW51UGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlICdjb250YWN0JzpcbiAgICAgICAgcmVuZGVyQ29udGFjdFBhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=