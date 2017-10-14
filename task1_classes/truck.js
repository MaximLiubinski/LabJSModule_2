const Car = require('./car');

class Truck extends Car {
    constructor(newCost, year, petrolConsumption, carryingTons){
        super(newCost, year, petrolConsumption)
        this.carryingTons = carryingTons;
    }
}

module.exports = Truck;