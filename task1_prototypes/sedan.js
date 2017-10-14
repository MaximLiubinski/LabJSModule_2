const Car = require('./car');

function Sedan(newCost, year, petrolConsumption, seats){
    Car.apply(this, arguments);
    this.seats = seats;
}

Sedan.prototype = Object.create(Car.prototype);
Sedan.prototype.constructor = Sedan;

module.exports = Sedan;