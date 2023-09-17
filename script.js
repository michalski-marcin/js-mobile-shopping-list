import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSetting = {
    databaseURL: "https://js-mobile-shopping-list-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSetting)
const database = getDatabase(app)
const shoppingListDB = ref(database, "shoppingList")

// VARIABLES
const addBtn = document.getElementById('add-button')
const inputField = document.getElementById('input-field')
const listElement = document.getElementById('shopping-list')

// EVENT LISTENERS
addBtn.addEventListener("click", addToCart)


// FUNCTIONS

function addToCart() {
    let inputValue = inputField.value
    push(shoppingListDB, inputValue)
    clearInputField()
}

onValue(shoppingListDB, function(snapshot) {
    
    let itemsArray = Object.values(snapshot.val())
    clearShoppingList()
    

    for (let i = 0; i < itemsArray.length; i++) {
        appendItemToShoppingList(itemsArray[i])
    }
})

function clearInputField() {
    inputField.value = ""
}

function appendItemToShoppingList(itemValue) {
    listElement.innerHTML += `<li>${itemValue}</li>`
}

function clearShoppingList() {
    listElement.innerHTML = ""
}

