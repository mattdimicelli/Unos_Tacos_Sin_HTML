import renderHeaderAndFooter from "./index";

const renderMenuPage = () => {
    // const backgroundContainer = document.createElement('div');
    // backgroundContainer.classList.add('background-container');
    // const header = document.createElement('header');
    // backgroundContainer.append(header);
    // const h1 = document.createElement('h1');
    // header.append(h1);
    // const span = document.createElement('span');
    // span.style.color = "red";
    // span.innerText = "El ";
    // h1.append(span);
    // const griSpan = document.createElement('span');
    // griSpan.style.color = 'white';
    // griSpan.innerText = 'Gri';
    // h1.append(griSpan);
    // const ngoSpan = document.createElement('span');
    // ngoSpan.style.color = 'blue';
    // ngoSpan.innerText = "ngo's ";
    // h1.append(ngoSpan);
    // const mexiSpan = document.createElement('span');
    // mexiSpan.style.color = 'green';
    // mexiSpan.innerText = 'MEXI';
    // h1.append(mexiSpan);
    // const canSpan = document.createElement('span');
    // canSpan.style.color = 'white';
    // canSpan.innerText = 'CAN ';
    // h1.append(canSpan);
    // const tacosSpan = document.createElement('span');
    // tacosSpan.style.color = 'red';
    // tacosSpan.innerText = 'Tacos';
    // h1.append(tacosSpan);
    // const tabs = document.createElement('ul');
    // tabs.classList.add('tabs');
    // header.append(tabs);
    // const home = document.createElement('li');
    // home.classList.add('home');
    // home.textContent = 'Home';
    // tabs.append(home);
    // const menu = document.createElement('li');
    // menu.textContent = 'Menu';
    // menu.classList.add('menu');
    // tabs.append(menu);
    // const contact = document.createElement('li');
    // contact.classList.add('contact');
    // contact.textContent = 'Contact';
    // tabs.append(contact);
    renderHeaderAndFooter();

    const foregroundContainer = document.createElement('div');
    foregroundContainer.classList.add('foreground-container');
    const backgroundContainer = document.querySelector('.background-container');

    backgroundContainer.append(foregroundContainer);

    const carnitasDiv = document.createElement('div');
    carnitasDiv.classList.add('taco');
    foregroundContainer.append(carnitasDiv);
    const carnitas = document.createElement('img');
    carnitas.src = "/restaurant/images/carnitas.jpg";
    carnitas.alt = "carnitas taco";
    carnitasDiv.append(carnitas);
    const carnitasH2 = document.createElement('h2');
    carnitasH2.textContent = 'Carnitas';
    carnitasDiv.append(carnitasH2);

    const chorizoDiv = document.createElement('div');
    chorizoDiv.classList.add('taco');
    foregroundContainer.append(chorizoDiv);
    const chorizo = document.createElement('img');
    chorizo.alt = "chorizo taco";
    chorizo.src = '/restaurant/images/chorizo.jpg';
    const chorizoH2 = document.createElement('h2');
    chorizoH2.textContent = 'Chorizo';
    chorizoDiv.append(chorizo, chorizoH2);

    const suaderoDiv = document.createElement('div');
    suaderoDiv.classList.add('taco');
    foregroundContainer.append(suaderoDiv);
    const suadero = document.createElement('img');
    suadero.src = "/restaurant/images/suadero.jpg";
    suadero.alt = "suadero taco";
    const suaderoH2 = document.createElement('h2');
    suaderoH2.textContent = "Suadero";
    suaderoDiv.append(suadero, suaderoH2);

    const polloDiv = document.createElement('div');
    polloDiv.classList.add('taco');
    foregroundContainer.append(polloDiv);
    const pollo = document.createElement('img');
    pollo.src = "/restaurant/images/pollo.jpg";
    pollo.alt = "pollo taco";
    const polloH2 = document.createElement('h2');
    polloH2.textContent = "Pollo";
    polloDiv.append(pollo, polloH2);

    const tripaDiv = document.createElement('div');
    tripaDiv.classList.add('taco');
    foregroundContainer.append(tripaDiv);
    const tripa = document.createElement('img');
    tripa.src = "/restaurant/images/tripa.jpg";
    pollo.alt = "tripa taco";
    const tripaH2 = document.createElement('h2');
    tripaH2.textContent = "Tripa";
    tripaDiv.append(tripa, tripaH2);

    const alPastorDiv = document.createElement('div');
    alPastorDiv.classList.add('taco');
    foregroundContainer.append(alPastorDiv);
    const alPastor = document.createElement('img');
    alPastor.src = "/restaurant/images/al-pastor.jpg";
    alPastor.alt = "al pastor taco";
    const alPastorH2 = document.createElement('h2');
    alPastorH2.textContent = "Al Pastor";
    alPastorDiv.append(alPastor, alPastorH2);

    const asadaDiv = document.createElement('div');
    asadaDiv.classList.add('taco');
    foregroundContainer.append(asadaDiv);
    const asada = document.createElement('img');
    asada.src = "/restaurant/images/asada.jpg";
    asada.alt = "asada taco";
    const asadaH2 = document.createElement('h2');
    asadaH2.textContent = "Asada";
    asadaDiv.append(asada, asadaH2);

    const bucheDiv = document.createElement('div');
    bucheDiv.classList.add('taco');
    foregroundContainer.append(bucheDiv);
    const buche = document.createElement('img');
    buche.src = "/restaurant/images/buche.png";
    buche.alt = "buche taco";
    const bucheH2 = document.createElement('h2');
    bucheH2.textContent = "Buche";
    bucheDiv.append(buche, bucheH2);

    // const footer = document.createElement('footer');
    // const copyright = document.createElement('span');
    // copyright.classList.add('copyright');
    // copyright.textContent = "Copyright © 2021 mattdimicelli";
    // footer.append(copyright);
    // backgroundContainer.append(footer);
    // const githubLink = document.createElement('a');
    // githubLink.href = "https://github.com/mattdimicelli";
    // const githubLogo = document.createElement('img');
    // githubLogo.src = "/restaurant/images/GitHub-Mark-32px.png";
    // githubLogo.alt = "github logo";
    // githubLink.append(githubLogo);
    // footer.append(githubLink);


    const mainBackgroundContainer = document.querySelector(".background-container");
    mainBackgroundContainer.replaceWith(backgroundContainer);

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

export default renderMenuPage;
