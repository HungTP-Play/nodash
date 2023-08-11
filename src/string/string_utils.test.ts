import { describe, expect, test } from "vitest";
import { stringReverse, stringToCamelCase, stringToKebabCase, stringToSnakeCase, stringToTitleCase, stringUpperCamelCase } from "./string_utils";

describe("Test string_utils", () => {
    test("Test stringReverse", () => {
        const cases = <{
            input: string,
            expected: string,
        }[]>[
                {
                    input: "abc",
                    expected: "cba",
                },
                {
                    input: "a",
                    expected: "a",
                },
                {
                    input: "",
                    expected: "",
                }
            ];

        cases.forEach((c) => {
            const actual = stringReverse(c.input);
            expect(actual).toBe(c.expected);
        });
    });


    const casesForCamelCases = <{
        name: string,
        input: string,
        expected: string,
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single word",
                input: "abc",
                expected: "abc",
            },
            {
                name: "Test two words",
                input: "abc def",
                expected: "abcDef",
            },
            {
                name: "Test all uppercase",
                input: "ABC",
                expected: "abc",
            },
            {
                name: "Test all uppercase with space",
                input: "ABC DEF",
                expected: "abcDef",
            }
        ];

    casesForCamelCases.forEach((c) => {
        test(`Test stringToCamelCases $case:${c.name}`, () => {
            const actual = stringToCamelCase(c.input);
            expect(actual).toBe(c.expected);
        });
    });


    const caseForSnakeCases = <{
        name: string,
        input: string,
        expected: string,
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single word",
                input: "abc",
                expected: "abc",
            },
            {
                name: "Test two words",
                input: "abc def",
                expected: "abc_def",
            },
            {
                name: "Test all uppercase",
                input: "ABC",
                expected: "abc",
            },
            {
                name: "Test all uppercase with space",
                input: "ABC DEF",
                expected: "abc_def",
            }
        ];

    caseForSnakeCases.forEach((c) => {
        test(`Test stringToSnakeCases $case:${c.name}`, () => {
            const actual = stringToSnakeCase(c.input);
            expect(actual).toBe(c.expected);
        });
    });

    const casesForUpperCamelCases = <{
        name: string,
        input: string,
        expected: string,
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single word",
                input: "abc",
                expected: "Abc",
            },
            {
                name: "Test two words",
                input: "abc def",
                expected: "AbcDef",
            },
            {
                name: "Test all uppercase",
                input: "ABC",
                expected: "Abc",
            },
            {
                name: "Test all uppercase with space",
                input: "ABC DEF",
                expected: "AbcDef",
            }
        ];

    casesForUpperCamelCases.forEach((c) => {
        test(`Test stringToCamelCases $case:${c.name}`, () => {
            const actual = stringUpperCamelCase(c.input);
            expect(actual).toBe(c.expected);
        });
    });


    const casesForKebabCases = <{
        name: string,
        input: string,
        expected: string,
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single word",
                input: "abc",
                expected: "abc",
            },
            {
                name: "Test two words",
                input: "abc def",
                expected: "abc-def",
            },
            {
                name: "Test all uppercase",
                input: "ABC",
                expected: "abc",
            },
            {
                name: "Test all uppercase with space",
                input: "ABC DEF",
                expected: "abc-def",
            }
        ];

    casesForKebabCases.forEach((c) => {
        test(`Test stringToKebabCases $case:${c.name}`, () => {
            const actual = stringToKebabCase(c.input);
            expect(actual).toBe(c.expected);
        });
    });


    const casesForTitleCases = <{
        name: string,
        input: string,
        expected: string,
    }[]>[
            {
                name: "Test empty string",
                input: "",
                expected: "",
            },
            {
                name: "Test single word",
                input: "abc",
                expected: "Abc",
            },
            {
                name: "Test two words",
                input: "abc def",
                expected: "Abc Def",
            },
            {
                name: "Test all uppercase",
                input: "ABC",
                expected: "Abc",
            },
            {
                name: "Test all uppercase with space",
                input: "ABC DEF",
                expected: "Abc Def",
            }
        ];

    casesForTitleCases.forEach((c) => {
        test(`Test stringToTitleCases $case:${c.name}`, () => {
            const actual = stringToTitleCase(c.input);
            expect(actual).toBe(c.expected);
        });
    });
});