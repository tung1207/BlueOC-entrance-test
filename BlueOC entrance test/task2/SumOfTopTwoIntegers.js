const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to find the sum of the two largest integers in the array
const sumOfTwoLargestIntegers = (arr) => {
    let [max1, max2] = [-Infinity, -Infinity];
    
    arr.forEach(num => {
        if (num > max1) {
            [max2, max1] = [max1, num];
        } else if (num > max2) {
            max2 = num;
        }
    });

    return max1 + max2;
};

// Prompt user input
rl.question("Dãy số nguyên của bạn: ", (input) => {
    const inputArray = input.split(',').map(num => parseInt(num.trim()));
    const result = sumOfTwoLargestIntegers(inputArray);
    
    console.log(`Tổng 2 số nguyên lớn nhất trong dãy số của bạn là ${result}!`);
    rl.close();
});