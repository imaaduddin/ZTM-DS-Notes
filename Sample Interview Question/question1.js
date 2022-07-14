// given 2 arrays, create a function that let's a user know (true/false) whether these 2 arrays contain any common items
// for example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'i'];
// this should return false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// should return true 

// My solution
// function checkArray(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         for (let j = 0; j < array2.length; j++) {
//             if (array1[i] === array2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// O(a*b)

// Better solution (more efficient)
function checkArray2(array1, array2) {
    // loop through the first array and create a object where properties === item in the array 
    let map = {};
    for (let i = 0; i < array1.length; i++) {
        if (!map[array1[i]]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    // loop through second array and check if item in sec ond array exists on created object
    for (let j = o; j < array2.length; j++) {
        if (map[array2[j]]) {
            return true;
        }
    }
    return false;
}

checkArray2(array1, array2);


// With fewer lines of code
function checkArray3(array1, array2) {
    return array1.some(item => array2.include(item));
}

checkArray3(array1, array2);