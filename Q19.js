// Write a JavaScript program that accepts a string as input and swaps the case of each character. 
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.
// code:
function swap(inputString) {
    let result = '';

    for (let i = 0; i < inputString.length; i++) {
        let char = inputString[i];

        if (char.toUpperCase() === char) {
            result += char.toLowerCase();
        }
        else {
            result += char.toUpperCase();
        }
    }

    return result;
}

const inputString = 'The Quick Brown Fox';
const outputString = swap(inputString);

console.log(outputString)  