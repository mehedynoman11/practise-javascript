//* Module 13: Basic Problem Solving with JavaScript
//todo->> Practice Task
//todo->> Instructions for students:
//todo->> Every task must be solved using a function that returns a value (never just console.log inside the function).
//todo->> Before writing code, write a comment with Input, Output, and Returns — as shown below.
//todo->> Test your function using the provided console.log call at the bottom of each starter snippet.
// Example format to follow for every task:
// Input: a number
// Output: "Positive", "Negative", or "Zero"
// Returns: a string

function getNumberType(number) {
    if (number > 0) {
        return "Positive";
    } else if (number < 0) {
        return "Negative";
    } else if (number === 0) {
        return "Zero";
    }
}
const str = getNumberType(0);
// console.log(str);


// Input: a number
// Output: the number with digits reversed
// Returns: a number

function reverseNumber(num) {
    let str = num.toString();
    // TODO: build the reversed string, then convert back to a number
    // console.log(typeof str)
    let reversedStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(i, "->", str[i]);
        reversedStr += str[i];
    }

    return Number(reversedStr)
}

// console.log(reverseNumber(1234)); // Expected: 4321
// console.log(reverseNumber(7));    // Expected: 7

// Input: a number
// Output: product of its digits
// Returns: a number

function productOfDigits(num) {
    let str = num.toString();
    let total = 1;
    // TODO: loop through each character, convert to number, and multiply
    for (let i = 0; i < str.length; i++) {
        let convertNum = Number(str[i]);
        // console.log(convertNum);
        total = total * convertNum;
    }

    return total;
}

// console.log(productOfDigits(123));  // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0

// Input: a string (lowercase letters only)
// Output: count of vowels
// Returns: a number

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    // TODO: loop through the string and count vowels
    for(let i=0;i<str.length;i++) {
        // console.log(str[i])
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("javascript")); // Expected: 3
