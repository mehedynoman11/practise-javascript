//* Guess the result of "5" == 5 and "5" === 5 first, then write code to verify your guess.

// if ("5" == 5 || "5" === 5) {
//     console.log("True");
// } else {
//     console.log("False");
// }

// "5" == 5
// "5" === 5
// console.log(typeof "5");
// console.log(typeof 5);

//! Create a variable isRaining (true/false). If it is true, print "Take an umbrella".

const isRaining = true;

// if (isRaining) {
//     console.log("Take an umbrella")
// } else {
//     console.log("Go by foot")
// }

// todo: Take a variable stock. If stock is 0, print "Out of stock" (use only if, no else).

// let stock = 0;
// if (stock) {
// }
// console.log("Out of stock")

// todo: Take a number variable and check whether it is positive or negative (using if-else).

// let number = 6;

// if (number > 0) {
//     console.log("positive");
// } else if (number < 0) {
//     console.log("negetive");
// }
//  * Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

// let year = 2028;

// if (year % 4 === 0) {
//     console.log("Leap year");
// } else {
//     console.log("Not leap year");
// }

// ! Using age and hasTicket, print "Entry allowed" if age is above 18 AND the person has a ticket (use &&).

// let age = 18;
// const hasTicket = true;

// if (age >= 18 && hasTicket) {
//     console.log("Entry allowed");
// } else {
//     console.log("No Entry");
// }

//!* Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.
// let mark = 66;

// if (mark >= 80) {
//     console.log("A+");
// } else if(mark >= 70 ) {
//     console.log("A");
// } else if(mark >= 60) {
//     console.log("B");
// }else if (mark >= 50 ) {
//     console.log("C");
// } else if (mark < 50){
//     console.log("F");
// }

// * Using a month number (1-12), determine which season that month falls in (Winter, Summer, Monsoon, etc.).

// let month = 3;

// if (month >= 1 && month <= 12) {
//     if (month === 1 || month === 2 || month === 12) {
//         console.log("winter")
//     } else if (month === 3 || month === 4) {
//         console.log("Summer")
//     } else if (month === 5 || month === 6) {
//         console.log("Monsoon")
//     }
// }

//! Using isLoggedIn and isAdmin, build a nested condition — if logged in and admin, print "Admin Dashboard"; if logged in but not admin, print "User Dashboard"; if not logged in, print "Please Login".

// const isLoggedIn = true;
// const isAdmin = true;

// if (!isLoggedIn) {
//     console.log("Please Login");

// } else if (isLoggedIn) {
//     if (isAdmin) {
//         console.log("Admin Dashboard");
//     }
//     else {
//         console.log("User Dashboard");
//     }
// } else if (!isAdmin) {
//     console.log("User Dashboard");
// } 


//* Build a simple discount system: if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000, apply a 10% discount; otherwise, no discount — use logical operators combined with if-else if.

const totalPrice = 1500
const isMember = false;

if (totalPrice > 1000 && isMember) {
    const totalDiscount = 20;
    const discount = totalPrice * totalDiscount / 100
    const discountPrice = totalPrice - discount;
    console.log(discountPrice);
} else if (totalPrice > 1000) {
    const totalDiscount = 10;
    const discount = totalPrice * totalDiscount /100
    const discountPrice = totalPrice - discount;
    console.log(discountPrice);
}

