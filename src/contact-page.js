const renderContactPage = () => {
  const html = `
    <div class="background-container">
    <header>
            <h1><span style="color: red;">El </span><span style="color: white;">Gri</span><span style="color: blue;">ngo's </span><span style="color: green;">MEXI</span><span style="color: white;">CAN </span><span style="color: red;">Tacos</span></h1>
            <ul class="tabs">
                <li class="home">Home</li>
                <li class="menu">Menu</li>
                <li class="contact">Contact</li>
            </ul>
        </header> 
    <div class="foreground-container">
        <h2><span>Phone:</span> 561-123-3456</h2>
        <h2><span>Address:</span> On the beach at the end of S 39th St in Mexico Beach, FL, 32456</h2> 
        <img src="/restaurant/images/mexico-beach.png" />
    </div>
    <footer>
        <span class="copyright">Copyright © 2021 mattdimicelli</span>
        <a href="https://github.com/mattdimicelli"><img src="../images/GitHub-Mark-32px.png" alt="github logo" /></a>
    </footer>
</div>`;
  const contentDiv = document.querySelector("div#content");
  contentDiv.innerHTML = html;

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
    background-image: url('../images/taco-plancha.jpg');
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

export default renderContactPage;
