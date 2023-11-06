// Write a JavaScript function to find the longest common starting substring in a set of strings.
// Sample array : console.log(longest_common_starting_substring(['go', 'google']));
// Expected result : "go"
// code:
function substring(strings)
 {
    if (strings.length === 0) 
    return "";
  
    let result = "";
    const firstString = strings[0];
  
    for (let i = 0; i < firstString.length; i++)
     {
      const Char = firstString[i];
  
      for (let j = 1; j < strings.length; j++)
       {
        if (strings[j][i] !== Char)
         {
          return result;
        }
      }
  
      result += Char;
    }
  
    return result;
  }
  
  console.log(substring(['go', 'google']));
  