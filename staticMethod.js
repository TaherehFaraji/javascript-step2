class User {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello ${this.name}`);
    }

    static info() {
        console.log("This is a user class")
    }
}

const u1 = new ("Ali");
u1.sayHello();//instance
User.info();//static
/////////////////////////////////////////////////
class Book {
    static title = "Javascript Basic";

    static showTitle() {
        console.log(this.title);//this -> book
    }
}

Book.showTitle();
//////////////////////////////////////////////////
class Demo {
    static staticMethod() {
        //this.normalMethod()  false
        const obj = new Demo();
        obj.normalMethod();
    }

    normalMethod() {
        console.log("normal method")
    }
}
/////////////////////////////////////////////////
class StringHelper {
    static toUpper(text) {
        return text.toUpperCase();
    }

    static toLower(text) {
        return text.toLowerCase();
    }
}

console.log(StringHelper.toUpper("hello"));

class Validator {
    static isEmail(value) {
        return value.includes("@");
    }
}

console.log(Validator.isEmail("test@gmail.com"));