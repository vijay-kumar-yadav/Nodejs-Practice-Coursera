/*
Model the car data using object

Car object shoud provide details about cars make, model, color and engine. Engine will provide 
details of its cylinders and size
*/

// object constructor function --------------------------------------->
// multiple instances can be created

function Engine(cylinders, size) {
  this.cylinders = cylinders;
  this.size = size;
}

function Car(make, model, color, cylinders, size) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.engine = new Engine(cylinders, size);
}

//instances of object using new keyword
let vijayCar = new Car("Baleno", "Delta", "steel grey", 1, 2.2);

let jillCar = new Car("Tesla", "R2", "Red", 2, 2.1);

console.log(vijayCar);

console.log(jillCar);

//adding new key values
jillCar.year = 2020;

console.log(vijayCar);

console.log(jillCar);

// object initializer --------------------------------------->
// single instance can be created
let myCar = {
  make: "honda",
  model: "ZXi",
  color: "green",
  engine: {
    cylinders: 4,
    size: 3.1,
  },
};
console.log(myCar);

//accessing values

console.log(myCar["model"]);
console.log(myCar.model);
