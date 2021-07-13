import renderMainPage from './main-page';
import renderMenuPage from './menu-page';
import renderContactPage from './contact-page';
import renderHeaderAndFooter from './header-and-footer';


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


