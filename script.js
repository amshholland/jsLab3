// Declare a variable named submissions that is initialized to an array
let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true }];

// Functionality: construct an object and push it into the array.The object must
// have the same properties as the objects already in the array.Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.
function addSubmission(array, newName, newScore, newDate) {
    let newSubmission = [{ name: "Ernie", score: 102, date: "2020-04-13", }];

    if (newSubmission.score >= 60) {
        newSubmission.passed = true;
    }
    else {
        newSubmission.passed = false;
    }
}

// Functionality: remove the object from the array at the specified index using the
// splice method.
function deleteSubmissionByIndex(array, index) {

}

// remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.
function deleteSubmissionByName(array, name) {

}

// update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.
function editSubmission(array, index, score) {

}

// return the object in the array that has the provided name. Use the
// find method
findSubmissionByName(array, name){

}

// return the object in the array that has the lowest score. Use the
// forEach method to loop through the whole array
findLowestScore(array) {

}

// return the average quiz score. Use a for...of loop
findAverageScore(array) {

}

// return a new array using the filter method. The filter method
// should find objects in the array that have passing scores
filterPassing(array) {

}

// return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.
filter90AndAbove(array){

}

