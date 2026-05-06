import { PI, add } from './math.js'
console.log(PI);
console.log(add(2, 3));


import { add as sum } from './math.js'
console.log(sum(2, 5));


//default import
import sum from './math.js'
console.log(sum(2, 3));


//import all
import * as MathUtils from './math.js'
console.log(MathUtils.PI);


//side effect import
import './sideEffect.js'


import sum, { PI as PI2 } from './math.js'
console.log(sum(2, 3));
console.log(PI2);


//CommonJS
const MyMath = require('./math.js');
console.log(MyMath.PI);

//dynamic import
let age = 11
if (age > 70) {
    import('./sideEffect.js');
}