//Abstraction
class CoffeeMachin {
    #waterAmount = 0;
    #coffeeBeans = 0;

    addWater(amount) {
        this.#waterAmount += amount;
        console.log(amount + "ml added.");
    }

    addCoffeeBeans(amount) {
        this.#coffeeBeans += amount;
        console.log(amount + "gr added.");
    }

    #heatWater() {
        console.log("Heating water..");
    }

    #brewCoffee() {
        console.log("Brewwing coffee..");
    }

    makeCoffee() {
        if (this.#waterAmount < 100) {
            console.log("Not enough water.")
            return;
        }
        if (this.#coffeeBeans < 20) {
            console.log("Not enough coffeeBeans.")
            return;
        }

        this.#heatWater();
        this.#brewCoffee();
        console.log("Coffee is ready.");
    }
}

const coffee = new CoffeeMachin();

coffee.addWater(500);
coffee.addCoffeeBeans(40);
coffee.makeCoffee();


//استفاده متد در constructor...
class Product {
    #price;

    constructor(name, price) {
        this.name = name;
        // this.#price = price;
        this.#setPrice(price);
    }

    #setPrice(newPrice) {
        if (newPrice <= 0) {
            console.log("The price should be greater than zero");
        } else {
            this.#price = newPrice;
        }
    }

    displayInfo() {
        console.log(this.name + " " + this.#price);
    }
}

const product = new Product("pencil", 20000);
product.displayInfo();

//polymorphism

class emailSender {
    send(message) {
        console.log("sending email : " + message);
    }
}

class SMSsender {
    send(SMS) {
        console.log("sending SMS : " + SMS);
    }
}

class PushNotificationSender {
    send(pushNotification) {
        console.log("sending notification : " + pushNotification);
    }
}

function sendMessageToAll(senders, message) {
    for (const sender of senders) {
        sender.send(message);
    }
}

const senders = [
    new emailSender(),
    new SMSsender(),
    new PushNotificationSender()
];

sendMessageToAll(senders, "Hello!");