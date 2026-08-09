/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const indexStack = [];
    const answer = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (indexStack.length !== 0 && temperatures[indexStack[indexStack.length-1]] < temperatures[i]) {
            const poppedIndex = indexStack.pop();
            answer[poppedIndex] = i - poppedIndex;
        }
        indexStack.push(i);
    }
    
    return answer;

};

// Synced seamlessly with LeetHub Pro
// Pro features: https://bit.ly/leethubpro | Free version: https://bit.ly/leethubv4
// Get it here: https://chromewebstore.google.com/detail/bcilpkkbokcopmabingnndookdogmbna