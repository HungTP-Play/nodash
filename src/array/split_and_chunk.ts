/**
 * Return an array of arrays of size `chunkSize` from `array`
 * 
 * Example:
 * 
 * ```ts
 * const chunks = arrayChunk<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
 * const chunks2 = arrayChunk<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], 4) // [[1, 2, 3, 4], [5, 6, 7, 8], [9]]
 * const chunks3 = arrayChunk<string>(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 3) // [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]
 * ```
 * @param array 
 * @param chunkSize 
 * @returns 
 */
export function arrayChunk<T>(array: T[], chunkSize: number): T[][] {
    if (chunkSize <= 0) throw new Error('chunkSize must be greater than 0')

    const chunks: T[][] = [];
    let i = 0
    const n = array.length
    while (i < n) {
        const aChunk = array.slice(i, i += chunkSize)
        chunks.push(aChunk)
    }
    return chunks
}

/**
 * Return only the truthy values from `array`
 * 
 * Example:
 * 
 * ```ts
 * const truthyArr = arrayTruthy([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const truthyArr2 = arrayTruthy([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, false]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const truthyArr3 = arrayTruthy([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, false, null]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * const truthyArr4 = arrayTruthy([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, false, null, undefined]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * ```
 * 
 * @param array
 * @param isTruthy (optional) function to determine if a value is truthy. Defaults to `Boolean`
 */
export function arrayTruthy<T>(array: T[], isTruthy?: (value: T) => boolean): T[] {
    if (!isTruthy) isTruthy = Boolean
    return array.filter(isTruthy)
}