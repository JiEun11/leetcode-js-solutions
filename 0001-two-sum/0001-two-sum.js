/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map();

    for (let i = 0; i < nums.length; i++) {
       const current = nums[i];
       const complement = target - current;

        // Check whether we have already seen the complement.
       if (seen.has(complement)) {
        return [seen.get(complement), i];
       }

        // Store the current number and its index.
        seen.set(current, i);
    }
};