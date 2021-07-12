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
    phoneH2.textContent = "561-123-3456";
    const phoneSpan = document.createElement('span');
    phoneSpan.textContent = "Phone:";
    phoneH2.prepend(phoneSpan);
    const addressH2 = document.createElement('h2');
    addressH2.textContent = " On the beach at the end of S 39th St in Mexico Beach, FL, 32456";
    const addressSpan = document.createElement('span');
    addressSpan.textContent = "Address:";
    addressH2.prepend(addressSpan);
    const map = document.createElement('img');
    map.src = "/restaurant/images/mexico-beach.png";
    foregroundContainer.append(phoneH2,addressH2,map);


 

    const emptyForegroundContainer = document.querySelector(".foreground-container");
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

  const documentStyles = document.querySelector("style");
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
  englishH2.textContent = "The best tacos north of the border!";
  const spanishH2 = document.createElement('h2');
  spanishH2.textContent = "¡Los mejores tacos en el otro lado!";
  const flags = document.createElement('img');
  flags.src = "/restaurant/images/flags.png";
  flags.alt = "an american flag on the left and a mexican flag on the right";
  const englishVisit = document.createElement('p');
  englishVisit.textContent = "Visit us all week from 6pm to 2am!";
  const spanishVisit = document.createElement('p');
  spanishVisit.textContent = " ¡Visítanos lunes a domingo de 6pm a 2am! ";
  foregroundContainer.append(englishH2, spanishH2, flags, englishVisit, spanishVisit);

 
  
  const emptyForegroundContainer = document.querySelector(".foreground-container");
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

  const documentStyles = document.querySelector("style");
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
    carnitas.src = "/restaurant/images/carnitas.jpg";
    carnitas.alt = "carnitas taco";
    const carnitasH2 = document.createElement('h2');
    carnitasH2.textContent = 'Carnitas';
    carnitasDiv.append(carnitas, carnitasH2);

    const chorizoDiv = document.createElement('div');
    chorizoDiv.classList.add('taco');
    const chorizo = document.createElement('img');
    chorizo.alt = "chorizo taco";
    chorizo.src = '/restaurant/images/chorizo.jpg';
    const chorizoH2 = document.createElement('h2');
    chorizoH2.textContent = 'Chorizo';
    chorizoDiv.append(chorizo, chorizoH2);

    const suaderoDiv = document.createElement('div');
    suaderoDiv.classList.add('taco');
    const suadero = document.createElement('img');
    suadero.src = "/restaurant/images/suadero.jpg";
    suadero.alt = "suadero taco";
    const suaderoH2 = document.createElement('h2');
    suaderoH2.textContent = "Suadero";
    suaderoDiv.append(suadero, suaderoH2);

    const polloDiv = document.createElement('div');
    polloDiv.classList.add('taco');
    const pollo = document.createElement('img');
    pollo.src = "/restaurant/images/pollo.jpg";
    pollo.alt = "pollo taco";
    const polloH2 = document.createElement('h2');
    polloH2.textContent = "Pollo";
    polloDiv.append(pollo, polloH2);

    const tripaDiv = document.createElement('div');
    tripaDiv.classList.add('taco');
    const tripa = document.createElement('img');
    tripa.src = "/restaurant/images/tripa.jpg";
    pollo.alt = "tripa taco";
    const tripaH2 = document.createElement('h2');
    tripaH2.textContent = "Tripa";
    tripaDiv.append(tripa, tripaH2);

    const alPastorDiv = document.createElement('div');
    alPastorDiv.classList.add('taco');
    const alPastor = document.createElement('img');
    alPastor.src = "/restaurant/images/al-pastor.jpg";
    alPastor.alt = "al pastor taco";
    const alPastorH2 = document.createElement('h2');
    alPastorH2.textContent = "Al Pastor";
    alPastorDiv.append(alPastor, alPastorH2);

    const asadaDiv = document.createElement('div');
    asadaDiv.classList.add('taco');
    const asada = document.createElement('img');
    asada.src = "/restaurant/images/asada.jpg";
    asada.alt = "asada taco";
    const asadaH2 = document.createElement('h2');
    asadaH2.textContent = "Asada";
    asadaDiv.append(asada, asadaH2);

    const bucheDiv = document.createElement('div');
    bucheDiv.classList.add('taco');
    const buche = document.createElement('img');
    buche.src = "/restaurant/images/buche.png";
    buche.alt = "buche taco";
    const bucheH2 = document.createElement('h2');
    bucheH2.textContent = "Buche";
    bucheDiv.append(buche, bucheH2);

    foregroundContainer.append(carnitasDiv, chorizoDiv, suaderoDiv, polloDiv, tripaDiv, alPastorDiv, asadaDiv, bucheDiv);


    const emptyForegroundContainer = document.querySelector(".foreground-container");
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

  const documentStyles = document.querySelector("style");
  documentStyles.innerHTML = style;

  const tacos = document.querySelectorAll("div.taco");
  for (let taco of tacos) {
    taco.addEventListener("mouseover", makeDivWhite);
    taco.addEventListener("mouseout", makeDivBlack);
  }

  function makeDivWhite() {
    this.classList.add("white");
  }

  function makeDivBlack() {
    this.classList.remove("white");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4tcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUN0S2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSjlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzNQOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNBO0FBQ007OztBQUcvQztBQUNBLG1EQUFjOztBQUVkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQjtBQUNBO0FBQ0EsTUFBTSxtREFBYztBQUNwQjtBQUNBO0FBQ0EsTUFBTSxzREFBaUI7QUFDdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCByZW5kZXJDb250YWN0UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBjb250YWN0IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgcGhvbmVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGhvbmVIMi50ZXh0Q29udGVudCA9IFwiNTYxLTEyMy0zNDU2XCI7XG4gICAgY29uc3QgcGhvbmVTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHBob25lU3Bhbi50ZXh0Q29udGVudCA9IFwiUGhvbmU6XCI7XG4gICAgcGhvbmVIMi5wcmVwZW5kKHBob25lU3Bhbik7XG4gICAgY29uc3QgYWRkcmVzc0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhZGRyZXNzSDIudGV4dENvbnRlbnQgPSBcIiBPbiB0aGUgYmVhY2ggYXQgdGhlIGVuZCBvZiBTIDM5dGggU3QgaW4gTWV4aWNvIEJlYWNoLCBGTCwgMzI0NTZcIjtcbiAgICBjb25zdCBhZGRyZXNzU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBhZGRyZXNzU3Bhbi50ZXh0Q29udGVudCA9IFwiQWRkcmVzczpcIjtcbiAgICBhZGRyZXNzSDIucHJlcGVuZChhZGRyZXNzU3Bhbik7XG4gICAgY29uc3QgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgbWFwLnNyYyA9IFwiL3Jlc3RhdXJhbnQvaW1hZ2VzL21leGljby1iZWFjaC5wbmdcIjtcbiAgICBmb3JlZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChwaG9uZUgyLGFkZHJlc3NIMixtYXApO1xuXG5cbiBcblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWdyb3VuZC1jb250YWluZXJcIik7XG4gICAgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyLnJlcGxhY2VXaXRoKGZvcmVncm91bmRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBgXG4gICAgKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbn1cblxuaHRtbCB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxucCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBmb250LXNpemU6IDJyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgbWFyZ2luOiAxcmVtO1xuXG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciBzcGFuIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5iYWNrZ3JvdW5kLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvcmVzdGF1cmFudC9pbWFnZXMvdGFjby1wbGFuY2hhLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogLTE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5oZWFkZXJ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGhlaWdodDogMjB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIgdWwudGFicyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5oZWFkZXIgdWwudGFicyA+IGxpIHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xufVxuXG5oZWFkZXIgdWwudGFicyA+IGxpOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuaGVhZGVyIGgxIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG59XG5cbi5mb3JlZ3JvdW5kLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICAgIG1heC13aWR0aDogNTcwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtIDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZWVuO1xufVxuXG5mb290ZXIge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgaGVpZ2h0OiA1dmg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuN3JlbTtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0NTBweCkge1xuICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpIHtcbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICB9XG59XG5cblxuYDtcblxuICBjb25zdCBkb2N1bWVudFN0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVwiKTtcbiAgZG9jdW1lbnRTdHlsZXMuaW5uZXJIVE1MID0gc3R5bGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0UGFnZTtcbiIsImNvbnN0IHJlbmRlck1haW5QYWdlID0gKCkgPT4ge1xuXG4gIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBtYWluIHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgLy9UaGUgaGVhZGVyIGFuZCB0aGUgZm9vdGVyIGRvIG5vdCBuZWVkIHRvIGJlIHJlLXJlbmRlcmVkIHNpbmNlIHRoZXkgXG4gIC8vdGhlIHNhbWUgZm9yIGV2ZXJ5IHRhYlxuICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGZvcmVncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9yZWdyb3VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZW5nbGlzaEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgZW5nbGlzaEgyLnRleHRDb250ZW50ID0gXCJUaGUgYmVzdCB0YWNvcyBub3J0aCBvZiB0aGUgYm9yZGVyIVwiO1xuICBjb25zdCBzcGFuaXNoSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzcGFuaXNoSDIudGV4dENvbnRlbnQgPSBcIsKhTG9zIG1lam9yZXMgdGFjb3MgZW4gZWwgb3RybyBsYWRvIVwiO1xuICBjb25zdCBmbGFncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBmbGFncy5zcmMgPSBcIi9yZXN0YXVyYW50L2ltYWdlcy9mbGFncy5wbmdcIjtcbiAgZmxhZ3MuYWx0ID0gXCJhbiBhbWVyaWNhbiBmbGFnIG9uIHRoZSBsZWZ0IGFuZCBhIG1leGljYW4gZmxhZyBvbiB0aGUgcmlnaHRcIjtcbiAgY29uc3QgZW5nbGlzaFZpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBlbmdsaXNoVmlzaXQudGV4dENvbnRlbnQgPSBcIlZpc2l0IHVzIGFsbCB3ZWVrIGZyb20gNnBtIHRvIDJhbSFcIjtcbiAgY29uc3Qgc3BhbmlzaFZpc2l0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzcGFuaXNoVmlzaXQudGV4dENvbnRlbnQgPSBcIiDCoVZpc8OtdGFub3MgbHVuZXMgYSBkb21pbmdvIGRlIDZwbSBhIDJhbSEgXCI7XG4gIGZvcmVncm91bmRDb250YWluZXIuYXBwZW5kKGVuZ2xpc2hIMiwgc3BhbmlzaEgyLCBmbGFncywgZW5nbGlzaFZpc2l0LCBzcGFuaXNoVmlzaXQpO1xuXG4gXG4gIFxuICBjb25zdCBlbXB0eUZvcmVncm91bmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVncm91bmQtY29udGFpbmVyXCIpO1xuICBlbXB0eUZvcmVncm91bmRDb250YWluZXIucmVwbGFjZVdpdGgoZm9yZWdyb3VuZENvbnRhaW5lcik7XG5cbiAgY29uc3Qgc3R5bGUgPSBgXG4gICoge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmh0bWwge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICBmb250LXNpemU6IDEuN3JlbTtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvcmVzdGF1cmFudC9pbWFnZXMvdGFjby1wbGFuY2hhLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IC0xO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbmhlYWRlcntcbiAgY29sb3I6IHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgaGVpZ2h0OiAyMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaGVhZGVyIHVsLnRhYnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmhlYWRlciB1bC50YWJzID4gbGkge1xuICBwYWRkaW5nOiAycmVtO1xuICBmb250LXNpemU6IDIuNXJlbTtcbn1cblxuaGVhZGVyIHVsLnRhYnMgPiBsaTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5oZWFkZXIgaDEge1xuICBmb250LXNpemU6IDRyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLmZvcmVncm91bmQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICBtYXgtd2lkdGg6IDY1MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAxMDB2dztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAzcmVtO1xufVxuXG4uZm9yZWdyb3VuZC1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAzMDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuZm9vdGVyIHtcbmZvbnQtc2l6ZTogMS41cmVtO1xuaGVpZ2h0OiA1dmg7XG5mbGV4LWRpcmVjdGlvbjogcm93O1xuY29sb3I6IHdoaXRlO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogY2VudGVyO1xuYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjYwKTtcbndpZHRoOiAxMDAlO1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmZvbnQtc2l6ZTogMS43cmVtO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICBmb250LXNpemU6IDJyZW07XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MDBweCkge1xuICAuZm9yZWdyb3VuZC1jb250YWluZXIgaDIsIHAge1xuICAgICAgZm9udC1zaXplOiAyLjRyZW07XG4gIH1cbn1gO1xuXG4gIGNvbnN0IGRvY3VtZW50U3R5bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpO1xuICBkb2N1bWVudFN0eWxlcy5pbm5lckhUTUwgPSBzdHlsZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1haW5QYWdlO1xuIiwiXG5jb25zdCByZW5kZXJNZW51UGFnZSA9ICgpID0+IHtcblxuICAgIC8vQWN0dWFsbHkgb25seSByZW5kZXJzIHRoZSBtZW51IHBhZ2UncyBcImZvcmVncm91bmQgY29udGFpbmVyXCIuICBcbiAgICAvL1RoZSBoZWFkZXIgYW5kIHRoZSBmb290ZXIgZG8gbm90IG5lZWQgdG8gYmUgcmUtcmVuZGVyZWQgc2luY2UgdGhleSBcbiAgICAvL3RoZSBzYW1lIGZvciBldmVyeSB0YWJcbiAgICBjb25zdCBmb3JlZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JlZ3JvdW5kLWNvbnRhaW5lcicpO1xuICBcblxuICAgIGNvbnN0IGNhcm5pdGFzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2Fybml0YXNEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGNhcm5pdGFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2Fybml0YXMuc3JjID0gXCIvcmVzdGF1cmFudC9pbWFnZXMvY2Fybml0YXMuanBnXCI7XG4gICAgY2Fybml0YXMuYWx0ID0gXCJjYXJuaXRhcyB0YWNvXCI7XG4gICAgY29uc3QgY2Fybml0YXNIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY2Fybml0YXNIMi50ZXh0Q29udGVudCA9ICdDYXJuaXRhcyc7XG4gICAgY2Fybml0YXNEaXYuYXBwZW5kKGNhcm5pdGFzLCBjYXJuaXRhc0gyKTtcblxuICAgIGNvbnN0IGNob3Jpem9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjaG9yaXpvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBjaG9yaXpvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY2hvcml6by5hbHQgPSBcImNob3Jpem8gdGFjb1wiO1xuICAgIGNob3Jpem8uc3JjID0gJy9yZXN0YXVyYW50L2ltYWdlcy9jaG9yaXpvLmpwZyc7XG4gICAgY29uc3QgY2hvcml6b0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjaG9yaXpvSDIudGV4dENvbnRlbnQgPSAnQ2hvcml6byc7XG4gICAgY2hvcml6b0Rpdi5hcHBlbmQoY2hvcml6bywgY2hvcml6b0gyKTtcblxuICAgIGNvbnN0IHN1YWRlcm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdWFkZXJvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBzdWFkZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3VhZGVyby5zcmMgPSBcIi9yZXN0YXVyYW50L2ltYWdlcy9zdWFkZXJvLmpwZ1wiO1xuICAgIHN1YWRlcm8uYWx0ID0gXCJzdWFkZXJvIHRhY29cIjtcbiAgICBjb25zdCBzdWFkZXJvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHN1YWRlcm9IMi50ZXh0Q29udGVudCA9IFwiU3VhZGVyb1wiO1xuICAgIHN1YWRlcm9EaXYuYXBwZW5kKHN1YWRlcm8sIHN1YWRlcm9IMik7XG5cbiAgICBjb25zdCBwb2xsb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBvbGxvRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBwb2xsbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHBvbGxvLnNyYyA9IFwiL3Jlc3RhdXJhbnQvaW1hZ2VzL3BvbGxvLmpwZ1wiO1xuICAgIHBvbGxvLmFsdCA9IFwicG9sbG8gdGFjb1wiO1xuICAgIGNvbnN0IHBvbGxvSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIHBvbGxvSDIudGV4dENvbnRlbnQgPSBcIlBvbGxvXCI7XG4gICAgcG9sbG9EaXYuYXBwZW5kKHBvbGxvLCBwb2xsb0gyKTtcblxuICAgIGNvbnN0IHRyaXBhRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdHJpcGFEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IHRyaXBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgdHJpcGEuc3JjID0gXCIvcmVzdGF1cmFudC9pbWFnZXMvdHJpcGEuanBnXCI7XG4gICAgcG9sbG8uYWx0ID0gXCJ0cmlwYSB0YWNvXCI7XG4gICAgY29uc3QgdHJpcGFIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdHJpcGFIMi50ZXh0Q29udGVudCA9IFwiVHJpcGFcIjtcbiAgICB0cmlwYURpdi5hcHBlbmQodHJpcGEsIHRyaXBhSDIpO1xuXG4gICAgY29uc3QgYWxQYXN0b3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhbFBhc3RvckRpdi5jbGFzc0xpc3QuYWRkKCd0YWNvJyk7XG4gICAgY29uc3QgYWxQYXN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBhbFBhc3Rvci5zcmMgPSBcIi9yZXN0YXVyYW50L2ltYWdlcy9hbC1wYXN0b3IuanBnXCI7XG4gICAgYWxQYXN0b3IuYWx0ID0gXCJhbCBwYXN0b3IgdGFjb1wiO1xuICAgIGNvbnN0IGFsUGFzdG9ySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFsUGFzdG9ySDIudGV4dENvbnRlbnQgPSBcIkFsIFBhc3RvclwiO1xuICAgIGFsUGFzdG9yRGl2LmFwcGVuZChhbFBhc3RvciwgYWxQYXN0b3JIMik7XG5cbiAgICBjb25zdCBhc2FkYURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFzYWRhRGl2LmNsYXNzTGlzdC5hZGQoJ3RhY28nKTtcbiAgICBjb25zdCBhc2FkYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFzYWRhLnNyYyA9IFwiL3Jlc3RhdXJhbnQvaW1hZ2VzL2FzYWRhLmpwZ1wiO1xuICAgIGFzYWRhLmFsdCA9IFwiYXNhZGEgdGFjb1wiO1xuICAgIGNvbnN0IGFzYWRhSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGFzYWRhSDIudGV4dENvbnRlbnQgPSBcIkFzYWRhXCI7XG4gICAgYXNhZGFEaXYuYXBwZW5kKGFzYWRhLCBhc2FkYUgyKTtcblxuICAgIGNvbnN0IGJ1Y2hlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnVjaGVEaXYuY2xhc3NMaXN0LmFkZCgndGFjbycpO1xuICAgIGNvbnN0IGJ1Y2hlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYnVjaGUuc3JjID0gXCIvcmVzdGF1cmFudC9pbWFnZXMvYnVjaGUucG5nXCI7XG4gICAgYnVjaGUuYWx0ID0gXCJidWNoZSB0YWNvXCI7XG4gICAgY29uc3QgYnVjaGVIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgYnVjaGVIMi50ZXh0Q29udGVudCA9IFwiQnVjaGVcIjtcbiAgICBidWNoZURpdi5hcHBlbmQoYnVjaGUsIGJ1Y2hlSDIpO1xuXG4gICAgZm9yZWdyb3VuZENvbnRhaW5lci5hcHBlbmQoY2Fybml0YXNEaXYsIGNob3Jpem9EaXYsIHN1YWRlcm9EaXYsIHBvbGxvRGl2LCB0cmlwYURpdiwgYWxQYXN0b3JEaXYsIGFzYWRhRGl2LCBidWNoZURpdik7XG5cblxuICAgIGNvbnN0IGVtcHR5Rm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWdyb3VuZC1jb250YWluZXJcIik7XG4gICAgZW1wdHlGb3JlZ3JvdW5kQ29udGFpbmVyLnJlcGxhY2VXaXRoKGZvcmVncm91bmRDb250YWluZXIpO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBgICAgICAqIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIGh0bWwge1xuICAgICAgICBmb250LXNpemU6IDYyLjUlO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxuXG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGgyLCBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjdyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLmJhY2tncm91bmQtY29udGFpbmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvcmVzdGF1cmFudC9pbWFnZXMvdGFjby1wbGFuY2hhLmpwZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICBoZWFkZXJ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGhlaWdodDogMjB2aDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHVsLnRhYnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgaGVhZGVyIHVsLnRhYnMgPiBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cblxuICAgIGhlYWRlciB1bC50YWJzID4gbGk6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG5cbiAgICBoZWFkZXIgaDEge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICB9XG5cbiAgICAuZm9yZWdyb3VuZC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzcGFjZS1ldmVubHk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDJyZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgfVxuXG4gICAgLnRhY28ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNjApO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICBtYXJnaW46IDJyZW07XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXM7XG4gICAgfVxuXG4gICAgLmZvcmVncm91bmQtY29udGFpbmVyIGltZyB7XG5cbiAgICAgICAgbWF4LXdpZHRoOiA1MDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMDtcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luOiAzcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cblxuICAgIGZvb3RlciB7XG4gICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgIGhlaWdodDogNXZoO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC42MCk7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBmb250LXNpemU6IDEuN3JlbTtcbiAgICB9XG5cbiAgICAuY29weXJpZ2h0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIC53aGl0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMClcbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDkwMHB4KSB7XG4gICAgICAgIC5mb3JlZ3JvdW5kLWNvbnRhaW5lciBoMiwgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIuNHJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgIGA7XG5cbiAgY29uc3QgZG9jdW1lbnRTdHlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwic3R5bGVcIik7XG4gIGRvY3VtZW50U3R5bGVzLmlubmVySFRNTCA9IHN0eWxlO1xuXG4gIGNvbnN0IHRhY29zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImRpdi50YWNvXCIpO1xuICBmb3IgKGxldCB0YWNvIG9mIHRhY29zKSB7XG4gICAgdGFjby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdmVyXCIsIG1ha2VEaXZXaGl0ZSk7XG4gICAgdGFjby5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgbWFrZURpdkJsYWNrKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VEaXZXaGl0ZSgpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJ3aGl0ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1ha2VEaXZCbGFjaygpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoXCJ3aGl0ZVwiKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTWVudVBhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCByZW5kZXJNYWluUGFnZSBmcm9tIFwiLi9tYWluLXBhZ2VcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51LXBhZ2VcIjtcbmltcG9ydCByZW5kZXJDb250YWN0UGFnZSBmcm9tIFwiLi9jb250YWN0LXBhZ2VcIjtcblxuXG5yZW5kZXJIZWFkZXJBbmRGb290ZXIoKTtcbnJlbmRlck1haW5QYWdlKCk7XG5cbmxldCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInVsLnRhYnNcIik7XG50YWJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBvcGVuVGFiKTtcblxuZnVuY3Rpb24gb3BlblRhYihlKSB7XG4gIHN3aXRjaCAoZS50YXJnZXQuY2xhc3NOYW1lKSB7XG4gICAgY2FzZSBcImhvbWVcIjpcbiAgICAgIHJlbmRlck1haW5QYWdlKCk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwibWVudVwiOlxuICAgICAgcmVuZGVyTWVudVBhZ2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICByZW5kZXJDb250YWN0UGFnZSgpO1xuICAgICAgYnJlYWs7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVuZGVySGVhZGVyQW5kRm9vdGVyKCkge1xuICBjb25zdCBiYWNrZ3JvdW5kQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJhY2tncm91bmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZC1jb250YWluZXInKTtcbiAgY29uc3QgZm9yZWdyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBmb3JlZ3JvdW5kQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ZvcmVncm91bmQtY29udGFpbmVyJyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHNwYW4uc3R5bGUuY29sb3IgPSBcInJlZFwiO1xuICBzcGFuLmlubmVyVGV4dCA9IFwiRWwgXCI7XG4gIGNvbnN0IGdyaVNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGdyaVNwYW4uc3R5bGUuY29sb3IgPSAnd2hpdGUnO1xuICBncmlTcGFuLmlubmVyVGV4dCA9ICdHcmknO1xuICBjb25zdCBuZ29TcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBuZ29TcGFuLnN0eWxlLmNvbG9yID0gJ2JsdWUnO1xuICBuZ29TcGFuLmlubmVyVGV4dCA9IFwibmdvJ3MgXCI7XG4gIGNvbnN0IG1leGlTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBtZXhpU3Bhbi5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gIG1leGlTcGFuLmlubmVyVGV4dCA9ICdNRVhJJztcbiAgY29uc3QgY2FuU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2FuU3Bhbi5zdHlsZS5jb2xvciA9ICd3aGl0ZSc7XG4gIGNhblNwYW4uaW5uZXJUZXh0ID0gJ0NBTiAnO1xuICBjb25zdCB0YWNvc1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRhY29zU3Bhbi5zdHlsZS5jb2xvciA9ICdyZWQnO1xuICB0YWNvc1NwYW4uaW5uZXJUZXh0ID0gJ1RhY29zJztcbiAgaDEuYXBwZW5kKHNwYW4sIGdyaVNwYW4sIG5nb1NwYW4sIG1leGlTcGFuLCBjYW5TcGFuLHRhY29zU3Bhbik7XG4gIGNvbnN0IHRhYnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0YWJzLmNsYXNzTGlzdC5hZGQoJ3RhYnMnKTtcbiAgaGVhZGVyLmFwcGVuZChoMSwgdGFicyk7XG4gIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBob21lLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKTtcbiAgaG9tZS50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1lbnUudGV4dENvbnRlbnQgPSAnTWVudSc7XG4gIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29udGFjdC5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gIGNvbnRhY3QudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG4gIHRhYnMuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjb3B5cmlnaHQuY2xhc3NMaXN0LmFkZCgnY29weXJpZ2h0Jyk7XG4gIGNvcHlyaWdodC50ZXh0Q29udGVudCA9IFwiQ29weXJpZ2h0IMKpIDIwMjEgbWF0dGRpbWljZWxsaVwiO1xuICBiYWNrZ3JvdW5kQ29udGFpbmVyLmFwcGVuZChoZWFkZXIsIGZvcmVncm91bmRDb250YWluZXIsIGZvb3Rlcik7XG4gIGNvbnN0IGdpdGh1YkxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gIGdpdGh1YkxpbmsuaHJlZiA9IFwiaHR0cHM6Ly9naXRodWIuY29tL21hdHRkaW1pY2VsbGlcIjtcbiAgY29uc3QgZ2l0aHViTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBnaXRodWJMb2dvLnNyYyA9IFwiL3Jlc3RhdXJhbnQvaW1hZ2VzL0dpdEh1Yi1NYXJrLTMycHgucG5nXCI7XG4gIGdpdGh1YkxvZ28uYWx0ID0gXCJnaXRodWIgbG9nb1wiO1xuICBnaXRodWJMaW5rLmFwcGVuZChnaXRodWJMb2dvKTtcbiAgZm9vdGVyLmFwcGVuZChjb3B5cmlnaHQsIGdpdGh1YkxpbmspO1xuXG4gIGNvbnN0IGVtcHR5QmFja2dyb3VuZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmFja2dyb3VuZC1jb250YWluZXJcIik7XG4gIGVtcHR5QmFja2dyb3VuZENvbnRhaW5lci5yZXBsYWNlV2l0aChiYWNrZ3JvdW5kQ29udGFpbmVyKTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==