const contactPage = document.createElement("div");
contactPage.classList.add("contact-page");

const contactLeft = document.createElement("div");
contactLeft.classList.add("contact-left")

const contactRight = document.createElement("div");
contactRight.classList.add("contact-right")

contactPage.appendChild(contactLeft)
contactPage.appendChild(contactRight)

//Left side
const title = document.createElement("div")
title.classList.add("title")
contactLeft.appendChild(title)

const h3 = document.createElement("h3");
h3.textContent = "Contact"
title.appendChild(h3);

const h1 = document.createElement("h1");
h1.textContent = "Get in Touch"
title.appendChild(h1);


//Right side
const para = document.createElement("p")
para.textContent = "Volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Arcu non odio euismod lacinia. Tortor aliquam nulla facilisi cras fermentum odio eu.";
contactRight.appendChild(para);

const form = document.createElement("form");
contactRight.appendChild(form);

//Name
const item1 = document.createElement("div");
item1.classList.add("item")
form.appendChild(item1);

const label1 = document.createElement("label");
label1.textContent = "Name"
label1.setAttribute("for", "name");
item1.appendChild(label1);

const input1 = document.createElement("input");
input1.setAttribute("type", "text");
input1.setAttribute("id", "name");
input1.setAttribute("name", "name");
input1.setAttribute("required", "true");
input1.setAttribute("placeholder", "Enter your name");
item1.appendChild(input1);

//Email
const item2 = document.createElement("div");
item2.classList.add("item")
form.appendChild(item2);

const label2 = document.createElement("label");
label2.textContent = "Email"
label2.setAttribute("for", "email");
item2.appendChild(label2);

const input2 = document.createElement("input");
input2.setAttribute("type", "email");
input2.setAttribute("id", "email");
input2.setAttribute("name", "email");
input2.setAttribute("required", "true");
input2.setAttribute("placeholder", "Your email address");
item2.appendChild(input2);

//Message
const message = document.createElement("div");
message.classList.add("message")
form.appendChild(message);

const label3 = document.createElement("label");
label3.textContent = "Message"
label3.setAttribute("for", "message");
message.appendChild(label3);

const textMessage = document.createElement("textarea");
textMessage.setAttribute("id", "message");
textMessage.setAttribute("name", "message");
textMessage.setAttribute("required", "true");
textMessage.setAttribute("placeholder", "Your message");
message.appendChild(textMessage);

//Submit
const submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.textContent = "BOOK A TABLE";
form.appendChild(submit);

export default contactPage;