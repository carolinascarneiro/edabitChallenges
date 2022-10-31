/*Hitting the Jackpot
Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, 
and false otherwise. The array will contain 4 elements.

Examples
testJackpot(["@", "@", "@", "@"]) ➞ true

testJackpot(["abc", "abc", "abc", "abc"]) ➞ true

testJackpot(["SS", "SS", "SS", "SS"]) ➞ true

testJackpot(["&&", "&", "&&&", "&&&&"]) ➞ false

testJackpot(["SS", "SS", "SS", "Ss"]) ➞ false
Notes
The elements must be exactly identical for there to be a jackpot.*/

const testJackpot = (array) => {
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] !== array[i+1]) {
            return false;
        }
    }
    return true;
}

/* QUESTIONS
1. How to do this with a ternary operator?
2. Is there a fancier way of solving it overall? Maybe with array methods?
 */

console.log(testJackpot([1, 1, 1, 1]));