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