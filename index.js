import{initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {add} from "./functions.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
  databaseURL: "https://capstone-370b9-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

console.log (add(2,3))
const app = initializeApp(appSettings)
const database = getDatabase(app)

const pizzaDB = ref (database,"Pizza")
const inputFieldEl = document.getElementById("input-field")
const addButtonEl = document.getElementById("add-button")

addButtonEl.addEventListener("click",function(){
let inputValue = inputFieldEl.value
 console.log('${inputValue} added to database')
 push(pizzaDB, inputValue)
})