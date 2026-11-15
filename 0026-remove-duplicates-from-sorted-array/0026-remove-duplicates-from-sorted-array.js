/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 1;

    for (let read = 1; read < nums.length; read++) {
        // Keep the current value if it differs from the last kept value.
        if (nums[read] !== nums[write - 1]) {
            nums[write] = nums[read];
            write++;
        }
    }
    return write;
};