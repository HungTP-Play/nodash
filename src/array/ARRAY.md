# ARRAY

- [ARRAY](#array)
  - [Split and Chunk](#split-and-chunk)
    - [ArrayChunk](#arraychunk)
  - [Compare](#compare)
    - [ArrayDiffOver](#arraydiffover)
    - [ArrayDiff](#arraydiff)
    - [ArrayIntersect](#arrayintersect)

## Split and Chunk

### ArrayChunk

```ts
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
    if(chunkSize <= 0) throw new Error('chunkSize must be greater than 0')
    
    const chunks: T[][] = [];
    let i = 0
    const n = array.length
    while (i < n) {
        const aChunk = array.slice(i, i += chunkSize)
        chunks.push(aChunk)
    }
    return chunks
}
```

## Compare

### ArrayDiffOver

```ts
/**
 * Return the difference item of `a` over `b`
 * 
 * Example:
 * 
 * ```ts
 * const diff = arrayDiffOver<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8]) // [1, 3, 5, 7, 9]
 * const diff2 = arrayDiffOver<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8], (a, b) => a !== b) // [1, 3, 5, 7, 9]
 * const diff3 = arrayDiffOver<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10]) // [1, 3, 5, 7, 9]
 * ```
 * @param a 
 * @param b 
 * @param isDiff 
 * @returns 
 */
export function arrayDiffOver<T>(a: T[], b: T[], isDiff?: (aItem: T, bItem: T) => boolean): T[] {
    if (!isDiff) isDiff = (aItem, bItem) => aItem !== bItem

    return a.filter(aItem => b.every(bItem => isDiff!(aItem, bItem)))
}
```

### ArrayDiff

```ts
/**
 * Return the difference item of `a` and `b`. Mean that an item can be in `a` or `b` but not in both
 * 
 * Make sure you have a good `isDiff` function to compare the item if you use this function with object (other than primitive type)
 * 
 * Example:
 * 
 * ```ts
 * const diff = arrayDiff<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8]) // [1, 3, 5, 7, 9]
 * const diff2 = arrayDiff<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8], (a, b) => a !== b) // [1, 3, 5, 7, 9]
 * const diff3 = arrayDiff<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10]) // [1, 3, 5, 7, 9, 10]
 * ```
 * @param a 
 * @param b 
 * @returns 
 */
export function arrayDiff<T>(a: T[], b: T[], isDiff?: (aItem: T, bItem: T) => boolean): T[] {
    if (!isDiff) isDiff = (aItem, bItem) => aItem !== bItem

    const aDiffOverB = a.filter(aItem => b.every(bItem => isDiff!(aItem, bItem)))
    const bDiffOverA = b.filter(bItem => a.every(aItem => isDiff!(bItem, aItem)))

    return aDiffOverB.concat(bDiffOverA)
}
```

### ArrayIntersect

```ts
/**
 * Return the intersection of `a` and `b`. Mean that an item can be in `a` and `b`
 * 
 * Make sure you have a good `isDiff` function to compare the item if you use this function with object (other than primitive type)
 * 
 * Example:
 * 
 * ```ts
 * const diff = arrayIntersect<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8]) // [2, 4, 6, 8]
 * const diff2 = arrayIntersect<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8], (a, b) => a !== b) // [2, 4, 6, 8]
 * const diff3 = arrayIntersect<number>([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 4, 6, 8, 10]) // [2, 4, 6, 8]
 * ```
 * 
 * @param a 
 * @param b 
 * @param isDiff 
 */
export function arrayIntersect<T>(a: T[], b: T[], isDiff?: (aItem: T, bItem: T) => boolean): T[] {
    if (!isDiff) isDiff = (aItem, bItem) => aItem !== bItem

    return a.filter(aItem => b.some(bItem => !isDiff!(aItem, bItem)))
}
```
