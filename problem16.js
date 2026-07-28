const student = {
    marks: {
        math: 80,
        physics: 90,
    }
}

function calculateAverage(student) {
    const subject = Object.values(student.marks);
    const totalSubjects = subject.length;

    console.log(subject, "subjects");

    let total = 0;
    for (let elem of subject ) {
        // console.log(elem);
        total+=elem;
    }
    // console.log(total);

    return Number((total / totalSubjects).toFixed(2));

}

const result = calculateAverage(student);
// console.log(result)

