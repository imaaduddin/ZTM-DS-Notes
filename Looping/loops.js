// Different ways to loop over an array!

const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

// For Loop
const findNemo = (array) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

findNemo(everyone);

// foreach
const findNemo2 = (array) => {
    array.forEach(fish => {
        if (fish === 'nemo') {
            console.log('Found nemo!');
        }
    });
}

findNemo2(everyone);

// For Of
const findNemo3 = (array) => {
    for (let fish of array) {
        if (fish === 'nemo') {
            console.log('Found Nemo!');
        }
    }
}

findNemo3(everyone);