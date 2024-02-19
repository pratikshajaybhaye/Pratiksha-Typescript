"use strict";
class Cars {
    Wheel() {
        return '4 wheeler';
    }
    CheckAC() {
        return 'AC is available';
    }
    CallFacility() {
        return 'Call Facility supported';
    }
}
class Hundai extends Cars {
    Price() {
        return 1000000; // implementation
    }
    Color() {
        return 'Gray';
    }
    TotalSeats() {
        return 5;
    }
}
class Toyota extends Cars {
    Price() {
        return 1500000;
    }
    Color() {
        return 'White';
    }
    TotalSeats() {
        return 7;
    }
}
var objToyata = new Toyota();
console.log('Toyota', objToyata.TotalSeats());
var objHundai = new Hundai();
console.log('Hundai', objHundai.TotalSeats());
