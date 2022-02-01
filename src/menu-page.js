
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

export default renderMenuPage;
