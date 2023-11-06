// There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]
// code:
function Sum(arr1, arr2) 
{
    const result = [];
  
    for (let i = 0; i < Math.max(arr1.length, arr2.length); i++)
     {
      result.push((arr1[i] || 0) + (arr2[i] || 0));
    }
  
    return result;
  }
  
  const array1 = [1, 0, 2, 3, 4];
  const array2 = [3, 5, 6, 7, 8, 13];
  
  const output = Sum(array1, array2);
  console.log(output);
  