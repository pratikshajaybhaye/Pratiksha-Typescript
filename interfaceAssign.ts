abstract class car{
    wheel(): string{
        return'4 Wheeler';
    }
    checkAC ():string{
        return 'AC is Available'
    }
    callFacility() : string{
        return "Call Facility Supported"
    }
    abstract price(): number;
    abstract getTotalSeats(): number;
    abstract color(): string;
    gps?: boolean;
}

class toyota extends car{
    price(): number {
        return 1000000;
    }
    getTotalSeats(): number {
        return 5;
    }
    color(): string {
        return 'White';
    } 
}

class Hundyai extends car {
    price(): number {
        return 900000;
    }
    getTotalSeats(): number {
        return 7;
    }
    color(): string {
        return 'gray';
    }
    gps = true;
    }
    
var objtoyota = new toyota();

console.log(objtoyota);

var objhundyai = new Hundyai();

console.log(objhundyai);