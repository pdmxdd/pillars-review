// building a todo list CLI

// we want users to be able to view their current TODO list
// we want users to be able to add to their TODO list
// a menu that allows them to select an option from above
// we want to display the completed items!
// we want users to be able to update their existing TODO items (mark as completed)
// maybe have 2 lists a completed, and a pending?

// we want users to be able to delete completed TODO items -> TODO: more work
    // permanently delete items from the completed list?



const input = require('readline-sync');

let todoList = ["Dishes", "Laundry"]; // mark one of these things as completed we should remove it from this list and add it to the completedList
let completedList = [];
// console.log(todoList);

function displayMenuAndGetUserChoice() {
    console.log("---MENU---");
    console.log("1. View TODO Items");
    console.log("2. Add a new TODO item");
    console.log("3. Mark an item as completed");
    console.log("4. View Completed Items");
    console.log("5. Remove an item from the Completed list");
    console.log("6. TO EXIT");
    console.log("----------");
    const userChoice = input.question("Please choose an option from the list: ");
    return userChoice;
}

function consoleLogList(someList, sectionHeaderString) {
    console.log(); 
    console.log(sectionHeaderString);
    for(let i = 0; i < someList.length; i++) {
        console.log(`${i + 1}. ${someList[i]}`);
    }
    console.log("=".repeat(sectionHeaderString.length));
    console.log();
}

// loop with exit option
let menuOption = "-1";
while(menuOption !== "6") {
    menuOption = displayMenuAndGetUserChoice();
    if(menuOption === "1") {
        consoleLogList(todoList, "===YOUR TODO LIST===");
    }
    else if(menuOption === "2") {
        // be user input able to add to the todoList
        const newItem = input.question("What do you need to do? ");
        todoList.push(newItem);
    }
    else if(menuOption === "3") {
        console.log("Which item would you like to mark as complete?");
        consoleLogList(todoList, "===YOUR TODO LIST===");
        let completedIndex = Number(input.question("Enter the number of the item you would like to mark as completed: ")) - 1;
        let completedItem = todoList.splice(completedIndex, 1)[0];
        completedList.push(completedItem);
    }
    else if(menuOption === "4") {
        consoleLogList(completedList, "===YOUR COMPLETED TASKS===");
    }
    else if(menuOption === "5") {
        console.log("Which item would you like to remove?");
        consoleLogList(completedList, "===YOUR Completed LIST===");
        let removeIndex = Number(input.question("Enter the number of the item you would like to remove: ")) - 1;
        completedList.splice(removeIndex, 1);
    }
    else if(menuOption === "6") {
        console.log("GOODBYE");
    }
    else {
        console.log("Invalid Menu Option, please choose a number between 1 & 6");
    }
}
