// Log all pairs of array 
const boxes = ['a','b','c','d','e'];

function logAllPairsOfArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            console.log(array[i],array[j]);
        }
    }
}

logAllPairsOfArray(boxes);

// When you see loops that are nested in become multiplication 
// O(n^2) - Quadratic Time or horrible 😳