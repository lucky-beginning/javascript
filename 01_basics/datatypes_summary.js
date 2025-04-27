//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('122');
const secondId = Symbol('122');

// console.log(id === secondId);

const bigNumber = 25151561564564145n
// console.log(typeof bigNumber);


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["ironMan", "captainAmerica", "spiderMan"];
// console.log(heros);

let object = {
    name : "lucky",
    age : 20,
    gender : "male"
}

// console.log(object);

const myFunction = function() {
    console.log("Hello World");
    
}

console.log(typeof myFunction);

