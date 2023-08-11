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
export function isPalindrome(str: string): boolean {
    const len = str.length;
    const mid = Math.floor(len / 2);
  
    for (let i = 0; i < mid; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
  
    return true;
  }