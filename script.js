// Declare a variable named submissions that is initialized to an array

let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true }];

console.log("Funct 1 addSubmissions")// ✔
console.log(submissions);
deleteSubmissionByIndex(submissions, 3);
console.log("Funct 2 deleteSubmissionByIndex")// ✔
console.log(submissions);
deleteSubmissionByName(submissions, "Joe");
console.log("Funct 3 deleteSubmissionByName")// ✔
console.log(submissions);
editSubmission(submissions, 1, 61);
console.log("Funct 4 editSubmission")// ✔
console.log(submissions);
console.log("Funct 5 findSubmissionByName")// ✔
console.log(findSubmissionByName(submissions, "Ernie"));
console.log("Funct 6 findLowestScore")// ✔
console.log(findLowestScore(submissions));
console.log("Funct 7 findAverageScore")// ✔
console.log(findAverageScore(submissions));
console.log("Funct 8 filterPassing")// ✔
console.log(filterPassing(submissions));
console.log("Funct 9 filter90AndAbove")// ✔
console.log(filter90AndAbove(submissions));

function addSubmission(array, newName, newScore, newDate) {
    array.push({ name: newName, score: newScore, date: newDate, passed: newScore >= 60 });
}

function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
}

function deleteSubmissionByName(array, name) {
    const index = array.findIndex((element) => element.name === name);
    array.splice(index, 1);
}

function editSubmission(array, index, score) {
    let edit = array[index];
    edit.score = score;
    edit.passed = score >= 60;
}

function findSubmissionByName(array, name) {
    const submission = array.find((element) => element.name === name);
    return submission;
}

function findLowestScore(array) {
    let lowest = array[0];

    array.forEach(quiz => {
        if (quiz.score < lowest.score) {
            lowest = quiz;
        };
    });
    return lowest;
}

function findAverageScore(array) {
    let sum = 0;

    for (submission of array) {
        sum += submission.score;
    }
    return sum / array.length;
}

function filterPassing(array) {
    return array.filter(submission => submission.passed);
}

function filter90AndAbove(array) {
    return array.filter(submission => submission.score >= 90);
}