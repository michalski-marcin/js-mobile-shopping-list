
// VARIABLES
const addBtn = document.getElementById('add-button')
const inputField = document.getElementById('input-field')

// EVENT LISTENERS
addBtn.addEventListener("click", addToCart)


// FUNCTIONS

function addToCart() {
    let inputValue = inputField.value
    console.log(inputField.value)
}
