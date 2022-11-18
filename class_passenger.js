var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    Passenger.prototype.display = function () {
        console.log(this.firstName + " " + this.lastName + " " + this.frequentFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jsck", "Sparrow", 102);
console.log(passenger);
