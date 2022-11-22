// select HTML elements in the document
const temperature = document.querySelector('#temperature');
const description = document.querySelector('#currently');
const weathericon = document.querySelector('#weathericon');
const caption = document.querySelector('figcaption');

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?lat=-31.633&lon=-60.700&units=imperial&appid=4ce191c6f8d82ff7aa50f70affa03999';

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
  caption.textContent = `Current weather in Santa Fe: ${desc}`;
  weathericon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weathericon.alt = `Current weather in Santa Fe: ${desc}`;
}