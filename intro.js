// let num = 23;
// // console.log(num);
// let num2 = 4.5;
// // const totalnum = num / num2;
// const totalnum = "20.4";
// let totalfloat = parseFloat(totalnum);
// console.log(typeof totalfloat);

// let price = "19.99";
// let quantity = 3;
// let taxRate = "0.08";

// TODO: Convert and calculate:
// 1. Total before tax
// 2. Tax amount
// 3. Final total with 2 decimal places

// Your code here:

// let priceNum = parseFloat(price);
// let taxNum = parseFloat(taxRate);
// let subtotal = priceNum * quantity;
// let tax = subtotal * taxNum;
// let total = subtotal + tax;
// console.log(total.toFixed(2));
// console.log(total.round());

let price = 200;
let quantity = 3;
let discount = 10;

let totalPrice = (price * quantity);
let priceDiscount = totalPrice / 10;
let finalPrice = totalPrice - priceDiscount;
// console.log(priceDiscount);
console.log("Total Price: "+ totalPrice);
console.log("Discount Amount: "+ priceDiscount);
console.log("Final Price: "+ finalPrice);
