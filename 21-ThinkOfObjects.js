// think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

var decision = "y"; 
var i = 0;
while(decision === "y"){
var car = {};
var makeOfCar = prompt("Type the make of your car");
car.make = makeOfCar; 
var modelOfCar = prompt("Type the model of your car");
car.model = modelOfCar; 
var colorOfCar = prompt("Type the color of your car");
car.color = colorOfCar;
i++; 
console.log("The attributes of your car are", car);
var decision = prompt("Do you want to add attributes of another car? Type y for yes and n for no");

}

