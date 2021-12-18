import { Bike, Cars } from "./cars";


let newCar : Cars;
newCar = new Cars(1, "Sedan", new Date());
newCar.getInfo();

let bike : Bike;
bike = new Bike();
bike.getInfo();