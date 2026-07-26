/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // Return early when there is only one string.
    if (strs.length === 1) return [strs];

    // Map each sorted representation to its group of anagrams.
    const anagramsMap = new Map();
    for (let i = 0; i < strs.length; i++) {
        // Anagrams produce the same key after sorting their characters.
        const sortedWord = [...strs[i]].sort().join("");

        if (anagramsMap.has(sortedWord)) {
            anagramsMap.get(sortedWord).push(strs[i]);
        }
        else {
            anagramsMap.set(sortedWord, [strs[i]])
        }        
    }
    return [...anagramsMap.values()]
};