const emailUserProvided = 'hILO@gmail.com ';
const emailSavedInDatabase = "hilo@gmail.com"

if (emailUserProvided.toLocaleLowerCase().trim() === emailSavedInDatabase) {
    // console.log("Welcome to the homepage.");
    // console.log(emailUserProvided);
}

const work = "I will go to sylhet tomorrow by bus.";

const workSplit = work.split("");
const reversePart = workSplit.reverse();
const joint = reversePart.join(" ");
// console.log(joint);

let reverseWork = "";

for (const letter of work) {
    reverseWork = letter + reverseWork;
    // console.log(letter, " => ",reverseWork);

}
// console.log(reverseWork);

