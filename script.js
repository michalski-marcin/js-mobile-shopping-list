import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://js-mobile-shopping-list-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

// VARIABLES
const addBtn = document.getElementById('add-button')
const inputField = document.getElementById('input-field')
const ulEl = document.getElementById('shopping-list')

// EVENT LISTENERS
addBtn.addEventListener("click", addToCart)


// FUNCTIONS

function addToCart() {
    let inputValue = inputField.value
    console.log(inputValue)

    push(shoppingListDB, inputValue)

    inputField.value = ""

    ulEl.innerHTML += `<li>${inputValue}</li>`
   
}
