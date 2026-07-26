const people = {
    name: "Noman",
    age: 26,
    bodyColor: "ivory",
    favFood: ["Lady's finger", "Caoliflower", "Bitter Gourd"]
}

const keys = Object.keys(people);
// console.log(keys);

for(const key in people) {
    const value = people[key];
    // console.log(key, value);
}

// people.age === 26 ? console.log("Correct"): console.log("Not correct")

function itIsRaining(person, umbrella) {
    const isRainging = true;
    if (isRainging && umbrella >= person ) {
        return "Everyon Has an umbrella";
    }else {
        return "Not everyone has an umbrella";
    }
    
}
const raining = itIsRaining(2,1);
// console.log(raining);

function calcSquare(num) {
    const square = num * num;
    return square;
}

const result = calcSquare(4);
console.log(result);



