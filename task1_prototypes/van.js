const Car = require('./car');

function Van(newCost, year, petrolConsumption, seats){
    Car.apply(this, arguments);
    this.seats = seats;
}

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;

module.exports = Van;