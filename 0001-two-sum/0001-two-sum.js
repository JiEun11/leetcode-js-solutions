/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const visitedNumbers = new Map(); // key: 숫자값, value: 인덱스

    for (let index = 0; index < nums.length; index++) {
        const currentNumber = nums[index];
        const complement = target - currentNumber // 1)target에서 뭘 빼야 할까요?

        /* 2) complement가 Map에 있는지 확인 */
        if (visitedNumbers.has(complement)) {
            /* 3) complement의 인덱스 */
            return [visitedNumbers.get(complement), index];
        }

        // 4) 없으면 현재 숫자를 Map에 저장 (무엇을 key, value로?)
        visitedNumbers.set(currentNumber, index);
    }
};