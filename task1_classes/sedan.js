const Car = require('./car');

class Sedan extends Car {
    constructor(newCost, year, petrolConsumption, seats){
        super(newCost, year, petrolConsumption)
        this.seats = seats;
    }
}

module.exports = Sedan;