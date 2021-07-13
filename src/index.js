import renderMainPage from './main-page';
import renderMenuPage from './menu-page';
import renderContactPage from './contact-page';


renderHeaderAndFooter();
renderMainPage();

let tabs = document.querySelector('ul.tabs');
tabs.addEventListener('click', openTab);

function openTab(e) {
    switch (e.target.className) {
    case 'home':
        renderMainPage();
        break;
    case 'menu':
        renderMenuPage();
        break;
    case 'contact':
        renderContactPage();
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
    githubLogo.src = '/restaurant/images/GitHub-Mark-32px.png';
    githubLogo.alt = 'github logo';
    githubLink.append(githubLogo);
    footer.append(copyright, githubLink);

    const emptyBackgroundContainer = document.querySelector('.background-container');
    emptyBackgroundContainer.replaceWith(backgroundContainer);
}

