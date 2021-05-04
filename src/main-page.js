const renderMainPage = () => {
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
      <h2>The best tacos north of the border!</h2>
      <h2>¡Los mejores tacos en el otro lado!</h2>
      <img src="../images/flags.png" alt="an american flag on the left and a mexican flag on the right" />
      <p>Visit us all week from 6pm to 2am!</p>
      <p> ¡Visítanos lunes a domingo de 6pm a 2am! </p>
  </div>
  <footer>
      <span class="copyright">Copyright © 2021 mattdimicelli</span>
      <a href="https://github.com/mattdimicelli"><img src="../images/GitHub-Mark-32px.png" alt="github logo" /></a>
  </footer>
</div>
`;

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
  margin-bottom: 1rem;
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

export default renderMainPage;
