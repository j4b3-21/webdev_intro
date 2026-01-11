/********************************
 * BASIC VARIABLES & DATA TYPES
 ********************************/
const appName = "WebDev Starter App";
let userCount = 0;
let isLoggedIn = false;

console.log(appName);
























/********************************
 * CONDITIONAL LOGIC
 ********************************/
if (isLoggedIn) {
    console.log("User is logged in");
} else {
    console.log("User is not logged in");
}






















/********************************
 * LOOPS IN JAVASCRIPT
 ********************************/

/*
Loops are used when we want to
repeat a block of code multiple times
*/

/* =========================
   1. FOR LOOP
   ========================= */
/*
Used when we know how many times
we want to run the loop
*/

console.log("FOR LOOP:");

for (let i = 1; i <= 5; i++) {
    console.log("Iteration number:", i);
}


/* =========================
   2. WHILE LOOP
   ========================= */
/*
Used when we don't know beforehand
how many times the loop will run
*/

console.log("\nWHILE LOOP:");

let count = 1;

while (count <= 5) {
    console.log("Count is:", count);
    count++;
}


/* =========================
   3. DO-WHILE LOOP
   ========================= */
/*
Runs at least once,
even if the condition is false
*/

console.log("\nDO-WHILE LOOP:");

let num = 1;

do {
    console.log("Number:", num);
    num++;
} while (num <= 5);


/* =========================
   4. FOR...OF LOOP
   ========================= */
/*
Used to loop over arrays
*/

console.log("\nFOR...OF LOOP:");

const fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log("Fruit:", fruit);
}


/* =========================
   5. FOR...IN LOOP
   ========================= */
/*
Used to loop over object properties
*/

console.log("\nFOR...IN LOOP:");

const student = {
    name: "Rahul",
    age: 20,
    branch: "CSE"
};

for (let key in student) {
    console.log(key, ":", student[key]);
}






























/********************************
 * DOM SELECTION
 ********************************/
const title = document.getElementById("title");
const loginBtn = document.querySelector("#loginBtn");
const userList = document.querySelector("#userList");
const inputName = document.querySelector("#nameInput");
const addUserBtn = document.querySelector("#addUser");

























/********************************
 * DOM MANIPULATION
 ********************************/
title.innerText = appName;
title.style.color = "teal";



























/********************************
 * FUNCTIONS
 ********************************/
function greetUser(name) {
    return `Welcome, ${name}!`;
}
const hey=() => {

}























/********************************
 * EVENT LISTENERS
 ********************************/
loginBtn.addEventListener("click", () => {
    isLoggedIn = true;
    alert("You are now logged in!");
});

























/********************************
 * ARRAYS & OBJECTS
 ********************************/
let users = [
    { id: 1, name: "Aman" },
    { id: 2, name: "Neha" }
];





























/********************************
 * FORM / INPUT HANDLING
 ********************************/
addUserBtn.addEventListener("click", () => {
    const name = inputName.value;

    if (name === "") {
        alert("Name cannot be empty");
        return;
    }

    users.push({
        id: Date.now(),
        name: name
    });

    inputName.value = "";
    renderUsers();
});













/********************************
 * ARRAY METHODS
 ********************************/
const longNames = users.filter(user => user.name.length > 4);
console.log("Long names:", longNames);




























/********************************
 * LOCAL STORAGE
 ********************************/
function saveUsers() {
    localStorage.setItem("users", JSON.stringify(users));
}

function loadUsers() {
    const saved = localStorage.getItem("users");
    if (saved) {
        users = JSON.parse(saved);
        renderUsers();
    }
}

saveUsers();
loadUsers();


















/********************************
 * TIMERS
 ********************************/
setTimeout(() => {
    console.log("This message appears after 3 seconds");
}, 3000);

