"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const palindrome_1 = require("./palindrome");
// ------ isPalindrome ------
(0, vitest_1.describe)('isPalindrome', () => {
    const cases = [
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
    (0, vitest_1.test)('Test isPalindrome', () => {
        cases.forEach(({ name, input, expected }) => {
            (0, vitest_1.test)(name, () => {
                const result = (0, palindrome_1.isPalindrome)(input);
                (0, vitest_1.expect)(result).toBe(expected);
            });
        });
    });
});
