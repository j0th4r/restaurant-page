import "./styles.css";
import home from "./homePage.js";
import menu from "./menuPage.js";
import menuBackground from "./images/menu-bg.png";
import contactBackground from "./images/contact-bg.png";

const content = document.getElementById("content");
const body = document.querySelector("body");
// content.appendChild(home);
body.style.backgroundImage = `url(${contactBackground})`;
body.style.backgroundPosition = "left";

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
    body.style.backgroundImage = `url(${menuBackground})`;
    body.style.backgroundPosition = "left";
    content.replaceChild(menu, home);
  }
  
})

const aboutBtn = document.getElementById("about");
aboutBtn.addEventListener("click", () => {
  body.style.backgroundImage = `url(${contactBackground})`;
  body.style.backgroundPosition = "left";
})



