const hambutton = document.querySelector('.ham');

const mainnav = document.querySelector('.navigation');

const datefield = document.querySelector(".date");

/*Declare variable to hold */

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};



/*----------------------------------------------------------------------------------------------------------------------*/

document.getElementById(
	"currentday"
).textContent = `Last Modification: ${document.lastModified}`;

// try {
//     let options = {
//         weekday: "long",
//         day : "numeric",
//         month: "long",
//         year: "numeric",
//     };
//     document.getElementById("currentday").textContent = new Date().toLocaleDateString("en-US", options);
// } catch(e) {
//     alert("Error with code or your browser does not support Locale");
// }

// document.querySelector('#year').textContent = new Date().getFullYear();

// -- -- -- -- -- -- -- -- -- -- -- -- -- -->

// const day = now.getDate(); //--> 6   Necesitamos que sea igual  a 1 y 2

const today = new Date().toLocaleDateString('en-us', { weekday:"long"});
const message = document.createElement("h3");
message.textContent='🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
const divBanner = document.getElementById("banner")
if (today ==="Monday" || today ==="Tuesday"){
    message.style.backgroundColor = "white";
    divBanner.appendChild(message);
}