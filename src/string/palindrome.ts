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
export function stringIsPalindrome(str: string): boolean {
  const len = str.length;
  const mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}


export function stringLongestPalindromeSubstring(str: string): string {
  const sLen = str.length;
  if (sLen <= 1) return str;
  
  const mem = new Map<number, Map<number, boolean>>()
  let longestPalindrome = '';

  for (let i = 0; i < sLen; i++) {
    mem.set(i, new Map<number, boolean>())
    mem.get(i)?.set(i, true)
  }

  for (let pLen = 2; pLen <= sLen; pLen++) {
    for (let i = 0; i < sLen - pLen + 1; i++) {
      const j = i + pLen - 1;
      if (str[i] === str[j] && (pLen == 2 || mem.get(i + 1)?.get(j - 1))) {
        mem.get(i)?.set(j, true);
        if (pLen > longestPalindrome.length) {
          longestPalindrome = str.slice(i, j + 1);
        }
      }
    }
  }

  return longestPalindrome;
}