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
    for (let i = 0; i < str.length; i++) {
        // console.log(str[i])
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

// console.log(countVowels("javascript")); // Expected: 3

// Input: a string
// Output: the string without its first and last character
// Returns: a string

function removeFirstAndLast(str) {
    // TODO: slice out the middle portion of the string
    let convertStr = str.slice(1, str.length - 1);
    return convertStr;
}

// console.log(removeFirstAndLast("hello")); // Expected: "ell"

// Input: a sentence (string)
// Output: the shortest word
// Returns: a string

function findShortestWord(sentence) {
    let words = sentence.split(" ");
    let shortest = words[0];
    // TODO: loop through words and compare length
    for (let i = 0; i < words.length; i++) {
        // console.log(words[i].length)
        if (words[i].length < shortest.length) {
            // console.log()
            shortest = words[i];

        }
        // console.log("Current:", words[i]);
        // console.log("Shortest:", shortest);
    }

    return shortest;
}

// console.log(findShortestWord("JavaScript is a fun language")); // Expected: "a"

// Input: an array of numbers
// Output: the second smallest number
// Returns: a number

function findSecondSmallest(numbers) {
    let smallest = Infinity;
    let secondSmallest = Infinity;
    // TODO: loop through and update smallest/secondSmallest correctly
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i]);
        if (numbers[i] < smallest) {
            secondSmallest = smallest;
            smallest = numbers[i];
        } else if (numbers[i] > smallest && numbers[i] < secondSmallest) {
            secondSmallest = numbers[i]
        }
    }

    return secondSmallest;
}

// console.log(findSecondSmallest([10, 5, 8, 20, 15])); // Expected: 8
// console.log(findSecondSmallest([8, 5, 2, 17])); // Expected: 5


// Input: an array of numbers
// Output: how many numbers are divisible by 3
// Returns: a number

function countMultiplesOfThree(numbers) {
    let count = 0;
    // TODO: loop through and count multiples of 3
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 3 === 0) {
            count++;
        }
    }
    return count;
}

// console.log(countMultiplesOfThree([3, 4, 6, 7, 9, 10])); // Expected: 3


// Input: an array of numbers
// Output: the average of all numbers
// Returns: a number

function averageOfArray(numbers) {
    let total = 0;
    // TODO: loop through, sum the numbers, then divide by the count
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }


    return total / numbers.length;
}

// console.log(averageOfArray([2, 4, 6])); // Expected: 4

function listKeys(obj) {
    let keys = [];
    // TODO: loop through the object and collect its keys
    for (let key in obj) {
        keys.push(key);
    }

    return keys;
}

// console.log(listKeys({ name: "Sam", age: 25, city: "Dhaka" }));
// Expected: ["name", "age", "city"]


// Input: an object, a key (string), a default value
// Output: the value at that key, or the default
// Returns: any value

function getValueOrDefault(obj, key, defaultValue) {
    // TODO: check if the key exists in the object
    // console.log(obj[key])
    if (key in obj) {
        // console.log(obj[key]);
        return obj[key]
    } else {
        // console.log(defaultValue)
        return defaultValue;
    }
}

let person = { name: "Sam", age: 25 };
// console.log(getValueOrDefault(person, "age", 0));        // Expected: 25
// console.log(getValueOrDefault(person, "grade", "N/A"));  // Expected: "N/A"


//* Input: a number
// Output: true or false
// Returns: a boolean

function isPerfectSquare(num) {
    // TODO: write your logic here
    let root = Math.sqrt(num);

    return (Number.isInteger(root));
}

// console.log(isPerfectSquare(16)); // Expected: true
// console.log(isPerfectSquare(20)); // Expected: false


// Input: a sentence (string)
// Output: sentence with word order reversed
// Returns: a string

function reverseWords(sentence) {
    // TODO: split into words, reverse the order, and join back together
    let str = sentence.split(" ").reverse().join(" ");
    return str;
}

console.log(reverseWords("hello world")); // Expected: "world hello"
