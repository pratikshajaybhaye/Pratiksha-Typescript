interface IExterior {
    color : String;
    noOfDoors: number;

}

interface IInterior{
    seats: number;
    auto: boolean;
}

interface Icar extends IExterior,IInterior{

    make: string;
    model: string;
    year: number;

}

var myCar : Icar ={
    make: "Tata",
    model: "Nexon",
    year: 2024,
    color: "Dark Blue",
    noOfDoors: 4,
    seats: 5,
    auto: true
}

console.log(myCar);
