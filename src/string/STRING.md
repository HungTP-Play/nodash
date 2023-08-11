# STRING

- [STRING](#string)
  - [String Utils](#string-utils)
    - [StringReverse](#stringreverse)
    - [WordReverse](#wordreverse)
    - [MirrorString](#mirrorstring)
    - [StringToCamelCase](#stringtocamelcase)
    - [StringToSnakeCase](#stringtosnakecase)
    - [StringToUpperCamelCase](#stringtouppercamelcase)
    - [StringToKebabCase](#stringtokebabcase)
    - [StringToTitleCase](#stringtotitlecase)
    - [Trim](#trim)
    - [TrimLeft](#trimleft)
    - [TrimRight](#trimright)
  - [IsPalindrome](#ispalindrome)

## String Utils

### StringReverse

Reverse a string.

```ts
export function stringReverse(str: string): string {
  return str.split('').reverse().join('');
}
```

### WordReverse

Reverse words in a string.

```ts
/**
 * Return a string with words in reverse order
 * @param str 
 * @param splitBy 
 * @returns 
 */
export function wordsReverse(str: string, splitBy = " "): string {
    return str.split(splitBy).reverse().join(splitBy);
}

```

### MirrorString

Return a mirror string of the given string.

```ts
/**
 * Return a mirror string of the given string
 * 
 * Example:
 * 
 * ```ts
 * const mirrorString = mirrorString('hello world'); // dlrow olleh
 * ```
 * @param str 
 * @returns 
 */
export function mirrorString(str: string): string {
    return stringReverse(str);
}
```

### StringToCamelCase

```ts
/**
 * Return a string in camel case format
 * 
 * Example:
 * 
 * ```ts
 * const camelCaseString = stringToCamelCase('hello world'); // helloWorld
 * const camelCaseString2 = stringToCamelCase('hello-world'); // helloWorld
 * const camelCaseString3 = stringToCamelCase('hello_world'); // helloWorld
 * const camelCaseString4 = stringToCamelCase('helloWorld'); // helloWorld
 * const camelCaseString5 = stringToCamelCase('HelloWorld'); // helloWorld
 * const camelCaseString6 = stringToCamelCase('HELLO WORLD'); // helloWorld
 * ```
 * @param str 
 */
export function stringToCamelCase(str: string): string {
    // Replace all special characters with space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');

    // Replace all space characters with single space
    str = str.replace(/\s\s+/g, ' ');

    // Split string by space and convert to lowercase
    const words = str.split(' ').map(word => word.toLowerCase());

    // Convert first letter of each word to uppercase except first word
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    // Join words and return
    return words.join('');
}
```

### StringToSnakeCase

```ts
/**
 * Return a string in snake case format
 * 
 * Example:
 * 
 * ```ts
 * const snakeCaseString = stringToSnakeCase('hello world'); // hello_world
 * const snakeCaseString2 = stringToSnakeCase('hello_world'); // hello_world
 * const snakeCaseString3 = stringToSnakeCase('hello_world'); // hello_world
 * const snakeCaseString4 = stringToSnakeCase('helloWorld'); // hello_world
 * const snakeCaseString5 = stringToSnakeCase('HelloWorld'); // hello_world
 * const snakeCaseString6 = stringToSnakeCase('HELLO WORLD'); // hello_world
 * ```
 * @param str 
 * @returns 
 */
export function stringToSnakeCase(str: string): string {
    // Replace all special characters with space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');

    // Replace all space characters with single space
    str = str.replace(/\s\s+/g, ' ');

    // Split string by space and convert to lowercase
    const words = str.split(' ').map(word => word.toLowerCase());

    // Join words with hyphen and return
    return words.join('_');
}
```

### StringToUpperCamelCase

```ts

/**
 * Return a string in upper camel case format
 * 
 * Example:
 * 
 * ```ts
 * const kebabCaseString = stringToKebabCase('hello world'); // HelloWorld
 * const kebabCaseString2 = stringToKebabCase('hello-world'); // HelloWorld
 * const kebabCaseString3 = stringToKebabCase('hello_world'); // HelloWorld
 * const kebabCaseString4 = stringToKebabCase('helloWorld'); // HelloWorld
 * const kebabCaseString5 = stringToKebabCase('HelloWorld'); // HelloWorld
 * const kebabCaseString6 = stringToKebabCase('HELLO WORLD'); // HelloWorld
 * ```
 * @param str 
 * @returns 
 */
export function stringUpperCamelCase(str: string): string {
    // Replace all special characters with space
    str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');

    // Replace all space characters with single space
    str = str.replace(/\s\s+/g, ' ');

    // Split string by space and convert to lowercase
    const words = str.split(' ').map(word => word.toLowerCase());

    // Convert first letter of each word to uppercase
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    // Join words and return
    return words.join('');
}
```

### StringToKebabCase

```ts
/**
 * Return a string in kebab case format
 * 
 * Example:
 * 
 * ```ts
 * const kebabCaseString = stringToKebabCase('hello world'); // hello-world
 * const kebabCaseString2 = stringToKebabCase('hello-world'); // hello-world
 * const kebabCaseString3 = stringToKebabCase('hello_world'); // hello-world
 * const kebabCaseString4 = stringToKebabCase('helloWorld'); // hello-world
 * const kebabCaseString5 = stringToKebabCase('HelloWorld'); // hello-world
 * const kebabCaseString6 = stringToKebabCase('HELLO WORLD'); // hello-world
 * ```
 * @param s 
 * @returns 
 */
export function stringToKebabCase(s: string): string {
    // Replace all special characters with space
    s = s.replace(/[^a-zA-Z0-9 ]/g, ' ');

    // Replace all space characters with single space
    s = s.replace(/\s\s+/g, ' ');

    // Split string by space and convert to lowercase
    const words = s.split(' ').map(word => word.toLowerCase());

    // Join words with hyphen and return
    return words.join('-');
}
```

### StringToTitleCase

```ts
/**
 * Return a string in title case format
 * 
 * Example:
 * 
 * ```ts
 * const titleCaseString = stringToTitleCase('hello world'); // Hello World
 * const titleCaseString2 = stringToTitleCase('hello-world'); // Hello World
 * const titleCaseString3 = stringToTitleCase('hello_world'); // Hello World
 * const titleCaseString4 = stringToTitleCase('helloWorld'); // Hello World
 * const titleCaseString5 = stringToTitleCase('HelloWorld'); // Hello World
 * const titleCaseString6 = stringToTitleCase('HELLO WORLD'); // Hello World
 * ```
 * @param s 
 */
export function stringToTitleCase(s: string): string {
    // Replace all special characters with space
    s = s.replace(/[^a-zA-Z0-9 ]/g, ' ');

    // Replace all space characters with single space
    s = s.replace(/\s\s+/g, ' ');

    // Split string by space and convert to lowercase
    const words = s.split(' ').map(word => word.toLowerCase());

    // Convert first letter of each word to uppercase
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }

    // Join words and return
    return words.join(' ');
}
```

### Trim

Trim (remove) characters from the beginning and end of a string by all the characters in the trimPattern string.

```ts
/**
 * Return a trimmed string
 * 
 * Example:
 * 
 * ```ts
 * const trimmedString = stringTrim(' hello world '); // hello world
 * const trimmedString2 = stringTrim(' hello world ', ' '); // hello world
 * const trimmedString3 = stringTrim('__hello world__', '_'); // hello world
 * const trimmedString4 = stringTrim('22__hello world__1122 ', '12_'); // hello world
 * @param s 
 * @param trimPattern is a string containing characters to be trimmed
 * @returns 
 */
export function stringTrim(s: string, trimPattern = " "): string {
    const toTrimChars = trimPattern.split('');
    let trimmedString = s;
    for (let i = 0; i < toTrimChars.length; i++) {
        trimmedString = trimmedString.replace(new RegExp(`^${toTrimChars[i]}+|${toTrimChars[i]}+$`, 'g'), '');
    }
    return trimmedString;
}
```

### TrimLeft

Trim (remove) characters from the beginning of a string by all the characters in the trimPattern string.

```ts
/**
 * Return a trimmed string from left
 * 
 * Example:
 * 
 * ```ts
 * const trimmedString = stringTrimLeft(' hello world '); // hello world
 * const trimmedString2 = stringTrimLeft(' hello world ', ' '); // hello world
 * const trimmedString3 = stringTrimLeft('__hello world__', '_'); // hello world__
 * const trimmedString4 = stringTrimLeft('22__hello world__1122 ', '12_'); // hello world__1122
 * ```
 * @param s 
 * @param trimPattern 
 * @returns 
 */
export function stringTrimLeft(s: string, trimPattern = " "): string {
    const toTrimChars = trimPattern.split('');
    let trimmedString = s;
    for (let i = 0; i < toTrimChars.length; i++) {
        trimmedString = trimmedString.replace(new RegExp(`^${toTrimChars[i]}+`, 'g'), '');
    }
    return trimmedString;
}
```

### TrimRight

Trim (remove) characters from the end of a string by all the characters in the trimPattern string.

```ts
/**
 * Return a trimmed string from right
 * 
 * Example:
 * 
 * ```ts
 * const trimmedString = stringTrimRight(' hello world '); // hello world
 * const trimmedString2 = stringTrimRight(' hello world ', ' '); // hello world
 * const trimmedString3 = stringTrimRight('__hello world__', '_'); // __hello world
 * const trimmedString4 = stringTrimRight('22__hello world__1122 ', '12_'); // 22__hello world
 * ```
 * @param s 
 * @param trimPattern 
 * @returns 
 */
export function stringTrimRight(s: string, trimPattern = " "): string {
    const toTrimChars = trimPattern.split('');
    let trimmedString = s;
    for (let i = 0; i < toTrimChars.length; i++) {
        trimmedString = trimmedString.replace(new RegExp(`${toTrimChars[i]}+$`, 'g'), '');
    }
    return trimmedString;
}
```

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
