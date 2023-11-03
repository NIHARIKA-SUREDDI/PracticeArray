//Write a JavaScript program to compute the sum and product of an array of integers.
var arr = [1, 2, 3, 4, 5];
var sum = 0;
var product = 1;

for (var i = 0; i < arr.length; i++) 
{
    sum =sum+arr[i];
    product=product*arr[i];
}
console.log("Sum:", sum);
console.log("Product:", product);
