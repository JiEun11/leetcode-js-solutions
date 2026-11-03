/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const sum = numbers[left] + numbers[right];

        if (sum === target) {
            return [left+1, right+1]
        }
        else if (sum < target) {
            left++; // Move the left pointer one position to the right.
        }
        else {
            right--; // Move the right pointer one position to the left.
        }
    }    
};