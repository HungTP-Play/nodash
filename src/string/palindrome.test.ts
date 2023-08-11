import { describe, expect, test } from 'vitest';
import { isPalindrome } from './palindrome';

// ------ isPalindrome ------
describe('isPalindrome', () => {
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
                const result = isPalindrome(input);
                expect(result).toBe(expected);
            });
        });
    });
});