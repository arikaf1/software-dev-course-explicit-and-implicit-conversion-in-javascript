/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/
TASK 1

// FIX 1: Explicitly convert "5" to a number
// Using Number() makes the intention obvious and avoids confusion
let result = Number("5") - 2;
console.log("The result is: " + result); // Output: 3


// FIX 2: Boolean("false") is TRUE because it's a non-empty string
// To correctly interpret "false" as a boolean, compare the string value
let isValid = ("false" === "true"); 
// This will now correctly evaluate to false

if (isValid) {
    console.log("This is valid!");
} else {
    console.log("This is NOT valid!"); // Correct output
}


// FIX 3: Convert "25" to a number before adding
// Without conversion, "25" + 5 becomes "255" (string concatenation)
let age = Number("25");
let totalAge = age + 5;

console.log("Total Age: " + totalAge); // Output: 30

TASK 2: EXAMPLE 1

let implicitExample = "10" * 2;

// JavaScript automatically converts "10" (string) into a number
console.log(implicitExample); // 20

// Show types before and after
console.log(typeof "10"); // string
console.log(typeof implicitExample); // number

EXAMPLE 2

let value = "hello";

// Convert string to number (this will fail → NaN)
let convertedValue = Number(value);

// Show results
console.log("Original value:", value); // "hello"
console.log("Converted value:", convertedValue); // NaN

// Show types
console.log(typeof value); // string
console.log(typeof convertedValue); // number (NaN is still a number!)


BONUS

let nullValue = null;

// Convert null to number
let convertedNull = Number(null);

console.log("Original:", nullValue); // null
console.log("Converted:", convertedNull); // 0

console.log(typeof nullValue); // object (weird JavaScript behavior)
console.log(typeof convertedNull); // number