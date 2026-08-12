// Age and ID Check

let age = 20;
let hasId = true;

if (age >= 18) {

    if (hasId === true) {
        console.log("Entry Allowed");
    } else {
        console.log("ID Required");
    }

} else {
    console.log("Underage");
}


// Login System

let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn) {

    if (isAdmin) {
        console.log("Admin Dashboard");
    } else {
        console.log("User Dashboard");
    }

} else {
    console.log("Please Login");
}


// Marks and Attendance

let marks = 75;
let attendance = 80;

if (marks >= 40) {

    if (attendance >= 75) {
        console.log("Student Passed");
    } else {
        console.log("Attendance Shortage");
    }

} else {
    console.log("Failed in Exam");
}