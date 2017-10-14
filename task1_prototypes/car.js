function Car(newCost, year, petrolConsumption) {
    this.newCost = newCost;
    if (year <= new Date().getFullYear()) {
        this._currentCost = Math.round(newCost * Math.pow(0.9, (new Date().getFullYear() - year)));
    } else {
        console.error('How did you get this car from the future?');
    }
    this.year = year;
    this.petrolConsumption = petrolConsumption;
}

Car.prototype.currentCost = function(){
        return this._currentCost;
    }


Car.prototype.moving = function(){
        console.log("it's moving!");
    }

module.exports = Car;