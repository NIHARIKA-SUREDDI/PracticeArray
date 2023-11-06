// Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]
// code:
function Array(arr) {
    return arr.filter(Boolean);
  }
  
  const sampleArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
  const result= Array(sampleArray);
  
  console.log(result);
  