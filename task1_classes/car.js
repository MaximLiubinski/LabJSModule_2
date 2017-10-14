class Car {
    constructor(newCost, year, petrolConsumption){
        this.newCost = newCost;
        if(year <= new Date().getFullYear()){
            this._currentCost = Math.round(newCost*Math.pow(0.9, (new Date().getFullYear() - year)));
        }else{
            console.error('How did you get this car from the future?');
        }
        this.year = year;
        this.petrolConsumption = petrolConsumption;
        //this._currentCost = Math.round(newCost*Math.pow(0.9, (new Date().getFullYear() - year)));
    }
    get currentCost() {
        return this._currentCost;
    }

    moving(){
        console.log("it's moving!");
    }
}



module.exports = Car;