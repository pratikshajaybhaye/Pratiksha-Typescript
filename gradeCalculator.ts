

function gardeCalculator(a:number, b : number , c: number) {
    
    // calculate the avaerage of 3 values & divide by 3

    var avg : number = (a + b+ c) / 3;

    if (avg<=70) {
        return`Grade C (${avg})`;
    }else if (avg >70 && avg <90) {
        return`Grade B (${avg})`;
    }else{
        return `Grade A(${avg})`;
    }
}

var math: number = Number(prompt(`Enter the math marks`));
var physics: number = Number(prompt(`Enter the physics marks`));
var Chemistry: number = Number(prompt(`Enter the Chemistry marks`));

var result = gardeCalculator(math, physics, Chemistry)
console.log(result);
alert(result);

