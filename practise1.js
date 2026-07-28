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
    for(let i=str.length - 1;i>=0;i--) {
        console.log(i, "->", str[i]);
        reversedStr+=str[i];
    }

return Number(reversedStr)
}

console.log(reverseNumber(1234)); // Expected: 4321
console.log(reverseNumber(7));    // Expected: 7

