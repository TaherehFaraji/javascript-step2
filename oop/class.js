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

//super
class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}

const dog1 = new Dog("max", "x");
console.log(dog1.name);
console.log(dog1.breed);

//Method Overriding

class Animal {
    makeSound() {
        console.log("generic");
    }
}

class Dog extends Animal {
    makeSound() {
        super.makeSound();
        console.log("woof");
    }
}

const animal = new Animal();
animal.makeSound();
const dog1 = new Dog();
dog1.makeSound();

//example2
class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " started.");
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }
    start() {
        super.start();
        console.log(this.model + " is now ready.");
    }
}

const car1 = new Car("Benz", "gClass");
car1.start();

//Encapsulation
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner;
        this.balance = balance;
    }
}
const account1 = new BankAccount("Tahereh", "1000");
account1.balance = -2000;