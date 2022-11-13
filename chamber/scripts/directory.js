const requestURL = 'https://marcelinofreyre.github.io/wdd230/chamber/json/companies.json';
const cards = document.querySelector('#cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // console.table(jsonObject);  // temporary checking for valid response and data parsing
    const companies = jsonObject['companies']
    companies.forEach(displayCompanies);
  });


function displayCompanies(company) { 
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let logo = document.createElement('img');
  let p = document.createElement('p');
  let p2 = document.createElement('p');
  let p3 = document.createElement('p');


  h2.textContent = `${company.name}`;
  logo.setAttribute('src', company.imageurl);
  logo.setAttribute('alt', 'Logo of ' + company.name);
  logo.setAttribute('loading', 'lazy');
  p.textContent = `Phone number: ${company.phone}`
  p2.textContent = `Location: ${company.address}`
  p3.textContent = `Membership level: ${company.level}`

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(logo);


  // Add/append the existing HTML div with the cards class with the id(card)
  cards.appendChild(card);
}