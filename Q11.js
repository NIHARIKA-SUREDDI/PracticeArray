// Write a JavaScript program to find the sum of squares of a numerical vector.
function Square(vector)
 {
    let sum = 0;
    
    for (let i = 0; i < vector.length; i++)
     {
        sum += vector[i] ** 2;
    }
    
    return sum;
}

let vector = [1, 2, 3, 4, 5];
let result = Square(vector);

console.log(result);
