
let name = "John"; // String
let age = 25; // Number
let isStudent = true; // Boolean


const country = "USA"; 


var occupation = "Engineer";

// Output the variables
console.log("Name: " + name); // John
console.log("Age: " + age); // 25
console.log("Is Student: " + isStudent); // true
console.log("Country: " + country); // USA
console.log("Occupation: " + occupation); // Engineer


name = "Alice"; 
age = 30;
isStudent = false;

console.log("Updated Name: " + name); // Alice
console.log("Updated Age: " + age); // 30
console.log("Updated Is Student: " + isStudent); // false

// Data Types

// String
let str = "Hello, World!";
console.log("String: " + str); 

// Number
let num = 100;
console.log("Number: " + num); 

// Boolean
let isAvailable = false;
console.log("Boolean: " + isAvailable); 

// Undefined
let undefinedVar;
console.log("Undefined: " + undefinedVar); 

// Null
let nullVar = null;
console.log("Null: " + nullVar); 

// Array 
let fruits = ["Apple", "Banana", "Cherry"];
console.log("Array: " + fruits); 

// Object
let person = {
    firstName: "Tom",
    lastName: "Hanks",
    age: 50
};
console.log("Object: " + JSON.stringify(person)); 

// Type Checking
console.log(typeof name); 
console.log(typeof age); 
console.log(typeof isStudent); 
console.log(typeof undefinedVar); 
console.log(typeof person); 
console.log(typeof fruits); 