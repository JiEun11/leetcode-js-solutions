/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    // Store the frequency of each character in magazine.
    const frequencyMap = new Map();

    for (let i = 0; i < magazine.length; i++) {

        if (!frequencyMap.has(magazine[i])) {
            // Initialize the count for a new character.
            frequencyMap.set(magazine[i], 1);
        } else {
            // Increase the count for an existing character.
            frequencyMap.set(magazine[i], frequencyMap.get(magazine[i]) + 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        // Return false if the required character is unavailable.
        if (!frequencyMap.has(ransomNote[i]) ||
            frequencyMap.get(ransomNote[i]) === 0) {
            return false;
        } else {
            // Use one occurrence of the required character.
            frequencyMap.set(ransomNote[i], frequencyMap.get(ransomNote[i]) - 1);
        }
    }
    // All required characters are available.
    return true;
};