const Car = require('./car');

function Truck(newCost, year, petrolConsumption, carryingTons){
    Car.apply(this, arguments);
    this.carryingTons = carryingTons;
}
Truck.prototype = Object.create(Car.prototype);
Truck.prototype.constructor = Truck;

module.exports = Truck;
