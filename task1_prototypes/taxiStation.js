const Car = require('./car');

function TaxiStation() {
    this.carPark = [];
}

TaxiStation.prototype.addVehicle = function(vehicle){
    if(vehicle instanceof Car){
        this.carPark.push(vehicle)
    }else{
        console.log(vehicle + ' is not a car')
    }
}

TaxiStation.prototype.totalCurrentCost = function(){
    return this.carPark.reduce((sum, eachCar)=>{
        return sum + eachCar.currentCost();
    }, 0);
}

TaxiStation.prototype.sortByPetrolConsumption = function(){
    this.carPark.sort((first, second) =>{
        return (first.petrolConsumption - second.petrolConsumption);
    });
}

TaxiStation.prototype.findVehicleByYear = function(minYear, maxYear){
    for(let i = 0; i<this.carPark.length; i++){
        if(this.carPark[i].year >= minYear && this.carPark[i].year <=maxYear){
            console.log(this.carPark[i]);
        }
    }
}

module.exports = TaxiStation;