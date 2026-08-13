// 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Even Numbers

for (let i = 1; i <= 10; i++) {

    if (i % 2 === 0) {
        console.log(i);
    }

}


// Odd Numbers

for (let i = 1; i <= 10; i++) {

    if (i % 2 !== 0) {
        console.log(i);
    }

}


// Multiplication Table

let number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}


// Sum

let sum = 0;

for (let i = 1; i <= 5; i++) {
    sum = sum + i;
}

console.log("Sum:", sum);