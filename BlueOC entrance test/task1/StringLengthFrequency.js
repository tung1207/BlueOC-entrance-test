const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the most frequent string lengths and return the corresponding strings
const mostFrequentStringLengths = (arr) => {
    const lengthFrequency = {};
    const lengthMap = {};

    arr.forEach(str => {
        const len = str.length;
        lengthFrequency[len] = (lengthFrequency[len] || 0) + 1;
        lengthMap[len] = lengthMap[len] || [];
        lengthMap[len].push(str);
    });

    const maxFrequency = Math.max(...Object.values(lengthFrequency));
    return Object.keys(lengthFrequency)
        .filter(len => lengthFrequency[len] === maxFrequency)
        .reduce((acc, len) => [...acc, ...lengthMap[len]], []);
};

// Prompt user input
rl.question("An array of strings: ", (input) => {
    const inputArray = eval(input);  // Assume input is always correct and valid
    const result = mostFrequentStringLengths(inputArray);
    
    console.log('An array of strings with the most frequent lengths is:', result, '!');
    rl.close();
});