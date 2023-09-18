import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

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
    if (inputField.value) {
    let inputValue = inputField.value
    push(shoppingListDB, inputValue)
    clearInputField()
    }
}

onValue(shoppingListDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemsArray = Object.entries(snapshot.val())

        clearShoppingList()



        for (let i = 0; i < itemsArray.length; i++) {
            let currentItem = itemsArray[i]
            let currentItemID = currentItem[0]
            let currentItemValue = currentItem[1]


            appendItemToShoppingList(currentItem)
        }
    } else {
        listElement.innerHTML = "Nothing here..."
    }


})

function clearInputField() {
    inputField.value = ""
}

function appendItemToShoppingList(item) {
    const itemID = item[0]
    const itemValue = item[1]
    const newElement = document.createElement("li")

    newElement.textContent = itemValue

    newElement.addEventListener("dblclick", function () {
        let locationShoppingListDB = ref(database, `shoppingList/${itemID}`)
        remove(locationShoppingListDB)
    })

    listElement.append(newElement)
}

function clearShoppingList() {
    listElement.innerHTML = ""
}

