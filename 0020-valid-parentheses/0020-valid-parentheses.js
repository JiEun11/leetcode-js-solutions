/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];

    const bracketPairs = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    for (const character of s) {
        // 여는 괄호이면
        if (!bracketPairs[character]) {
            stack.push(character);
        } 
        // 닫는 괄호이면
        else {
            const topOfStack = stack.pop();
            // 짝꿍이 맞지 않으면
            if (bracketPairs[character] !== topOfStack) {
                return false;
            }

        }   
    }
    // stack이 비어있으면 true
    return stack.length === 0;
};