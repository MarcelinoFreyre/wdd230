const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const searchInput = document.querySelector('.input')

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const results = jsonObject['fruit']
    results.forEach(displayProphets);
  });

// creating and declaring a function called "setList"
// setList takes in a param of "results"
function setList(results){

    for (const person of results){
        // creating a li element for each result item
        const resultItem = document.createElement('li')

        // adding a class to each item of the results
        resultItem.classList.add('result-item')

        // grabbing the name of the current point of the loop and adding the name as the list item's text
        const text = document.createTextNode(person.name)

        // appending the text to the result item
        resultItem.appendChild(text)

        // appending the result item to the list
        list.appendChild(resultItem)
    }
}

searchInput.addEventListener("input", (e) => {
    // inside, we will need to achieve a few things:
    // 1. declare and assign the value of the event's target to a variable AKA whatever is typed in the search bar
    let value = e.target.value

    // 2. check: if input exists and if input is larger than 0
    if (value && value.trim().length > 0){
        // 3. redefine 'value' to exclude white space and change input to all lowercase
         value = value.trim().toLowerCase()
        // 4. return the results only if the value of the search is included in the person's name
        // we need to write code (a function for filtering through our data to include the search input value)
    } else {
        // 5. return nothing
        // input is invalid -- show an error message or show no results

    }

}
)

const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {
    // 1. write a function that removes any previous results from the page
})