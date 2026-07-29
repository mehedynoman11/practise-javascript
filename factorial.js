const number = 5;
let factor = 1;
for (let i = 1; i <= number; i++) {
    // console.log("i =>",i);
    factor = factor * i;
}
// console.log(factor);

function getFactor(num) {
    let factor = 1;
    for (let i = 1; i <= num; i++) {
        // console.log("i => ",i);
        factor = factor * i;
    }
    return factor;
}

const result = getFactor(6);
console.log(result);


// todo: Loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.

const number_3 = 100;
for (let i = 1; i <= number_3; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}
