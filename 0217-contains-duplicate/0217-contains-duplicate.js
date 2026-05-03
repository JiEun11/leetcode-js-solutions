/**
 * Brute Force: O(N2) - compare every pair
 * Optimized: O(N) - using Set for O(1) lookup
 *
 * Time: O(N)
 * Space: O(N)
 *
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Edge case
    if (nums.length <= 1 ) return false;

    const visitedNumbers = new Set();

    for (const number of nums) {
        if (visitedNumbers.has(number)) return true;
        visitedNumbers.add(number);
    }
    return false;
};