var inputArr = [1, 2, 2, 4, 5, 4, 7, 8, 7, 3, 6];
console.log(`Before remove Duplicate Items: ${inputArr}`);
let uniqueArray = inputArr.filter((item, index) => inputArr.indexOf(item) === index);
console.log(`After remove Duplicate Items: ${uniqueArray}`);

console.log(` `);

var removeDuplicate = ["Pratiksha", "Rutuja","Sanju","Kishor","Aparna"];
console.log(`Before remove Duplicate Items: ${inputArr}`);
let newArray = removeDuplicate.filter((item, index) => removeDuplicate.indexOf(item) === index);
console.log(`After remove Duplicate Items: ${newArray}`);

