//Write a JavaScript program to remove duplicate items from an array

let num = [1, 2, 2, 4, 4, 7, 8, 6, 3, 6];
res=Array.from(new Set(num));
console.log(num);
console.log(res);