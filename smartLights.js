class HomeLights {
    #numberOfLampsAlwaysOn = 1;

    constructor(AllLamps) {
        this.AllOffLampsInHome = AllLamps - this.#numberOfLampsAlwaysOn;
        this.lampIsOn = false;

        this.lampsArray = new Array(this.AllOffLampsInHome).fill(false);
        this.lampsOnCount = 0;
    }

    allLights() {
        console.log(this.AllOffLampsInHome + " lamps are in here");
    }

    turnOn(lampsTurnOn) {
        this.allLights();

        this.lampIsOn = true;
        this.lampsTurnOn = lampsTurnOn;
        this.newAllOffLampsInHome = this.AllOffLampsInHome - lampsTurnOn;

        console.log("There are " + this.lampsTurnOn + " lamps on in home");
        console.log(this.newAllOffLampsInHome + " lamps are still off in home");

    }

    turnOff(lampsTurnOff) {
        this.lampIsOn = false;
        this.lampsTurnOn -= lampsTurnOff;

        console.log(lampsTurnOff + " lamps turned off");
        console.log(this.lampsTurnOn + " lamps are on in home");
    }

    turnOnByIndex(index) {
        if (this.lampsArray[index] === false) {
            this.lampsArray[index] = true;
            this.lampsOnCount++;
            console.log(`Lamp ${index} turned ON`);
        }
    }

    turnOffByIndex(index) {
        if (this.lampsArray[index] === true) {
            this.lampsArray[index] = false;
            this.lampsOnCount--;
            console.log(`Lamp ${index} turned OFF`);
        }
    }
}

class KitchenLights extends HomeLights {
    constructor(AllLamps) {
        super(AllLamps);
        this.lampIsOn = false;
    }

    turnOn(lampsTurnOn) {
        super.allLights();

        this.lampIsOn = true;
        this.AllOffLampsInkitchen = this.AllOffLampsInHome - lampsTurnOn;
        this.lampsTurnOn = lampsTurnOn;

        console.log("There are " + this.lampsTurnOn + " lamps on in kitchen");
        console.log(this.AllOffLampsInkitchen + " lamps are still off in home");

    }

    turnOff(lampsTurnOff) {
        this.lampIsOn = false;
        this.lampsTurnOn -= lampsTurnOff;

        console.log(lampsTurnOff + " lamps turned off");
        console.log(this.lampsTurnOn + " lamps are on in kitchen");
    }
}

class BedroomLights extends HomeLights {
    constructor(AllLamps) {
        super(AllLamps);
        this.lampIsOn = false;
    }

    turnOn(lampsTurnOn) {
        super.allLights();

        this.lampIsOn = true;
        this.AllOffLampsInRoom = this.AllOffLampsInHome - lampsTurnOn;
        this.lampsTurnOn = lampsTurnOn;

        console.log("There are " + this.lampsTurnOn + " lamps on in badroom");
        console.log(this.AllOffLampsInRoom + " lamps are still off in home");
    }

    turnOff(lampsTurnOff) {
        this.lampStatus = false;
        this.lampsTurnOn -= lampsTurnOff;

        console.log(lampsTurnOff + " lamps turned off");
        console.log(this.lampsTurnOn + " lamps are off in bedroom");
    }
}

const lights = [
    new HomeLights(15),
    new KitchenLights(9),
    new BedroomLights(5)
];

lights.forEach(lamp => {
    lamp.turnOn(3);
    lamp.turnOff(1);
});