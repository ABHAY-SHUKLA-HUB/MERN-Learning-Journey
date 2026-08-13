// 1 to 10

let i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// Reverse

let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


// Even Numbers

let k = 1;

while (k <= 20) {

    if (k % 2 === 0) {
        console.log(k);
    }

    k++;
}


// Multiplication Table

let number = 7;
let multiplier = 1;

while (multiplier <= 10) {
    console.log(`${number} x ${multiplier} = ${number * multiplier}`);
    multiplier++;
}


// Sum

let n = 1;
let sum = 0;

while (n <= 5) {
    sum = sum + n;
    n++;
}

console.log("Sum:", sum);