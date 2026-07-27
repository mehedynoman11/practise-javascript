const numbers = [400, 23, 123, 442, 7034, 9002, 1200, 10000];

let largest = numbers[0]; //* ekta number dhore nisi jate compare kora jay

for (let i = 1; i < numbers.length; i++) {
    // console.log(numbers[i])
    let numberC = numbers[i];
    if (numberC > largest) {

        largest = numbers[i];
    }
}
// console.log("Largest value is ->> ", largest);

//! Sum average 

const number_2 = [10, 25, 30, 42, 74, 92];

let sum = 0;
for (let i = 0; i < number_2.length; i++) {
    // console.log(number_2[i])
    sum += number_2[i];
}
// console.log(sum)
let sumAverage = sum / number_2.length;
// console.log(sumAverage)


function getSumAverage(arr, value) {
    let filteredArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > value) {
            // console.log(arr[i])
            filteredArray.push(arr[i]);
        }
    }
    return filteredArray;

}

let result = getSumAverage([10, 25, 30, 42, 74, 92], 40);
console.log(result);