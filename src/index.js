import "./styles.css";
import home from "./homePage.js";
import menu from "./menuPage.js";
import contact from "./contactPage.js";

import menuBackground from "./images/menu-bg.png";
import contactBackground from "./images/contact-bg.png";

const body = document.querySelector("body");

let currentPage = home;
const content = document.getElementById("content");
content.appendChild(currentPage);

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {
  if (content.contains(home)){
    return;
  } else {
    menuBtn.style.color = "black";
    contactBtn.style.color = "black";
    homeBtn.style.color = "#e48c0a";

    body.style.backgroundImage = "";
    body.style.backgroundPosition = "center";
    content.replaceChild(home, currentPage);
    currentPage = home;
  }
})

menuBtn.addEventListener("click", () => {
  if (content.contains(menu)) {
    return;
  } else {
    homeBtn.style.color = "black";
    contactBtn.style.color = "black";
    menuBtn.style.color = "#e48c0a";
    
    body.style.backgroundImage = `url(${menuBackground})`;
    body.style.backgroundPosition = "left";
    content.replaceChild(menu, currentPage);
    currentPage = menu;
  }
})

contactBtn.addEventListener("click", () => {
  if (content.contains(contact)) {
    return;
  } else {
    homeBtn.style.color = "black";
    menuBtn.style.color = "black";
    contactBtn.style.color = "#e48c0a";

    body.style.backgroundImage = `url(${contactBackground})`;
    body.style.backgroundPosition = "left";
    content.replaceChild(contact, currentPage);
    currentPage = contact;
  }
})
