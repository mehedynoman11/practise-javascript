// const arr = [20, 12, 15, 22, 67, 79, 23, 50];
// let sum = 0;
// for(let i=0;i<arr.length;i++) {
//     // console.log(arr[i]);
//     if (arr[i] % 2 === 0) {
//         sum+= arr[i]
//     }
// }
// console.log(sum);

const arr = [20, 12.0334, -15, 22.563, -67, 79.993332, 0];
let sum = 0;
for(let i=0;i<arr.length;i++) {
    // console.log(arr[i]);
    if (arr[i] > 0) {
        sum+= Number(arr[i].toFixed(3));
    }
}
// console.log(sum);


