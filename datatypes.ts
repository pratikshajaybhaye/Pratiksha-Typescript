

enum gender{
    Male,
    Female
}
console.log(gender.Male);
console.log(gender.Female);

console.log(gender[0]);
console.log(gender[1]);

enum weekEnds{
    Saturday = 6,
    Sunday = 7
}

console.log(weekEnds[6]);
console.log(weekEnds[7]);

//Union Type


var sn : string | number;
sn = "Codemind";
sn = 10;


// Union types as function parameter as well


function sayHello(arg: number | string | boolean) {

    if (typeof arg == "number") {
        console.log(typeof arg);
    } else if (typeof arg == "string") {
        console.log(typeof arg);
        
    } else{
        return console.log(typeof arg);
    }
}
sayHello(10);
sayHello("Hello");
sayHello(true);

function diffTypes(arg : number) : number | boolean{
    if (arg == 1) {
        return 1;
    } if (arg == 2) {
        return true;
    }
    return 1;
}

diffTypes(1);
diffTypes(2);


