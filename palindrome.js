const str = "noman";
let plaindrome = "";
for (let i = str.length - 1; i >= 0; i--) {
    // console.log("->>", i);
    plaindrome = plaindrome + str[i];
}
// if (str === plaindrome) {
//     console.log("Palindrome");
// } else {
//     console.log("Not Palindrome");
// }

// * count word in a sentence

const arr_1 = ["i love bogura"];

// for(let i=0;i<arr_1.length;i++) {
//     let word = arr_1[i].split(" ");
//     console.log(word.length);
// }

function countSentc(arr_2) {
    let word = arr_2.split(" ");
    return word.length;
}
const countOfSentc = countSentc("The Brown Fox Jumping");
console.log(countOfSentc);