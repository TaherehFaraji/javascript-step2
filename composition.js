// class Duck {
//     quack() { console.log('Quack!'); }
//     fly() { console.log('Flying'); }
// }

// class RubberDuck extends Duck {
//     //problem : rubber duck can not fly!!
//     //fly(){/*do nothing? error? ugly}
// }
// ///////////////////////////////////////
// const petrolEngine = {
//     start() { console.log('Petrol engine rumbling..'); },
//     stop() { console.log('Petrol engine off'); }
// }
// const electricEngine = {
//     start() { console.log('Electric engine rumbling..'); },
//     stop() { console.log('Electric engine off'); }
// }
// const car = {
//     engine = petrolEngine,
//     drive() {
//         console.log('Car is moving..');
//         this.engine.start();  //delegation
//     }
// }

// car.engine = electricEngine;
// /////////////////////////////////////////////
// //factory method 
// function createCar(engine) {
//     return {
//         engine: engine,
//         drive() {
//             console.log('driving..');
//             this.engine.start();
//         },
//         setEngine(newEngine) {
//             this.engine = newEngine;
//         }
//     };
// }

// const myPetrolCar = createCar(petrolEngine);
// myPetrolCar.drive();
// //////////////////////////////////////////////
// const canWalk = {
//     walk() { console.log(`${this.name} is walking`); }
// };
// const canSwim = {
//     swim() { console.log(`${this.name} is swimming`); }
// };
// const canFly = {
//     fly() { console.log(`${this.name} is flying`); }
// };

// function createDuck(name) {
//     return Object.assign(
//         {},                  //fresh object
//         canWalk,
//         canSwim,
//         canFly,
//         { name }             //add own property
//     )
// }

// const donald = createDuck('Donald');
// donald.walk();//Donald is walking
// donald.swim();//Donald is swimming
// donald.fly();//Donald is flying
// console.log(donald.name);//Donald
// /////////////////////////////////////
// //Diamond problem

// //      A
// //    /   \
// //    B    C
// //     \  /
// //      D

// const Device = {
//     powerOn() {
//         console.log('Device powering on...');
//     }
// };

// const Scanner = Object.assign({}, Device, {
//     scan() { console.log('Scanning..'); },
//     powerOn() { console.log('Scanner specific power-on'); }
// });

// const Printer = Object.assign({}, Device, {
//     print() { console.log('Printing...'); },
//     powerOn() { console.log('Printer specific power-on'); }
// });
// //now try to create a copier than inherits from both scanner and printer
// const copier = Object.assign({}, Scanner, Printer);
// //which powerOn() ? the last one copied(printer's) overrides scanner's
// //behaviour depends on order not design!!
// ///////////////////////////////////////

//Task =>
const slowWalk = {
    slowWalk() { console.log(`${this.name} walks slowly.`); }
};

const fastWalk = {
    fastWalk() { console.log(`${this.name} walks fast.`); }
};

const no_move = {
    no_move() { console.log(`${this.name} don't move.`); }
};

const speaker = {
    speak() { console.log(`${this.name} speaks.`); }
};

function makeRobot(name, move) {
    return {
        name: name,
        move: move
    }
}

const robot = makeRobot("max", fastWalk);
console.log(robot);
robot.fastWalk();