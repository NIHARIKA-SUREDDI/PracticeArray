// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true
// code:
function is_array(input) 
{
    if (Array.isArray(input)) 
    {
        return true;
    } else 
    {
        return false;
    }
};

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
