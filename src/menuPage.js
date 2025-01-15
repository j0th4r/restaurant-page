import tomatoToast from './images/tomato-toast.png';
import noodleSoup from './images/noodle-soup.png'
import avocadoSmash from './images/avocado-smash.png'
import oatmealSpirit from './images/oatmeal-spirit.png'

const menuPage = document.createElement("div");
menuPage.classList.add("menu-page");

const menuLeft = document.createElement("div");
menuLeft.classList.add("menu-left")

const menuRight = document.createElement("div");
menuRight.classList.add("menu-right")

menuPage.appendChild(menuLeft)
menuPage.appendChild(menuRight)

//Left side
const title = document.createElement("div")
title.classList.add("title")
menuLeft.appendChild(title)

const h3 = document.createElement("h3");
h3.textContent = "Check Out"
title.appendChild(h3);

const h1 = document.createElement("h1");
h1.textContent = "Our Menus"
title.appendChild(h1);

//Right side
const starters = document.createElement("div")
starters.classList.add("starters")
menuRight.appendChild(starters)

const rightH3 = document.createElement("h3")
rightH3.textContent = "Starters"
starters.appendChild(rightH3);

const foodList = document.createElement("div")
foodList.classList.add("food-list")
starters.appendChild(foodList);

//Tomato Toast
const foodCard1 = document.createElement("div")
foodCard1.classList.add("food-card")
foodList.appendChild(foodCard1);

const food1 = new Image();
food1.src = tomatoToast;
foodCard1.appendChild(food1);

const desc1 = document.createElement("div")
desc1.classList.add("desc")
foodCard1.appendChild(desc1);

const head1 = document.createElement("div")
head1.classList.add("head")
desc1.appendChild(head1);

const head1H3 = document.createElement("h3")
head1H3.textContent = "Tomato Toast"
head1.appendChild(head1H3);

const head1Para = document.createElement("p")
head1Para.textContent = "₱290"
head1.appendChild(head1Para);

const p1 = document.createElement("p")
p1.textContent = "Lorem ipsum dolor sit amet, consectetur"
desc1.appendChild(p1);



//Noodle Soup
const foodCard2 = document.createElement("div")
foodCard2.classList.add("food-card")
foodList.appendChild(foodCard2);

const food2 = new Image();
food2.src = noodleSoup;
foodCard2.appendChild(food2);

const desc2 = document.createElement("div")
desc2.classList.add("desc")
foodCard2.appendChild(desc2);

const head2 = document.createElement("div")
head2.classList.add("head")
desc2.appendChild(head2);

const head2H3 = document.createElement("h3")
head2H3.textContent = "Noodle Soup"
head2.appendChild(head2H3);

const head2Para = document.createElement("p")
head2Para.textContent = "₱80"
head2.appendChild(head2Para);

const p2 = document.createElement("p")
p2.textContent = "Lorem ipsum dolor sit amet, consectetur"
desc2.appendChild(p2);


//Avocado Smash
const foodCard3 = document.createElement("div")
foodCard3.classList.add("food-card")
foodList.appendChild(foodCard3);

const food3 = new Image();
food3.src = avocadoSmash;
foodCard3.appendChild(food3);

const desc3 = document.createElement("div")
desc3.classList.add("desc")
foodCard3.appendChild(desc3);

const head3 = document.createElement("div")
head3.classList.add("head")
desc3.appendChild(head3);

const head3H3 = document.createElement("h3")
head3H3.textContent = "Avocado Smash"
head3.appendChild(head3H3);

const head3Para = document.createElement("p")
head3Para.textContent = "₱170"
head3.appendChild(head3Para);

const p3 = document.createElement("p")
p3.textContent = "Lorem ipsum dolor sit amet, consectetur"
desc3.appendChild(p3);

//Oatmeal Spirit
const foodCard4 = document.createElement("div")
foodCard4.classList.add("food-card")
foodList.appendChild(foodCard4);

const food4 = new Image();
food4.src = oatmealSpirit;
foodCard4.appendChild(food4);

const desc4 = document.createElement("div")
desc4.classList.add("desc")
foodCard4.appendChild(desc4);

const head4 = document.createElement("div")
head4.classList.add("head")
desc4.appendChild(head4);

const head4H3 = document.createElement("h3")
head4H3.textContent = "Oatmeal Spirit"
head4.appendChild(head4H3);

const head4Para = document.createElement("p")
head4Para.textContent = "₱200"
head4.appendChild(head4Para);

const p4 = document.createElement("p")
p4.textContent = "Lorem ipsum dolor sit amet, consectetur"
desc4.appendChild(p4);







export default menuPage;