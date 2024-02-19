var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log("Before remove Duplicate Items: ".concat(inputArr));
var uniqueArray = inputArr.filter(function (item, index) { return inputArr.indexOf(item) === index; });
console.log("After remove Duplicate Items: ".concat(uniqueArray));
console.log(" ");
var removeDuplicate = ["Pratiksha", "Rutuja", "Sanju", "Kishor", "Aparna"];
console.log("Before remove Duplicate Items: ".concat(inputArr));
var newArray = removeDuplicate.filter(function (item, index) { return removeDuplicate.indexOf(item) === index; });
console.log("After remove Duplicate Items: ".concat(newArray));
