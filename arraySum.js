/*

Sum of Number Elements in an Array
Arrays can be mixed with various types. Your task for this challenge is to sum all the number elements
 in the given array. Create a function that takes an array and returns the sum of all numbers in the array.

Examples
numbersSum([1, 2, "13", "4", "645"]) ➞ 3

numbersSum([true, false, "123", "75"]) ➞ 0

numbersSum([1, 2, 3, 4, 5, true]) ➞ 15

*/

const sumArray = (array) => {
    let sum = 0;
    function add(e) {
        if (typeof e === 'number') {
        sum += e;
        }
    }
    array.forEach(add);
    return sum;
}

console.log(sumArray([1, 2, '3', 7, true]));