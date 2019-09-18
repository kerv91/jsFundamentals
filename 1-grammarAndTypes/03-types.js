// BOOLEANS
//- a boolean has two possible values of either true or false

let on = true;
console.log (on);
let off = false;
console.log (off);

//NULL
//- null is an empty value. Think of it like an empty container: nothing is inside of it
let empty = null;
console.log (empty);

//UNDEFINED
// undefined - no value is assigned and does not act as an empty container
let undef = undefined; //instead of assigning our undef variable a datetype of undefined, we can simply just declare the variable.
console.log(undef); //undefined
let correct; //write like this instead
console.log(correct); //undefined

//NULL vs. UNDEFINED
//- null is like a containter with nothing in it 
//- undefined is when a variable has never been set, or hasn't been created yet. 
// Think of variables with null and undefined as packages coming out of UPS
// Null packages were intentionally packed up with nothing
// Undefined packages are basically boxes needing to be assembled and given something to ship.

// NUMBERS
// numbers are literally just numbers. In JS you don't need anything special to write them.
let degrees = 90;
console.log(degrees);
let precise = 999999999999999; // 15 9's
console.log(precise); // 999999999999999
let rounded = 9999999999999999; // 16 9's: JS gives you space for 15 9s before it rounds up
console.log(rounded); // 10000000000000000
let notQuite = 0.2 + 0.1;
console.log(notQuite); // 0.30000000000000004// JS rounds out at a certain number, so if math is needed, be aware
let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10; // we can still do math with JS, though
console.log(numbersAreHard); // 0.3
// Quick Discussion :
let a = Number('123') // turns strings into numbers. +'123' has the same effect
console.log(a);

// STRINGS
// strings are Datatypes used to represent text and are either wrapped in either a single or double quote. 
// strings are Primative Datatype. This also includes, Numbers, Booleans, Null, Undefined, and others

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo); // double quotes single quotes
// Numbers vs. Strings
 