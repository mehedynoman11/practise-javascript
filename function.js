function doubleOrHalf(price, isDouble) {
    if (isDouble === true) {
        const totalPrice = price * 2;
        return totalPrice;
    }else {
        const priceLeader = price /2 ;
        return priceLeader;
    }
}

const pricePeople = doubleOrHalf(200, true);
// console.log("Price for random person :", pricePeople);

const priceForLeader = doubleOrHalf(200, false);
// console.log("Price for leader :",priceForLeader);

//! array
function numArray (num) {
    const numbers = num;
    // console.log(num[4]);
    return numbers;
}

const num = [12, 23, 11, 2, 6, 7, 122];
const dArray = numArray(num);

// * object method
const student = {
    name: "Sakib",
    id: 173128,
    marks: 70,
    subjects: ["Higher-Mathmatics", "English", "Grammer", "Islamic-Studies"],
}
function studentDetails(student) {
    // console.log("Got the student :-",student);
    const marks = student.marks;
    // console.log("Total mark gotten by the student :-", marks);
    if (marks >= 80) {
        return true;
    } else {
        return false;
    }
}

studentDetails(student);

