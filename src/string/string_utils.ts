/**
 * Return a reversed string
 * 
 * Example:
 * 
 * ```typescript
 * const revString = stringReverse('hello'); // olleh
 * ```
 * @param str 
 * @returns 
 */
export function stringReverse(str: string): string {
    return str.split('').reverse().join('');
}

/**
 * Return a string with words in reverse order
 * @param str 
 * @param splitBy 
 * @returns 
 */
export function wordsReverse(str: string, splitBy = " "): string {
    return str.split(splitBy).reverse().join(splitBy);
}

/**
 * Return a string that show in mirror reflection
 * @param str 
 */
export function mirrorString(str: string): string {
    return stringReverse(str);
}


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