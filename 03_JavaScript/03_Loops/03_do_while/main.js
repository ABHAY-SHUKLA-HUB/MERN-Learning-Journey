// Basic do...while

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// Reverse

let j = 5;

do {
    console.log(j);
    j--;
} while (j >= 1);


// Even Numbers

let k = 1;

do {

    if (k % 2 === 0) {
        console.log(k);
    }

    k++;

} while (k <= 10);


// Multiplication Table

let number = 5;
let multiplier = 1;

do {
    console.log(`${number} x ${multiplier} = ${number * multiplier}`);
    multiplier++;
} while (multiplier <= 10);


// Sum

let n = 1;
let sum = 0;

do {
    sum = sum + n;
    n++;
} while (n <= 5);

console.log("Sum:", sum);


// Condition initially false

let x = 10;

do {
    console.log("This runs once");
    x++;
} while (x < 5);