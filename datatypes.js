"use strict";
var gender;
(function (gender) {
    gender[gender["Male"] = 0] = "Male";
    gender[gender["Female"] = 1] = "Female";
})(gender || (gender = {}));
console.log(gender.Male);
console.log(gender.Female);
console.log(gender[0]);
console.log(gender[1]);
var weekEnds;
(function (weekEnds) {
    weekEnds[weekEnds["Saturday"] = 6] = "Saturday";
    weekEnds[weekEnds["Sunday"] = 7] = "Sunday";
})(weekEnds || (weekEnds = {}));
console.log(weekEnds[6]);
console.log(weekEnds[7]);
//Union Type
var sn;
sn = "Codemind";
sn = 10;
// Union types as function parameter as well
function sayHello(arg) {
    if (typeof arg == "number") {
        console.log(typeof arg);
    }
    else if (typeof arg == "string") {
        console.log(typeof arg);
    }
    else {
        return console.log(typeof arg);
    }
}
sayHello(10);
sayHello("Hello");
sayHello(true);
function diffTypes(arg) {
    if (arg == 1) {
        return 1;
    }
    if (arg == 2) {
        return true;
    }
    return 1;
}
diffTypes(1);
diffTypes(2);
function addnum(a, b) {
    return a + b;
}
console.log(addnum(1));
