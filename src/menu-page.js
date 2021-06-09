const renderMenuPage = () => {
  const html = ` <div class="background-container">
    <header>
            <h1><span style="color: red;">El </span><span style="color: white;">Gri</span><span style="color: blue;">ngo's </span><span style="color: green;">MEXI</span><span style="color: white;">CAN </span><span style="color: red;">Tacos</span></h1>
            <ul class="tabs">
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                <li class="contact">Contact</li>
            </ul>
        </header>
    <div class="foreground-container">
        <div class="taco">
            <img src="/restaurant/images/carnitas.jpg" alt="carnitas taco"  />
            <h2>Carnitas</h2>
        </div>
        <div class ="taco">
            <img src="/restaurant/images/chorizo.jpg" alt="chorizo taco" />
            <h2>Chorizo</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/suadero.jpg" alt="saudero taco" />
            <h2>Suadero</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/pollo.jpg" alt="pollo taco" />
            <h2>Pollo</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/tripa.jpg" alt="tripa taco" />
            <h2>Tripa</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/al-pastor.jpg" alt="al pastor taco" />
            <h2>Al Pastor</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/asada.jpg" alt="asada taco" />
            <h2>Asada</h2>
        </div>
        <div class="taco">
            <img src="/restaurant/images/buche.png" alt="buche taco" />
            <h2>Buche</h2>
        </div>
    
    

        
    </div>
    <footer>
        <span class="copyright">Copyright © 2021 mattdimicelli</span>
        <a href="https://github.com/mattdimicelli"><img src="/restaurant/images/GitHub-Mark-32px.png" alt="github logo" /></a>
    </footer>
</div>`;

  const contentDiv = document.querySelector("div#content");
  contentDiv.innerHTML = html;

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

  function makeDivWhite(e) {
    this.classList.add("white");
  }

  function makeDivBlack(e) {
    this.classList.remove("white");
  }
};

export default renderMenuPage;
