import "./styles.css";
import home from "./homePage.js";
import menu from "./menuPage.js";
import Menu from "./images/menu-bg.png"

const content = document.getElementById("content");
const body = document.querySelector("body");
content.appendChild(home);


const homeBtn = document.getElementById("home");
homeBtn.addEventListener("click", () => {
  if (content.contains(home)){
    return;
  } else {
    body.style.backgroundImage = "";
    body.style.backgroundPosition = "center";
    content.replaceChild(home, menu);
  }
})

const menuBtn = document.getElementById("menu");
menuBtn.addEventListener("click", () => {
  if (content.contains(menu)) {
    return;
  } else {
    body.style.backgroundImage = `url(${Menu})`;
    body.style.backgroundPosition = "left";
    content.replaceChild(menu, home);
  }
  
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
  content.removeChild(home);
})



