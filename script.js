// Declare a variable named submissions that is initialized to an array

let submissions = [
    { name: "Jane", score: 95, date: "2020-01-24", passed: true },
    { name: "Joe", score: 77, date: "2018-05-14", passed: true },
    { name: "Jack", score: 59, date: "2019-07-05", passed: false },
    { name: "Jill", score: 88, date: "2020-04-22", passed: true }];

addSubmission(submissions, "Ernie", 102, "2020-04-13",);
deleteSubmissionByIndex(submissions, 3);
deleteSubmissionByName(submissions, "Joe");
editSubmission(submissions, 3, 61);
// construct an object and push it into the array.The object must
// have the same properties as the objects already in the array.Use conditional
// statements to set the value for the passed property to true if the score is
// greater than or equal to 60 and false otherwise.
function addSubmission(array, newName, newScore, newDate) {
    array.push({ name: newName, score: newScore, date: newDate, passed: newScore >= 60 });
}


// remove the object from the array at the specified index using the
// splice method.
// ***************************************************NOT DELETING
function deleteSubmissionByIndex(array, index) {
    array.splice(index, 1);
    return array;
}

// remove the object from the array that has the provided name.
// Incorporate the findIndex method and the splice method.
// ***************************************************NOT WORKING
function deleteSubmissionByName(array, name) {
    let index = this.array.findIndex(element => element.name === name);
    array.splice(index, 1);
    return array;
}

// update an object’s score in the array at the specified index. Use
// conditional statements to set the value for the passed property to true if the
// score is greater than or equal to 60 and false otherwise.
//**************************************************** */
function editSubmission(array, index, score) {
    array[index] = {}
    const passed = score >= 60 ? "passed" : "failed";
    array.splice(index, 1, passed);
}

// // return the object in the array that has the provided name. Use the
// // find method
function findSubmissionByName(array, name) {
    let find = this.array.find(array => array.name === name);
    return find;
}

// // return the object in the array that has the lowest score. Use the
// // forEach method to loop through the whole array
function findLowestScore(array) {
    let lowest = array.score;

    array.forEach(array => {
        if (array.score < lowest) {
            lowest = array.score;
        };
        return lowest;
    });
}


// return the average quiz score. Use a for...of loop
function findAverageScore(array) {
    let sum = 0;

    for (scores in array.score) {
        sum += array.score;
    }
    return sum / array.length;
}

// return a new array using the filter method. The filter method
// should find objects in the array that have passing scores
function filterPassing(array) {
    return array.filter((array.score) => array.score.includes('true'));
}

// return a new array using the filter method. The filter method
// should find objects in the array that have scores greater than or equal to 90.
function filter90AndAbove(array) {
    let new = [];

}

