// @channel warmup activity:

//Write a function that takes in two numbers and outputs the max (the greater of the two numbers).

// Ex:
// Input: 1, 2
// Output: 2

// Input: 6, -4
// Output: 6

// Input: 3.4, 2
// Output: 3.4

//MINE 
console.log(Math.max(1, 2));
console.log(Math.max(6, -4));
console.log(Math.max(3.4, 2));

//ANOTHER EXAMPLE
var max = function(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
};
