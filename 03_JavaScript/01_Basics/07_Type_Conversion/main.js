// String to Number

let age = "20";

let numberAge = Number(age);

console.log(numberAge);
console.log(typeof numberAge);


// Number to String

let marks = 85;

let textMarks = String(marks);

console.log(textMarks);
console.log(typeof textMarks);


// Boolean Conversion

console.log(Boolean(1));
console.log(Boolean(0));

console.log(Boolean("Hello"));
console.log(Boolean(""));


// NaN

let value = Number("Hello");

console.log(value);
console.log(typeof value);


// Implicit Conversion

console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);


// parseInt and parseFloat

console.log(parseInt("25.75"));
console.log(parseFloat("25.75"));


// Practical Example

let price = "500";
let quantity = "2";

let total = Number(price) * Number(quantity);

console.log("Total:", total);