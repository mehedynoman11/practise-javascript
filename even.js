const number = [42, 30, 10, 18, 170, 70];
// let sum=0;
// for (const num of number) {
//     sum = sum + num;
//     console.log(num, sum);
// }
// console.log(sum);

function evenNumber(array) {
    let sum = 0;
    for (const num of array) {
        // console.log(num);
        sum = sum + num;
    }
    return sum;
}

const result = evenNumber(number);
// console.log(result);


const number2 = [12, 21, 33, 20, 70, 23, 65, 4];
// let eveNum = [];
// for(const num2 of number2) {
//     // console.log(num);
//     if (num2 % 2 === 0) {
//         eveNum.push(num2);
//         console.log(eveNum);
//     }
// }

function findEven(array_1) {
    let eveNum_2 = [];
    for(const num2 of array_1) {
        if(num2 % 2 === 0) {
            eveNum_2.push(num2);
        }
    }
    return eveNum_2;
}

const result_2 = findEven(number2);
console.log("even array is :", result_2);