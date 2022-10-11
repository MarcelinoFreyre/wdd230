const hambutton = document.querySelector('.ham');

const mainnav = document.querySelector('.navigation');

const datefield = document.querySelector(".date");

const now = new Date();

const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.innerHTML = `<em>${fulldate}</em>`;

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};



/*----------------------------------------------------------------------------------------------------------------------*/

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

try {
    let options = {
        weekday: "long",
        day : "numeric",
        month: "long",
        year: "numeric",
    };
    document.getElementById("currentday").textContent = new Date().toLocaleDateString("en-US", options);
} catch(e) {
    alert("Error with code or your browser does not support Locale");
}

document.querySelector('#year').textContent = new Date().getFullYear();