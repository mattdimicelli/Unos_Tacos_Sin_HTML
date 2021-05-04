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
