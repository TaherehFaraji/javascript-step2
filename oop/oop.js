const car = {
    color: "black",
    brand: "BMW",
    year: "2026",//property

    start: function () {//method
        console.log("Car started.");
    },
    showInfo: function () {
        console.log("Color is" + this.color)
        console.log("Brand is" + this.brand)
    }
};
console.log(car.brand);
car.start();//use method
car.showInfo();

//example2
const student = {
    name: "Tahereh",
    age: "18",
    majer: "Math",

    intro: function () {
        console.log("My name is" + this.name)
        console.log("I am" + this.age + "years old.")
        console.log("My majer is" + this.majer)
    }
};
student.intro();

//constructor function
function Car(brand, color, year) {
    this.brand = brand;
    this.color = color;
    this.year = year;

    this.showInfo = function () {
        console.log("Color is" + this.color)
        console.log("Brand is" + this.brand)
    };
}

const car1 = new Car("Benz", "blue", 2022);
const car2 = new Car("Benz", "white", 2025);

console.log(car1);
console.log(car2);
car1.showInfo();


//حافظه کمتری بگیرد
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.showInfo = function () {
    console.log("Model is" + this.model)
    console.log("Brand is" + this.brand)
}

const cars1 = new Car("Benz", "gclass");
const cars2 = new Car("Benz", "s500");

cars1.showInfo();
cars2.showInfo();

const x = [];
x.push(10);
