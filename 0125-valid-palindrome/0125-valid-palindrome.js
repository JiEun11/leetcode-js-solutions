/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let left = 0;
    let right = s.length-1;

    while (left < right) {
        // Check whether a character is a letter or digit.
        const isLeftLetterOrDigit = /[a-z0-9]/i.test(s[left]);
        const isRightLetterOrDigit = /[a-z0-9]/i.test(s[right]);

        if (!isLeftLetterOrDigit) {
            left++;
            continue;
        }
        if (!isRightLetterOrDigit) {
            right--;
            continue;
        }

        if (s[left].toLowerCase()!== s[right].toLowerCase()) {
            return false;
        } 
        else {
            left++;
            right--;
        }

    }
    return true;
};