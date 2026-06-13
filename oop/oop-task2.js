class Wallet {
    #accountBalance;

    constructor(amount) {
        this.#addMoney(amount);
    }

    #addMoney(newAmount) {
        if (newAmount <= 0) {
            console.log("The amount of money entered is not correct");
        } else {
            this.#accountBalance = newAmount;
        }

    }

    getBalance() {
        console.log(this.#accountBalance);
    }
}

const account = new Wallet(200);
account.getBalance();
// ////////////////////////////////////////////////////////////////////////
class User {
    #email;

    constructor(email) {
        this.email = email;
    }

    set email(newEmail) {
        if (!newEmail.includes("@")) {
            console.log("The email entered is not valid");
            return;
        }
        this.#email = newEmail;
    }

    get email() {
        if (!this.#email) {
            return "Email is not available";
        }
        const [username, domain] = this.#email.split("@");
        const maskedUsername = "*".repeat(username.length);
        return `${maskedUsername}@${domain}`;
    }
}

const email = new User("tahereh@gmail.com");//1
email.email = "faraji%gmail.com";//2
console.log(email.email);
const email2 = new User("test#gmail.com");
console.log(email2.email);
///////////////////////////////////////////////////////////////////////
class DebitCardPayment {
    payment() {
        console.log("You paid with a debitCard");
    }
}

class CreditCardPayment {
    payment() {
        console.log("You paid with a creditCard");
    }
}

class CryptocurrencyPayment {
    payment() {
        console.log("You paid with a cryptocurrency");
    }
}

function paymentWay(instruments) {
    for (const instrument of instruments) {
        instrument.payment();
    }
}

const instrument = [
    new DebitCardPayment(),
    new CreditCardPayment(),
    new CryptocurrencyPayment()
];

paymentWay(instrument);