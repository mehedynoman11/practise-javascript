// const text = "Programming";
// let str = "";
// for(let i= text.length-1 ; i >= 0;i--) {
//     // console.log(i);
//     text.split(" ");
//     let letter = text[i];
//     console.log(i," =>", letter);
//     str+= letter;
// }
// console.log(str);

//! vower count
const str_2 = "mahedy hasan noman";
// let vowels = "aeiou"
// // console.log(vowel.includes("o"))
// let count = 0;
// for(let i=0;i<str_2.length;i++) {
//     let letter = str_2[i];
//     console.log("->>>", i, letter);
//     if (vowels.includes(letter) ) {
//         console.log("Vowels");
//         count++;
//     }
// }
// console.log(count);

function countVowel(str) {
    let vowels = "aeiou"
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        // console.log("->>>", i, letter);
        if (vowels.includes(letter)) {
            // console.log("Vowels");
            count++;
        }
    }
    return count;
}

let totalVowelCount = countVowel("Noman");
console.log(totalVowelCount);


