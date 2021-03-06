// What is the Big O of the below function? Hint: (Go line by line)

function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)

    for (let i = 0; i < input.length; i++) { // O(n) 'n' is the input, loops are linear time 
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

// 3 + n + n + n + n
// 3 + 4n
// BIG O(3 + 4n)
// This will be O(n) b/c input.length --> O(n)