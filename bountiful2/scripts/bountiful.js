// MENU
// Store the selected elements that we are going to use. 
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('.menu');

// Add a simple arrow function that listens for the <li> hamburger button click event.
// When clicked, the <ul class="navigation">'s class list toggle'
hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

document.getElementById(
	"currentday"
).textContent = `Last Modification: ${document.lastModified}`;

// WEATHER SECTION
// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const windspeed = document.querySelector('#windSpeed')
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');
const apiKey = "4ce191c6f8d82ff7aa50f70affa03999";

const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=-118.2437&units=imperial&appid=${apiKey}`;


async function apiFetch() {
    try {
      const response = await fetch(apiURL);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
apiFetch();

function capitalize(string) {
  return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
}

// currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

function displayResults(data) {
    temperature.textContent = data.main.temp.toFixed(0);
    let desc = capitalize(data.weather[0].description)
    description.textContent = desc;
    windspeed.textContent = data.wind.speed;
    caption.textContent = `Current weather in Los Angeles`;
    weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weathericon.alt = `Current weather in Santa Fe: ${desc}`;
}

// RESPONSIVE IMAGES

const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 1
};

const loadImages = (image) => {
    let valor = image.getAttribute('data-src');
    image.setAttribute('src', valor);
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};
debugger
if ('IntersectionObserver' in window) 
{
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
    
    items.forEach(item => {
        debugger;
        if (item.isIntersecting) {
            loadImages(item.target);
            imgObserver.unobserve(item.target);
        }
    })    ;
    }, 
    
    imgOptions);

    imagesToLoad.forEach(img => {
        imgObserver.observe(img);
    });
} 

else {
    imagesToLoad.forEach(img => {
        loadImages(img)
    })
}