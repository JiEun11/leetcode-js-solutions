/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numberSet = new Set(nums);
    let longestStreak = 0;

    for (const number of numberSet) {
        // 1. Check the number is a starting point
        if (!numberSet.has(number-1)) {
            let currentNumber = number;
            let currentStreak = 1;

            // 2. Check whether the next number is in a set.
            while (numberSet.has(currentNumber+1)) {
                currentNumber += 1;
                currentStreak += 1;
            }

            // 3. Update the logestStreak
            longestStreak = Math.max(currentStreak, longestStreak);
        }
    }

    return longestStreak;
};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna