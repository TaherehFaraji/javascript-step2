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

/////////////////////////////////////////////////
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}
Car.prototype.start = function () {
    console.log(this.brand + " started.")
}
//نوشتن با class
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    start() {//method
        console.log(this.brand + " started.")
    }
}

const car3 = new Car("BMW", "i7");
const car4 = new Car("Benz", "gclass");

console.log(car3.brand);
car4.start();

//example2
class Student {
    constructor(name, age, majer) {
        this.name = name;
        this.age = age;
        this.majer = majer;
    }
    intro() {
        console.log("My name is " + this.name)
    }
    study() {
        console.log(this.name + "is studying" + this.majer)
    }
}

const student1 = new Student("Tahereh ", "18", " math");
const student2 = new Student("Zahra ", "17", " Tajrobi");

student1.intro();
student2.study();

//بررسی نوع شی
console.log(student1 instanceof Student);//true
console.log(student1 instanceof Car);//false

//inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(this.name + " is eating.");
    }
}
class Dog extends Animal {
    bark() {
        console.log(this.name + " is barking.");
    }
}

const dog = new Dog("max");
const cat = new Animal("cati");

dog.bark();
dog.eat();
cat.eat();
