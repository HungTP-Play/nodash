import { expect } from "chai";
import { describe, test } from "vitest";
import { arrayChunk, arrayTruthy } from "./split_and_chunk";

describe("Test Array Split And Chunk", () => {
    const casesForChunk = <{
        name: string;
        input: any[];
        size: number;
        expected: any[][];
    }[]>[
            {
                name: "Test chunk with size 2",
                input: [1, 2, 3, 4, 5, 6],
                size: 2,
                expected: [[1, 2], [3, 4], [5, 6]]
            },
            {
                name: "Test chunk size is greater than array length",
                input: [1, 2, 3, 4, 5, 6],
                size: 10,
                expected: [[1, 2, 3, 4, 5, 6]]
            },
            {
                name: "Test Chunk size is 4",
                input: [1, 2, 3, 4, 5, 6],
                size: 4,
                expected: [[1, 2, 3, 4], [5, 6]]
            }
        ];

    casesForChunk.forEach((c) => {
        test(`Test arrayChunk $case:${c.name}`, () => {
            const actual = arrayChunk(c.input, c.size);
            expect(actual).to.deep.equal(c.expected);
        })
    })

    const caseForArrayTruthy = <{
        name: string;
        input: any[];
        expected: any[];
        isTruthyFunc?: (value: any) => boolean;
    }[]>[
            {
                name: "Test array with truthy values",
                input: [1, 2, 3, 4, 5, 6],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "Test array with truthy and falsy values",
                input: [1, 2, 3, 4, 5, 6, undefined, null, false],
                expected: [1, 2, 3, 4, 5, 6]
            },
            {
                name: "Test array with falsy values",
                input: [undefined, null, false],
                expected: []
            },
            {
                name: "Test with custom falsy values",
                input: [0, "", NaN],
                expected: [0, "", NaN],
                isTruthyFunc: (value) => value !== undefined && value !== null,
            }
        ];

    caseForArrayTruthy.forEach((c) => {
        test(`Test arrayTruthy: $case:${c.name}`, () => {
            const actual = arrayTruthy(c.input, c.isTruthyFunc);
            expect(actual).to.deep.equal(c.expected);
        })
    });
})