// Grade System

let marks = 82;

if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 80) {
    console.log("Grade B");
} else if (marks >= 70) {
    console.log("Grade C");
} else if (marks >= 60) {
    console.log("Grade D");
} else if (marks >= 40) {
    console.log("Grade E");
} else {
    console.log("Fail");
}


// Age Category

let age = 16;

if (age < 13) {
    console.log("Child");
} else if (age < 18) {
    console.log("Teenager");
} else {
    console.log("Adult");
}


// Number Check

let number = 0;

if (number > 0) {
    console.log("Positive");
} else if (number < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}


// User Role

let role = "student";

if (role === "admin") {
    console.log("Admin Dashboard");
} else if (role === "student") {
    console.log("Student Dashboard");
} else if (role === "teacher") {
    console.log("Teacher Dashboard");
} else {
    console.log("Unknown User");
}