/**
 * Brute Force: O(N) - reverse and compare
 * Optimized:  O(N) - two pointers
 *
 * Time:  O(N)
 * Space: O(N)
 */
function isPalindrome(s) {
    // 영숫자만 남기고 소문자로 변환
    const filtered = s
        .toLowerCase()
        .split("")
        .filter((char) => /[a-z0-9]/.test(char))
        .join("");

    // Edge case
    if (filtered.length <= 1) return true;

    // Two Pointers
    let left = 0;
    let right = filtered.length - 1;

    while (left < right) {
        if (filtered[left] !== filtered[right]) return false;
        left++;
        right--;
    }

    return true;
}

// Test
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car"));                     // false
console.log(isPalindrome(" "));                              // true