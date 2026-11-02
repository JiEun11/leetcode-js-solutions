/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // Store the frequency of each character in s.
    const charCountMap = new Map(); // {l: 1, o: 2}

    for (let i = 0; i < s.length; i++) {
        if (!charCountMap.has(s[i])) {
            // Initialize the count for a new character.
            charCountMap.set(s[i], 1);
        } else {
            // Increase the count for an existing character.
            charCountMap.set(s[i], charCountMap.get(s[i]) + 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Return the index of the first character that appears once.
        if (charCountMap.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
 
};