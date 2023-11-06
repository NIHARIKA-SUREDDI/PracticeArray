// Write a JavaScript function to find an array containing a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]
function sample(arr, element) {
    return arr.includes(element);
  }
  
  const arr = [2, 5, 9, 6];
  console.log(sample(arr, 5));
  