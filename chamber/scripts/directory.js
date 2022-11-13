const requestURL = 'https://github.com/MarcelinoFreyre/wdd230/blob/main/chamber/json/companies.json';
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


  // Change the textContent property of the h2 element to contain the company name
  h2.textContent = `${company.name}`;


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  logo.setAttribute('src', company.imageurl);
  logo.setAttribute('alt', 'Logo of ' + company.name);
  logo.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(p);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(logo);

  // Add birthdate data
  p.textContent = `Phone number: ${company.phone}`
  p2.textContent = `Location: ${company.address}`
  p3.textContent = `Membership level: ${company.level}`

  // Add/append the existing HTML div with the cards class with the id(card)
  cards.appendChild(card);
}