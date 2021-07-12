import renderMainPage from "./main-page";
import renderMenuPage from "./menu-page";
import renderContactPage from "./contact-page";

renderMainPage();

let tabs = document.querySelector("ul.tabs");
tabs.addEventListener("click", openTab);

function openTab(e) {
  switch (e.target.className) {
    case "home":
      renderMainPage();
      tabs = document.querySelector("ul.tabs");
      tabs.addEventListener("click", openTab);
      break;
    case "menu":
      renderMenuPage();
      tabs = document.querySelector("ul.tabs");
      tabs.addEventListener("click", openTab);
      break;
    case "contact":
      renderContactPage();
      tabs = document.querySelector("ul.tabs");
      tabs.addEventListener("click", openTab);
      break;
  }
}

function renderHeaderAndFooter() {
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
}

export default renderHeaderAndFooter;
