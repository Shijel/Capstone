import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.10/firebase-app.js"
import { getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.10/firebasedatabase.js"
console.log(add(1,1))

const appSettings = {
    databaseURL: "https://capstone-370b9-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app) 
const pizzadb = ref(database, "Pizza")
console.log(app)