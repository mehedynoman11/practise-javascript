const people = {
    name: "Noman",
    age: 26,
    bodyColor: "ivory",
    favFood: ["Lady's finger", "Caoliflower", "Bitter Gourd"]
}

const keys = Object.keys(people);
// console.log(keys);

for (const key in people) {
    const value = people[key];
    // console.log(key, value);
}

// people.age === 26 ? console.log("Correct"): console.log("Not correct")

function itIsRaining(person, umbrella) {
    const isRainging = true;
    if (isRainging && umbrella >= person) {
        return "Everyon Has an umbrella";
    } else {
        return "Not everyone has an umbrella";
    }

}
const raining = itIsRaining(2, 1);
// console.log(raining);

function calcSquare(num) {
    const square = num * num;
    return square;
}

const result = calcSquare(4);
// console.log(result);

const laptop = {
    brand: "HP",
    model: "EliteBook 830 G5",
    ram: "16B",
    color: "Silver",
    processor: "Core i7 vPro 8th Gen",
    serial: 11373132,
}

// console.log(laptop);
for (let key in laptop) {
    // console.log(key, " : ", laptop[key]);
}
const objkey = Object.keys(laptop);
// console.log(objkey);

for (let key of objkey) {
    // console.log(key, ":", laptop[key]);
}

const student = {
    name: "Noman",
    age: 26,
    department: "Computer Science and Engineering",
    university: "University of South Asia",
    skills: ["HTML", "CSS", "JavaScript"],
    isStudent: true
};


function objKeyFunc(obj) {
    for (let key in obj) {
        console.log(key, " ");
    }

    for (let key in obj) {
        console.log(obj[key]);
    }

    for (let key in obj) {
        console.log(key, ":", obj[key]);
    }

    let objectKyCount = Object.keys(obj).length;
    console.log("Total Properties :", objectKyCount);

    const hasEmail = obj.hasOwnProperty()
    console.log(hasEmail)
}

objKeyFunc(student);




