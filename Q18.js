// Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false

// code:
function isPrime(num) {
    if (num <= 1)
        return false;
    if (num <= 3)
        return true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
        return false;
    }

    return true;
}

function Prime(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1 || (arr[i] > 2 && arr[i] % 2 === 0)) {
            return false;
        }
    }
    return true;
}

const num1 = [2, 3, 5, 7];
const num2 = [2, 3, 5, 7, 8];

console.log("Original array of integers: " + num1);
console.log("Are all numbers prime " + Prime(num1));
console.log("Original array of integers: " + num2);
console.log("Are all numbers prime " + Prime(num2));
