const desktop = ["monitor", "pc", "mouse", "keyboard", "soundBox"];
// console.log(desktop.length - 1);
// console.log(desktop);
desktop.push("printer");
// console.log(desktop);
// desktop.shift();
// console.log(desktop);
// desktop.unshift();
// console.log(desktop);
// console.log(desktop[3]);
let count = 0;
if (desktop.includes("mouse")) { 
    count += 1 ;
}

// console.log(count);
const fruit = ['mango','grapeFruit','banana','jackfruit'];
// console.log(desktop.concat(fruit));
// const numbers = [2, 323, 42, 332];
// const joined = numbers.join('');
// console.log(joined);
// const indec = numbers.indexOf(42);
// console.log("position of 42", indec)

const number = [44, 23, 21, 11, 17, 20, 78];
const names = ["rakib", "sakib", "akib", "nakib", "zakib"];

for(const numb of number){
    // console.log("value of number :", numb);
}

for(let i=0; i<number.length;i++){
    // console.log("Index of number :", i);
    // console.log("Value of number :", number[i]);
    // console.log(i, number[i]);
}
//* Array Traversal 
// console.log(number.reverse());
for(let i=number.length-1;i>=0; i--){
    // console.log(i, number[i]);
}

//! unshift reverser way 
const reverseArray= [];
for(const numb of number){
    // console.log(numb);
    reverseArray.unshift(numb);
    // console.log(reverseArray);
}

// todo: while loop 
let i=0;
while(i<number.length){
    // console.log(number[i]);
    i++;
} 

// todo: Slice methon 
const animals = ["ant", "bison", "camel", "duck", "elephant"];
// console.log(animals.slice(2));
// console.log(animals.slice(0,3));
// console.log(animals.slice(2,-1));

// console.log([1, 2, , 4, 5].slice(1, 4));

// todo: splice method 

const months = ["jan", "march", "april", "june"];

months.splice(1,0, "feb");
console.log(months);

months.splice(4, 1, "may");
console.log(months);
