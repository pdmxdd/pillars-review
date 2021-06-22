// building a todo list CLI

// we want users to be able to view their current TODO list
// we want users to be able to add to their TODO list
// a menu that allows them to select an option from above
// we want to display the completed items!
// we want users to be able to update their existing TODO items (mark as completed)
// maybe have 2 lists a completed, and a pending?

// we want users to be able to delete completed TODO items -> TODO: more work
    // permanently delete items from the completed list?

class TodoItem {
    constructor(taskName) {
        this.name = taskName;
        this.completed = false;
    }
}



const input = require('readline-sync');

let todoList = [new TodoItem("dishes"), new TodoItem("laundry"), new TodoItem("gutters"), new TodoItem("programming"), new TodoItem("studying")]; // mark one of these things as completed we should remove it from this list and add it to the completedList
let completedList = [];
// console.log(todoList);

function displayMenuAndGetUserChoice() {
    console.log("---MENU---");
    console.log("1. View TODO Items");
    console.log("2. Add a new TODO item");
    console.log("3. Mark an item as completed");
    console.log("4. View Completed Items");
    console.log("5. View Uncompleted Items");
    console.log("6. Remove an item from the Todo list");
    console.log("7. Remove all completed items from the TODO List");
    console.log("8. TO EXIT");
    console.log("----------");
    const userChoice = input.question("Please choose an option from the list: ");
    return userChoice;
}

function consoleLogList(someList, sectionHeaderString) {
    console.log(); 
    console.log(sectionHeaderString);
    for(let i = 0; i < someList.length; i++) {
        console.log(`${i + 1}. ${someList[i].name} completed: ${someList[i].completed}`);
    }
    console.log("=".repeat(sectionHeaderString.length));
    console.log();
}

// loop with exit option
let menuOption = "-1";
while(menuOption !== "8") {
    menuOption = displayMenuAndGetUserChoice();
    if(menuOption === "1") {
        consoleLogList(todoList, "===YOUR TODO LIST===");
    }
    else if(menuOption === "2") {
        // be user input able to add to the todoList
        const newItem = input.question("What do you need to do? ");
        todoList.push(new TodoItem(newItem));
    }
    else if(menuOption === "3") {
        console.log("Which item would you like to mark as complete?");
        consoleLogList(todoList, "===YOUR TODO LIST===");
        let completedIndex = Number(input.question("Enter the number of the item you would like to mark as completed: ")) - 1;
        todoList[completedIndex].completed = true;
        // let completedItem = todoList.splice(completedIndex, 1)[0];
        // completedList.push(completedItem);
    }
    else if(menuOption === "4") {
        // consoleLogList(completedList, "===YOUR COMPLETED TASKS===");
        // loop through our todoList and extract the completed tasks so we can display them here
        let tempCompletedList = [];
        for(let i = 0; i < todoList.length; i++) {
            const todoItem = todoList[i];
            if(todoItem.completed) {
                tempCompletedList.push(todoItem); 
            }
        }
        consoleLogList(tempCompletedList, "===YOUR COMPLETED TASKS===");
    }
    else if(menuOption === "5") {
        let tempUncompletedList = [];
        for(let i = 0; i < todoList.length; i++) {
            const todoItem = todoList[i];
            if(!todoItem.completed) {
                tempUncompletedList.push(todoItem); 
            }
        }
        consoleLogList(tempUncompletedList, "===YOUR UNCOMPLETED TASKS===");
    }
    else if(menuOption === "6") {
        console.log("Which item would you like to remove?");
        consoleLogList(todoList, "===YOUR TODO LIST===");
        let removeIndex = Number(input.question("Enter the number of the item you would like to remove: ")) - 1;
        todoList.splice(removeIndex, 1);
    }
    else if(menuOption === "7") {
        // we want to remove all of the completed items from the todo List
        // loop through each of the elements of the list and remove them if they are completed
        // only using the programming pillars:
        /*
        let removeTargets = [];
        for(let i = 0; i < todoList.length; i++) {
            let todoItem = todoList[i];
            if(todoItem.completed) {
                removeTargets.push(i);
            }
        }
        removeTargets.reverse();
        // [0, 1, 2, 3, 4, 5] -> 0, 3
        // [1, 2, 4, 5]
        for(let removeIndex of removeTargets) {
            todoList.splice(removeIndex, 1);
        }
        */
       // using an array method .filter() to achieve the same functionality
       todoList = todoList.filter(function(todoItem) {
           if(!todoItem.completed){
               return todoItem
            }
        });
    }
    else if(menuOption === "8") {
        console.log("GOODBYE");
    }
    else {
        console.log("Invalid Menu Option, please choose a number between 1 & 6");
    }
}
