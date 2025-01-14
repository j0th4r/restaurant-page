const homePage = document.createElement("div");
homePage.classList.add("home-page");

const slogan = document.createElement("div");
slogan.classList.add("slogan");

const p = document.createElement("p")
p.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.";

const h3 = document.createElement("h3");
h3.textContent = "The pure taste of";

const h1 = document.createElement("h1");
h1.textContent = "Philippines";

homePage.appendChild(slogan);
homePage.appendChild(p);
slogan.appendChild(h3);
slogan.appendChild(h1);


export default homePage;