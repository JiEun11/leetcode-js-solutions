/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const seen = new Map(); // key: number, value: nums index
    for (let index = 0; index < nums.length; index++ ) {
        const complement = target - nums[index];

        if (seen.has(complement)) {
            return [seen.get(complement), index];
        }
        seen.set(nums[index], index);
    }
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna