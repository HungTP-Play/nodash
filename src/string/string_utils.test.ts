import { describe, expect, test } from "vitest";
import { stringReverse, stringToCamelCase, stringToKebabCase, stringToSnakeCase, stringToTitleCase, stringTrim, stringTrimLeft, stringTrimRight, stringUpperCamelCase } from "./string_utils";

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


    const casesForTrim = <{
        name: string,
        input: string,
        expected: string,
        pattern: string,
    }[]>[
            {
                name: "Trim default (space)",
                input: " abc ",
                pattern: " ",
                expected: "abc",
            },
            {
                name: "Trim space",
                input: " abc ",
                pattern: " ",
                expected: "abc",
            },
            {
                name: "Trim one char in pattern",
                input: "__abc_",
                pattern: "_",
                expected: "abc",
            },
            {
                name: "Trim multiple chars in pattern",
                input: "12__abc_",
                pattern: "12_",
                expected: "abc",
            }
        ];

    casesForTrim.forEach((c) => {
        test(`Test stringTrim $case:${c.name}`, () => {
            const actual = stringTrim(c.input, c.pattern);
            expect(actual).toBe(c.expected);
        });
    });

    const casesForTrimLeft = <{
        name: string,
        input: string,
        expected: string,
        pattern: string,
    }[]>[
            {
                name: "Trim default (space)",
                input: " abc ",
                pattern: " ",
                expected: "abc ",
            },
            {
                name: "Trim space",
                input: " abc ",
                pattern: " ",
                expected: "abc ",
            },
            {
                name: "Trim one char in pattern",
                input: "__abc_",
                pattern: "_",
                expected: "abc_",
            },
            {
                name: "Trim multiple chars in pattern",
                input: "12__abc_",
                pattern: "12_",
                expected: "abc_",
            }
        ];

    casesForTrimLeft.forEach((c) => {
        test(`Test stringTrimLeft $case:${c.name}`, () => {
            const actual = stringTrimLeft(c.input, c.pattern);
            expect(actual).toBe(c.expected);
        });
    });

    const casesForTrimRight = <{
        name: string,
        input: string,
        expected: string,
        pattern: string,
    }[]>[
            {
                name: "Trim default (space)",
                input: " abc ",
                pattern: " ",
                expected: " abc",
            },
            {
                name: "Trim space",
                input: " abc ",
                pattern: " ",
                expected: " abc",
            },
            {
                name: "Trim one char in pattern",
                input: "__abc_",
                pattern: "_",
                expected: "__abc",
            },
            {
                name: "Trim multiple chars in pattern",
                input: "12__abc_",
                pattern: "12_",
                expected: "12__abc",
            }
        ];

    casesForTrimRight.forEach((c) => {
        test(`Test stringTrimRight $case:${c.name}`, () => {
            const actual = stringTrimRight(c.input, c.pattern);
            expect(actual).toBe(c.expected);
        });
    });
});