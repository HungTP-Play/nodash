import { describe, expect, test } from 'vitest';
import { stringIsPalindrome, stringLongestPalindromeSubstring } from './palindrome';

// ------ Palindrome ------
describe('Palindrome', () => {
    const cases = <{
        name: string,
        input: string,
        expected: boolean
    }[]>[
            {
                name: 'Test empty string',
                input: '',
                expected: true
            },
            {
                name: "Test 1 char string",
                input: 'a',
                expected: true
            },
            {
                name: 'Test Palindrome',
                input: 'abba',
                expected: true
            },
            {
                name: 'Test non Palindrome',
                input: 'abc',
                expected: false
            }
        ];

    test('Test isPalindrome', () => {
        cases.forEach(({ name, input, expected }) => {
            test(name, () => {
                const result = stringIsPalindrome(input);
                expect(result).toBe(expected);
            });
        });
    });

    const casesLongestPalindromeSubstring = <{
        name: string,
        input: string,
        expected: string | string[],
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single char",
                input: "a",
                expected: "a",
            },
            {
                name: "Test string is palindrome",
                input: "aba",
                expected: "aba",
            },
            {
                name: "Test string is non-palindrome",
                input: "abc",
                expected: "",
            },
            {
                name: "Test string is palindrome with non-palindrome",
                input: "abac",
                expected: "aba",
            },
            {
                name: "Test string is non-palindrome with palindrome",
                input: "aacabac",
                expected: "cabac",
            }
        ];

    casesLongestPalindromeSubstring.forEach((c) => {
        test(`Test longestPalindromeSubstring $case:${c.name}`, () => {
            const actual = stringLongestPalindromeSubstring(c.input);
            if (Array.isArray(c.expected)) {
                expect(actual).toEqual(expect.arrayContaining(c.expected));
            } else {
                expect(actual).toBe(c.expected);
            }
        });
    });
});