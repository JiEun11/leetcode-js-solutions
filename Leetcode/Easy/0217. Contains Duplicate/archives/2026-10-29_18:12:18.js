/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
   // Store numbers we've already seen.
    const resultSet = new Set();    //{num}

    for (const num of nums) {
        // If the number has been seen before, it's a duplicate.
        if (resultSet.has(num)) {
            return true;
        }

        resultSet.add(num);
    }
    return false;
};