/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    // Store the frequency of each character.
    const charCounts = new Map(); // {a: 1, n: 2}

    // Count each character in s.
    for (let i = 0; i < s.length; i++) {
        const currentSletter = s[i];
        if (!charCounts.has(currentSletter)) {
            charCounts.set(currentSletter, 1);
        }
        else {
            const counts = charCounts.get(currentSletter);
            charCounts.set(currentSletter, counts+1);
        }
        
    }

    // Decrease the count for each character in t.
    for (let i = 0; i < t.length; i++) {
        const currentTletter = t[i];
        if ((!charCounts.has(currentTletter)) || charCounts.get(currentTletter) === 0) {
            return false;
        }
        // Use one occurrence of the current character.
        charCounts.set(currentTletter, charCounts.get(currentTletter)-1);
    }
    return true;
};