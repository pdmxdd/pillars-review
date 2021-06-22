// building a todo list CLI

// we want users to be able to view their current TODO list
// we want users to be able to add to their TODO list
// we want users to be able to update their existing TODO items (mark as completed)
    // maybe have 2 lists a completed, and a pending?
// we want users to be able to delete completed TODO items
    // permanently delete items from the completed list?
// a menu that allows them to select an option from above

const input = require('readline-sync');

let todoList = ["Dishes", "Laundry"];
// console.log(todoList);

function displayMenuAndGetUserChoice() {
    console.log("=====MENU=====");
    console.log("1. View TODO Items");
    console.log("2. Add a new TODO item");
    console.log("3. TO EXIT");
    console.log("=".repeat(14));
    const userChoice = input.question("Please choose an option from the list: ");
    return userChoice;
}

// console.log(`menuOption: ${menuOption}`);
// loop with exit option
let menuOption = "-1";
while(menuOption !== "3") {
    menuOption = displayMenuAndGetUserChoice();
    if(menuOption === "1") {
        // console.log(todoList);
        console.log("-----YOUR TODO LIST-----");
        for(let element of todoList) {
            console.log(element);
        }
        console.log("-------------------------");
    }
    else if(menuOption === "2") {
        // be user input able to add to the todoList
        const newItem = input.question("What do you need to do? ");
        todoList.push(newItem);
    }
}
