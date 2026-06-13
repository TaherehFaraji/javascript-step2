// function numbers(number) {
//     const one_fiveNumbers = [1, 2, 3, 4, 5];
//     const one_tenNumbers = [...one_fiveNumbers, ...number];

//     console.log(one_tenNumbers);
// }

// numbers([6, 7, 8, 9, 10]);
// ////////////////////////////////////
// const users = [
//     { id: 1, user: { username: "Zahra", password: 4546 } },
//     { id: 2, user: { username: "Nazanin", password: 1234 } },
//     { id: 3, user: { username: "Mahdi", password: 7894 } }
// ];

// function updateUser(userId, changes) {
//     const updatedUsers = users.map(user =>
//         user.id === userId ? { ...user, user: { ...user.user, ...changes.user } } : user
//     );

//     console.log(updatedUsers);
// }

// updateUser(3, { user: { username: "Tahereh" } });
// updateUser(2, { user: { password: 1111 } });
// ////////////////////////////////////////
// const Array = [7, 3, 50, 78, 46, 15, 80];//80

// function findMax(arr) {
//     return Math.max(...arr);
// }

// console.log(findMax(Array));
//////////////////////////////////////////
function average(...scores) {
    let sum = 0
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

console.log(average(2, 6, 14, 8));
///////////////////////////////////
function truncateArray(arr, maxLength) {
    const lastElements = arr.slice(arr.length - maxLength);
    const truncatedArray = arr.slice(0, arr.length - maxLength);

    console.log('last numbers : ' + [...lastElements]);
    console.log('truncated array : ' + [...truncatedArray]);

}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
truncateArray(myArray, 5);
/////////////////////////////////////
const user = {
    username: "Zahra",
    password: 4546,
    email: "test@gmail.com",
    id: 1
}

const { id, ...otherDetails } = user;
console.log(id);