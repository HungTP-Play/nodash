/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
 * 
 * Example:
 * 
 * ```javascript
 *  const palindrome = isPalindrome("eye");     // true
 *  const palindrome2 = isPalindrome("_eye");   // false
 * ```
 * @param s 
 * @returns 
 */
export function isPalindrome(s:string):boolean {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length - 1]) return false;

    return isPalindrome(s.slice(1, s.length - 1));
}