"use strict";
//Homogenous Array
var courses = ['Anugular', 'React', 'JavaScript'];
console.log(courses);
console.log(courses[0]);
console.log(courses.length);
//Heterogenous Array
var coursediff = ["Angular", 123, true];
console.log(coursediff);
coursediff.push(".Net");
coursediff.push(10);
for (let index = 0; index < coursediff.length; index++) {
    console.log(coursediff[index]);
}
// Array Destructring
var [a, b, c, d, e] = coursediff;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
// Object Destructring
var student = {
    firstName: 'jack',
    lastName: 'Sparrow',
    score: 90
};
var { firstName, lastName, score } = student;
console.log(firstName);
console.log(lastName);
console.log(score);
