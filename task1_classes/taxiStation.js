const Car = require('./car');

class TaxiStation {
    constructor() {
        this.carPark = [];
    }

    addVehicle(vehicle){
        if(vehicle instanceof Car){
            this.carPark.push(vehicle)
        }else{
            console.log(vehicle + ' is not a car')
        }
    }

    totalCurrentCost(){
        return this.carPark.reduce((sum, eachCar)=>{
            return sum + eachCar.currentCost;
        }, 0);
    }

    sortByPetrolConsumption(){
        this.carPark.sort((first, second) =>{
            return (first.petrolConsumption - second.petrolConsumption);
        });
    }

    findVehicleByYear(minYear, maxYear){
        for(let i = 0; i<this.carPark.length; i++){
            if(this.carPark[i].year >= minYear && this.carPark[i].year <=maxYear){
                console.log(this.carPark[i]);
            }
        }
    }
}

module.exports = TaxiStation;