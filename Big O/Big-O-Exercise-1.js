// What is the Big O of the below function? Hint: (Go line by line)

function funChallenge(input) {
    let a = 10;
    a = 50 + 3;

    for (let i = 0; i < input.length; i++) {
        anotherFunction();
        let stranger = true;
        a++;
    }
    return a;
}

// This will be O(n) b/c input.length --> O(n)