const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'a'];

function containsCommonItem2(arr1, arr2) {
    // loop through first array and create object where properties === items in the array 
    let map = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true;
        }
    }
    // loop through the second array and check if item in the second array exists on created object
    for (let j = o; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true;
        }
    }
    return false;
}

containsCommonItem2(array1, array2);

// cleaner way of writing the above code:
function containsCommonItem3 (arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}

containsCommonItem3(array1, array2);