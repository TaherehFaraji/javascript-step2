//spread
const numbers = [1, 2, 3];

console.log(numbers);//[1, 2, 3]
console.log(...numbers);// 1 2 3
////////////////////////////////////////////
const original = [10, 20, 30];
const copy = [...original];//shallow copy

console.log(copy);//[10, 20, 30]
console.log(copy === original);//false
/////////////////////////////////////////////////
const frontend = ["HTML", "CSS", "JS"];
const backend = ["Python", "MySQL"];
const fullstack = [...frontend, ...backend];

console.log(fullstack);//['HTML', 'CSS', 'JS', 'Python', 'MySQL']
//////////////////////////////////////////////////
const frist = [1, 2];
const second = [5, 6];
const combine = [0, ...frist, 3, 4, ...second, 7];

console.log(combine);//[0, 1, 2, 3, 4, 5, 6, 7]
/////////////////////////////////////////////////////
const greeting = "hello";
const chars = [...greeting];

console.log(chars);//['h', 'e', 'l', 'l', 'o']
///////////////////////////////////////////////////////
const defualt = {
    theme: "dark",
    fontSize: 14
};

const userSetting = {
    fontSize: 18
}

const finalSetting = {
    ...defualt, ...userSetting
}

console.log(finalSetting);
/////////////////////////////////////////////////
const defaults = {
    theme: "dark",
    fontSize: 14
};

const copy = {
    ...defaults
};

console.log(copy);
console.log(copy === defaults);
//////////////////////////////////////////////
const defaults = {
    theme: "dark",
    fontSize: 14
};

const userSetting = {
    fontSize: 18
}

const finalSetting = {
    ...defaults, ...userSetting,
    template: "x",
    color: "red"
}

console.log(finalSetting);
////////////////////////////////////////////
function createButton(custom) {
    const defaultOptions = {
        text: "click",
        color: "blue",
        size: "medium"
    };
    const final = { ...defaultOptions, ...custom };
    console.log("button: " + final);
}

createButton({ text: "submit", color: "green" });
///////////////////////////////////////
const todos = [
    { id: 1, text: "learn JS", completed: false },
    { id: 2, text: "practice", completed: false }
];

const updatedTodos = todos.map(todo =>
    todo.id === 2 ? { ...todo, completed: true } : todo
);

console.log(updatedTodos);
console.log(todos[1].completed); // false (original unchanged)
/////////////////////////////////////////
const original = { name: "Ali", address: { city: "Tehran" } };
const shallow = { ...original };

shallow.name = "Reza";
shallow.address.city = "Isfahan";

console.log(original.name);//Ali
console.log(original.address.city);//Isfahan 

//rest
function sum(...numbers) {
    console.log(numbers);
    return numbers.reduce((acc, n) => acc + n, 0);
}

console.log(sum(1, 2, 3, 4,));//10
//////////////////////////////////////
function greet(greeting, ...names) {
    console.log(`${greeting}, ${names.join(' and ')}!`);
}

greet('Hello', 'Sara', 'Ali');//Hello, Sara and Ali!
//////////////////////////////////////////

///////////////////////////////////////
function multiply(factor, ...numbers) {
    return numbers.map(n => n * factor);
}

console.log(multiply(2, 1, 3, 5));//[2,6,10]
///////////////////////////////////

function join(seprator = ",", ...strings) {
    return strings.join(seprator);
}

console.log(join("-", "a", "b", "c"));//a-b-c
//////////////////////////////

const [first, second, ...others] = [10, 20, 30, 40, 50];

console.log(first);//10
console.log(second);//20
console.log(others);//[30,40,50]

const [head, ...tail] = [100, 200, 300]//splitting Head and Tail
///////////////////////////////

const response = {
    status: 200,
    data: {
        user: { name: 'Ali', email: 'Ali@test.com' },
        token: 'abc123'
    },
    meta: { version: '1.0' }
}

const {
    data: { user: { name, ...otherUser }, ...restData },
    ...restResponse
} = response;

console.log(name);//Ali
console.log(otherUser);//{email: 'Ali@test.com'}
console.log(restData);//{token: 'abc123'}
console.log(restResponse);//{status: 200,meta: { version: '1.0' }}