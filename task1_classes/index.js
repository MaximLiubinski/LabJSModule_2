const Sedan = require('./sedan');
const Van = require('./van');
const Track = require('./truck');
const TaxiStation = require('./taxiStation')

let taxiStation = new TaxiStation();

let sedan = new Sedan(10000, 2007, 12, 3);
sedan.moving();

taxiStation.addVehicle(sedan);
taxiStation.addVehicle('fly');
taxiStation.addVehicle(new Van(15000, 2010, 15, 10));
taxiStation.addVehicle(new Track(20000, 2008, 8, 3.5));

console.log('total cost of cars: ' + taxiStation.totalCurrentCost());
taxiStation.sortByPetrolConsumption();

taxiStation.findVehicleByYear(2007, 2009);