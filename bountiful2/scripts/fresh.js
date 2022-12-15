//const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';
const searchInput = document.querySelector('.input')
const clearButton = document.getElementById('clear')
const FRUITS_URL_JSON = "https://brotherblazzard.github.io/canvas-content/fruit.json";

async function fetchAsync(endpoint) {
  let response = await fetch(endpoint);
  let json= await response.json();
  return json;
}

const Fresh = (function(){

  const fruits = [];
  const COMBO_FRUITS_ID = 'fresh-form'
  const DETAIL_ID = 'detail-juice';
  this.fruits_selected = []

  const self = this;

  async function getFruits(){
      fruits.push(...await fetchAsync(FRUITS_URL_JSON ));
  }

  function populateComboList() {
    let options = ""
    fruits.forEach(f =>{ options += `<option value=${f.id}>${f.name}</option>`})
    document.getElementById(`${COMBO_FRUITS_ID}`).innerHTML = options;
  }

  function getFruitsSelected(){
    let selected = document.querySelectorAll(`#${COMBO_FRUITS_ID} option:checked`);
    return Array.from(selected).map(el => el.value);
  }

  function setFruits(){
    let fruitsIdSelected = getFruitsSelected();
    self.fruits_selected = []
    //1 Obtener la fruta segun el id
    fruitsIdSelected.forEach(fs => self.fruits_selected.push(...fruits.filter(f => f.id == fs)));
   
  }

  function sendOrder(){
    //1- obtener los datos cargados
    debugger
    let fruits = ""
    self.fruits_selected.forEach(f => fruits += f.name + ', ');
    let sum = getPropertiesJuice();
    //2 Mostrar en pantalla el calculo numerico
    
    $("#first-name").html($('#fname').val())
    $("#phone-number").html($('#phone').val())
    $("#e-mail").html($('#email').val())
    $("#date-order").html(new Date().toUTCString())
    $("#fruits-selected").html(fruits)
    $("#instructions").html($("#spec-instruct").val())
    $("#calories").html(sum.carbohydrates)
    $("#fat").html(sum.protein)
    $("#sugar").html(sum.fat)
    $("#carbohydrates").html(sum.calories)
    $("#protein").html(sum.sugar)

    $("#form-order")[0].reset();
    $(`#${COMBO_FRUITS_ID}`).val(null).trigger("change");
    let totalDrinks = localStorage.getItem("total-drinks");
    totalDrinks = !totalDrinks ? 1 : totalDrinks+1;
    localStorage.setItem("total-drinks", totalDrinks);
  }

  function getPropertiesJuice(){
    let sum = {carbohydrates: 0,
              protein: 0,
              fat: 0,
              calories: 0,
              sugar: 0}
    
    self.fruits_selected.forEach(f => {
      sum.carbohydrates += f.nutritions.carbohydrates
      sum.protein += f.nutritions.protein
      sum.fat += f.nutritions.fat
      sum.calories += f.nutritions.calories
      sum.sugar += f.nutritions.sugar
    })
    return sum;
  }

  (async()=>{
    
    await getFruits();
    populateComboList();
    $(`#${COMBO_FRUITS_ID}`).select2 (
        {maximumSelectionLength: 3}
    )

    $(`#${COMBO_FRUITS_ID}`).on("change", setFruits)
    
    $(`#${"btn-order"}`).on("click", sendOrder)
    
  })();

})();

document.getElementById(
	"currentday"
).textContent = `Last Modification: ${document.lastModified}`;