var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.wheel = function () {
        return '4 Wheeler';
    };
    car.prototype.checkAC = function () {
        return 'AC is Available';
    };
    car.prototype.callFacility = function () {
        return "Call Facility Supported";
    };
    return car;
}());
var toyota = /** @class */ (function (_super) {
    __extends(toyota, _super);
    function toyota() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    toyota.prototype.price = function () {
        return 1000000;
    };
    toyota.prototype.getTotalSeats = function () {
        return 5;
    };
    toyota.prototype.color = function () {
        return 'White';
    };
    return toyota;
}(car));
var Hundyai = /** @class */ (function (_super) {
    __extends(Hundyai, _super);
    function Hundyai() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gps = true;
        return _this;
    }
    Hundyai.prototype.price = function () {
        return 900000;
    };
    Hundyai.prototype.getTotalSeats = function () {
        return 7;
    };
    Hundyai.prototype.color = function () {
        return 'gray';
    };
    return Hundyai;
}(car));
var objtoyota = new toyota();
console.log(objtoyota);
var objhundyai = new Hundyai();
console.log(objhundyai);
