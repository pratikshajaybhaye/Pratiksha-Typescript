"use strict";
function gardeCalculator(a, b, c) {
    // calculate the avaerage of 3 values & divide by 3
    var avg = (a + b + c) / 3;
    if (avg <= 70) {
        return `Grade C (${avg})`;
    }
    else if (avg > 70 && avg < 90) {
        return `Grade B (${avg})`;
    }
    else {
        return `Grade A(${avg})`;
    }
}
var math = Number(prompt(`Enter the math marks`));
var physics = Number(prompt(`Enter the physics marks`));
var Chemistry = Number(prompt(`Enter the Chemistry marks`));
var result = gardeCalculator(math, physics, Chemistry);
console.log(result);
alert(result);
