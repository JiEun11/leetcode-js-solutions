/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    // Store the unique numbers from nums1.
    const nums1Set = new Set(nums1);
    
    const intersectionArray = new Array();

    for (const number of nums2) {
        if (nums1Set.has(number)) {
            intersectionArray.push(number);
            nums1Set.delete(number);
        }
    }

    return intersectionArray;
};