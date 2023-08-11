import { expect } from "chai";
import { describe, test } from "vitest";
import { arrayDiff, arrayDiffOver, arrayIntersect } from "./compare";

describe("Test array compare", () => {
    const casesForDiffOver = <{
        name: string;
        a: any[];
        b: any[];
        expected: any[];
    }[]>[
            {
                name: "A completely different array",
                a: [1, 2, 3, 4, 5, 6],
                b: [7, 8, 9, 10],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "A is the same as B",
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6],
                expected: []
            },
            {
                name: "A is a subset of B",
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: []
            },
            {
                name: "B is a subset of A",
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [1, 2, 3, 4, 5, 6],
                expected: [7, 8, 9]
            },
            {
                name: "A and B have some common elements",
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [4, 5, 6, 7, 8, 9, 10, 11, 12],
                expected: [1, 2, 3]
            }
        ];

    casesForDiffOver.forEach((c) => {
        test(`Test arrayDiffOver: $case:${c.name}`, () => {
            const actual = arrayDiffOver(c.a, c.b);
            expect(actual).to.deep.equal(c.expected);
        })
    });


    const casesForDiff = <{
        name: string;
        a: any[];
        b: any[];
        expected: any[];
    }[]>[
            {
                name: 'A completely different array',
                a: [1, 2, 3, 4, 5, 6],
                b: [7, 8, 9, 10],
                expected: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
            },
            {
                name: 'A is the same as B',
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6],
                expected: []
            },
            {
                name: 'A is a subset of B',
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [7, 8, 9]
            },
            {
                name: 'B is a subset of A',
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [1, 2, 3, 4, 5, 6],
                expected: [7, 8, 9]
            },
            {
                name: "A and B have some common elements",
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [4, 5, 6, 7, 8, 9, 10, 11, 12],
                expected: [1, 2, 3, 10, 11, 12]
            }
        ];

    casesForDiff.forEach((c) => {
        test(`Test arrayDiff: $case:${c.name}`, () => {
            const actual = arrayDiff(c.a, c.b);
            expect(actual).to.deep.equal(c.expected);
        })
    });

    const casesForIntersect = <{
        name: string,
        a: any[],
        b: any[],
        expected: any[]
    }[]>[
            {
                name: "A completely different array",
                a: [1, 2, 3, 4, 5, 6],
                b: [7, 8, 9, 10],
                expected: []
            },
            {
                name: "A is the same as B",
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "A is a subset of B",
                a: [1, 2, 3, 4, 5, 6],
                b: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "B is a subset of A",
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [1, 2, 3, 4, 5, 6],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "A and B have some common elements",
                a: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                b: [4, 5, 6, 7, 8, 9, 10, 11, 12],
                expected: [4, 5, 6, 7, 8, 9]
            }
        ];

    casesForIntersect.forEach((c) => {
        test(`Test arrayIntersect: $case:${c.name}`, () => {
            const actual = arrayIntersect(c.a, c.b);
            expect(actual).to.deep.equal(c.expected);
        })
    });
})