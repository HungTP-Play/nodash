# STRING

## IsPalindrome

Check if a string is a palindrome.

```ts
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
```
