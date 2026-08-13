let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day");
}


// User Role

let role = "student";

switch (role) {
    case "admin":
        console.log("Admin Dashboard");
        break;

    case "student":
        console.log("Student Dashboard");
        break;

    case "teacher":
        console.log("Teacher Dashboard");
        break;

    default:
        console.log("Unknown Role");
}


// Calculator

let operator = "*";
let a = 10;
let b = 5;

switch (operator) {
    case "+":
        console.log(a + b);
        break;

    case "-":
        console.log(a - b);
        break;

    case "*":
        console.log(a * b);
        break;

    case "/":
        console.log(a / b);
        break;

    default:
        console.log("Invalid Operator");
}