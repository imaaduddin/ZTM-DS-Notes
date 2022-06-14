// Rule 4: Drop Non Dominants 

function printAllNumbersThenAllPairSums(numbers) {
    console.log('These are the numbers');
    numbers.forEach((number) => {
        console.log(number);
    });

    console.log('and these are their sums:');
    numbers.forEach((firstNumber) => {
        numbers.forEach(secondNumber => {
            console.log(firstNumber + secondNumber);
        });
    });
}

printAllNumbersThenAllPairSums([1,2,3,4,5]);
// O(n + n^2)
// O(n^2)