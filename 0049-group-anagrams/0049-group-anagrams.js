/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1. Filtering the edge case
    if (strs.length === 1) return [strs];

    const anagramsMap = new Map();
    for (let i = 0; i < strs.length; i++) {
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