const numbers = [400, 23, 123, 442, 7034, 9002, 1200, 10000];

let largest = numbers[0]; //* ekta number dhore nisi jate compare kora jay

for (let i = 1; i < numbers.length; i++) {
    // console.log(numbers[i])
    let numberC = numbers[i];
    if (numberC > largest) {

        largest = numbers[i];
    }
}
console.log("Largest value is ->> ", largest);