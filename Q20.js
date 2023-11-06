// Write a JavaScript function that merges two arrays and removes all duplicate elements.


// code:

function merge_array(array1, array2) {
    const mergedArray = [...new Set([...array1, ...array2])];
    return mergedArray;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
