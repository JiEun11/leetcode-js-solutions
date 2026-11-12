var moveZeroes = function (nums) {
    let write = 0;

    // Copy nonzero values to the front in their original order.
    for (let read = 0; read < nums.length; read++) {
        if (nums[read] !== 0) {
            nums[write] = nums[read];
            write++;
        }
    }

    // Fill the remaining positions with zeroes.
    while (write < nums.length) {
        nums[write] = 0;
        write++;
    }
};