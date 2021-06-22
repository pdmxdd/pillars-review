# Pillars in JS

variables

<!-- what is a variable? -->
integers, strings, booleans, Numbers, null, undefined
integer
Double
Float

variable is a combination of two things, a value (data type) and a name for that value

x = 15; // is assigned the value of 15 assignment operator

let x = 15; // variable that can be reassigned
x = 225; // reassigned to a new value
const y = 14; // permanent variable it cannot be reassigned
y = "f"; // it throws an exception saying you cannot reassign a constant variable

let -> block scoped
const -> block scoped

scope
global 
block {}

var globalVariable = 15;


conditionals
loops
functions
data structures (ordered list, key-value pair)

## Variables (Data Types)

declaration
initialization
let x; // initializition
x = 15; // declaration
let y = 15; // they can happen at the same time
assignment // = -> assignment operator
re-assignment // = -> assignment operator
x += 12;
x = x + 12;

strings // "word" "pumpkin" "123890yfeafgbfeioufhawe2" " " "8*D)#&%%*(#%&)", "Paul" "Paul Matthews", "23.23.23.23"
numbers // 15, 2, 0, -1, 12.15, 52.55
    integers
    fractional
    make number negative
booleans // true, false -> must be lowercase (language specific)

let 
const

block scope
global scope

## Conditionals (if, else if, else)

boolean expressions // an expression that will return either true or false
conditional logic // our way of controlling the flow of our application we can use conditional statements with boolean expression to create branching pathways
comparison operators // ("0" === 0) ("0" == 0) -> type coercion
    equality operators
    mathematical operators // (5 > 4) true (<)
logical operators // and && or || not !
    ((0 === "0") || (5 > 2)) -> if either of the expressions are true the entire expression resolves to true
    (0 === "0" && 5 > 2) -> BOTH expressions must be true for the entire expression to resolve to true
    ! -> uno reverse card (however the expression resolved it reverses it) (!true) -> false

conditional statements: if // what does this do? if something is true do this

userInput = "5";
sunnyOutSide = true;

// logical operators
// nest our conditionals
// just separate them

if(userInput === "5") {
    console.log("hello you chose 5");
}
else if(userInput === "6") {
    console.log("hello you chose 6");
}
else {
    console.log("hello you chose not 5 or 6");
}

if(sunnyOutSide) {
    console.log("it's not raining");
}


chaining conditionals with else if
else clause

## Loops (while, for, foreach)

while -> runs while some condition is true
while(true) {
    console.log("all work and no play makes jack a dull boy");
}

let x = 0;
while(x < array.length) {
    console.log(array[x]);
    x += 1;
}

for -> runs a set number of times

for(let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

foreach loop
for...of & for...in
for(let element of array) {
    console.log(element);
}

## Base Data Structures 4

### Arrays

ordered collection values are indexed by their position?
let someArr = ["apple", "banana", "carrot", 15, true, ["a", "b"], aDifferentArray]; // location within the array matters

bracket notation
someArr[0] -> "a";

### Key Value Pairs (Object Literals)

key value pair collection values indexed by a unique key

object literal
let someObj = {a: "5", dog: "Bernie"};

accessing values via keys (bracket notation or dot notation)
someObj["a"] -> "5"
someObj.a -> "5"
adding new values with new keys
someObj["cat"] = "Draco"


## Functions

function keyword -> function
function name -> function functionName()
function parameters -> function functionName(firstName, lastName, age) -> values that will be passed into the function/variables
function body -> everything in the curly brackets
function return statement -> returns some value back to the scope that invoked the function -> if a return statement is reached it will end the function

invoking a function -> our way of calling a function to execute someFunctionName(), 
name = "Paul Matthews";
functionName(name.split(" ")[0], name.split(" ")[1], 555);
function invocation arguments




anonymous functions -> function expression
callback function -> a function that is passed as an argument to a completely different function


