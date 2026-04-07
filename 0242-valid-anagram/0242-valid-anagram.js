/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const sFrequencyMap = {};
    const tFrequencyMap = {};

    // s의 빈도수 채우기
    for (const character of s) {
        sFrequencyMap[character] = (sFrequencyMap[character] || 0) + 1;
    }

    // t의 빈도수 채우기
    for (const character of t) {
        tFrequencyMap[character] = (tFrequencyMap[character] || 0) + 1;
    }

    // 두 Map 비교
    for (const character of s) {
        if (sFrequencyMap[character] !== tFrequencyMap[character]) return false;
    }

    return true;
}