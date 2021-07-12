const renderMainPage = () => {
  const backgroundContainer = document.createElement('div');
  backgroundContainer.classList.add('background-container');
  const header = document.createElement('header');
  backgroundContainer.append(header);
  const h1 = document.createElement('h1');
  header.append(h1);
  const span = document.createElement('span');
  span.style.color = "red";
  span.innerText = "El ";
  h1.append(span);
  const griSpan = document.createElement('span');
  griSpan.style.color = 'white';
  griSpan.innerText = 'Gri';
  h1.append(griSpan);
  const ngoSpan = document.createElement('span');
  ngoSpan.style.color = 'blue';
  ngoSpan.innerText = "ngo's ";
  h1.append(ngoSpan);
  const mexiSpan = document.createElement('span');
  mexiSpan.style.color = 'green';
  mexiSpan.innerText = 'MEXI';
  h1.append(mexiSpan);
  const canSpan = document.createElement('span');
  canSpan.style.color = 'white';
  canSpan.innerText = 'CAN ';
  h1.append(canSpan);
  const tacosSpan = document.createElement('span');
  tacosSpan.style.color = 'red';
  tacosSpan.innerText = 'Tacos';
  h1.append(tacosSpan);
  const tabs = document.createElement('ul');
  tabs.classList.add('tabs');
  header.append(tabs);
  const home = document.createElement('li');
  home.classList.add('home');
  home.textContent = 'Home';
  tabs.append(home);
  const menu = document.createElement('li');
  menu.textContent = 'Menu';
  menu.classList.add('menu');
  tabs.append(menu);
  const contact = document.createElement('li');
  contact.classList.add('contact');
  contact.textContent = 'Contact';
  tabs.append(contact);

  const foregroundContainer = document.createElement('div');
  foregroundContainer.classList.add('foreground-container');
  backgroundContainer.append(foregroundContainer);
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

  const footer = document.createElement('footer');
    const copyright = document.createElement('span');
    copyright.classList.add('copyright');
    copyright.textContent = "Copyright © 2021 mattdimicelli";
    footer.append(copyright);
    backgroundContainer.append(footer);
    const githubLink = document.createElement('a');
    githubLink.href = "https://github.com/mattdimicelli";
    const githubLogo = document.createElement('img');
    githubLogo.src = "/restaurant/images/GitHub-Mark-32px.png";
    githubLogo.alt = "github logo";
    githubLink.append(githubLogo);
    footer.append(githubLink);


 

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

export default renderMainPage;
