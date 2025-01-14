import "./styles.css";
import home from "./homePage.js";
import menu from "./menuPage.js";
import Menu from "./images/menu-bg.png"

const menuBg = new Image();
menuBg.src = Menu;

const content = document.getElementById("content");
const body = document.querySelector("body");
body.style.backgroundImage = `url(${menuBg.src})`;
body.style.backgroundPosition = "left";

const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  content.appendChild(home);
})

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage = ""
  content.replaceChild(home, menu);
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
  content.removeChild(home);
})



