class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
    showInfo() {
        console.log(this.title + " is written by " + this.author + " cost " + this.price);
    }
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K. Rowling", "20$");
const book2 = new Book("The Alchemist", "Paulo Coelho", "13$");
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "10$");

book1.showInfo();
book2.showInfo();
book3.showInfo();
///////////////////////////////////////////////////////////
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
    login() {
        console.log(this.username + " with " + this.email + " is logged in.");
    }
}

const user1 = new User("Ali", "Ali2026@email.com");
user1.login();
///////////////////////////////////////////////////////////

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    area() {
        const area = this.width * this.height;
        console.log("The area of this rectangle is " + area);
    }
}

const rectangle1 = new Rectangle("10", "15");
rectangle1.area();
/////////////////////////////////////////////////////////
class Person {
    constructor(name) {
        this.name = name;
    }
    introduce() {
        console.log("My name is " + this.name);
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    study() {
        console.log(this.name + " is studing " + this.major);
    }
}

class Employee extends Person {
    constructor(name, job) {
        super(name);
        this.job = job;
    }
    work() {
        console.log(this.name + "'s job is " + this.job);
    }
}

const me = new Person("Tahereh");
me.introduce();
const student = new Student("Zeinab", "mathematics");
student.study();
const employee = new Employee("Ali", "teacher");
employee.work();

class User {
    constructor(username) {
        this.username = username;
    }
    login() {
        console.log(this.username + "  has logged in.");
    }
}
class Admin extends User {
    constructor(username, level) {
        super(username);
        this.level = level;
    }
    login() {
        super.login();
        console.log(this.level + " was successfully registered.");
    }
}
const user = new User("Mehdi");
user.login();
const admin = new Admin("Arad", "content production admin");
admin.login();