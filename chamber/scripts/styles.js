const hambutton = document.querySelector('.ham');

const mainnav = document.querySelector('.navigation');

const datefield = document.querySelector(".date");

const join_date = document.querySelector(".date");

let title = document.getElementById('title')
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

const today = new Date().toLocaleDateString('en-us', { weekday:"long"});
const message = document.createElement("h3");
message.textContent='🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.'
const divBanner = document.getElementById("banner")
if (today ==="Monday" || today ==="Tuesday"){
    message.style.backgroundColor = "white";
    divBanner.appendChild(message);
}

/*----------------------------------------------------------------------------------------------------------------------*/
/*Week 8 */

const date_time = now.toJSON();

join_date.innerHTML = `<em>${date_time}</em>`;

