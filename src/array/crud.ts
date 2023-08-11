/**
 * Return the index of the first item in the array that matches the predicate.
 * 
 * Return -1 if no item matches.
 * 
 * @param arr 
 * @param isMatch 
 */
export function arrayFindIndex<T>(arr: T[], isMatch: (item: T) => boolean): number {
    for (let i = 0; i < arr.length; i++) {
        if (isMatch(arr[i])) {
            return i;
        }
    }
    return -1;
}

/**
 * Return the index of the last item in the array that matches the predicate.
 * 
 * Return -1 if no item matches.
 * 
 * @param arr 
 * @param isMatch 
 */
export function arrayFindLastIndex<T>(arr: T[], isMatch: (item: T) => boolean): number {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isMatch(arr[i])) {
            return i;
        }
    }
    return -1;
}

/**
 * Return the first item in the array that matches the predicate.
 * 
 * Return undefined if no item matches.
 * 
 * @param arr 
 * @param isMatch 
 * @returns 
 */
export function arrayFind<T>(arr: T[], isMatch: (item: T) => boolean): T | undefined {
    for (let i = 0; i < arr.length; i++) {
        if (isMatch(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

/**
 * Return the last item in the array that matches the predicate.
 * 
 * Return undefined if no item matches.
 * 
 * @param arr 
 * @param isMatch 
 * @returns 
 */
export function arrayFindLast<T>(arr: T[], isMatch: (item: T) => boolean): T | undefined {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isMatch(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

/**
 * Add an item to the end of an array.
 * @param arr 
 * @param item 
 * @returns 
 */
export function arrayAppend<T>(arr: T[], item: T): T[] {
    return [...arr, item];
}

/**
 * Add an item to the start of an array.
 * @param arr 
 * @param item 
 * @returns 
 */
export function arrayPrepend<T>(arr: T[], item: T): T[] {
    return [item, ...arr];
}

/**
 * Insert an item at the specified index in an array.
 * @param arr 
 * @param index 
 * @param item 
 * @returns 
 */
export function arrayInsertAt<T>(arr: T[], index: number, item: T): T[] {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
}

/**
 * Remove an item from an array, at the specified index.
 * @param arr 
 * @param index 
 * @returns 
 */
export function arrayRemoveAt<T>(arr: T[], index: number): T[] {
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

/**
 * Remove the first item from an array that matches the predicate.
 * @param arr 
 * @param isMatch 
 * @returns 
 */
export function arrayRemoveIf<T>(arr: T[], isMatch: (item: T) => boolean): T[] {
    for (let i = 0; i < arr.length; i++) {
        if (isMatch(arr[i])) {
            return [...arr.slice(0, i), ...arr.slice(i + 1)];
        }
    }

    return arr;
}

/**
 * Remove the last item from an array that matches the predicate.
 * @param arr 
 * @param isMatch 
 * @returns 
 */
export function arrayRemoveLastIf<T>(arr: T[], isMatch: (item: T) => boolean): T[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isMatch(arr[i])) {
            return [...arr.slice(0, i), ...arr.slice(i + 1)];
        }
    }

    return arr;
}

/**
 * Remove all items from an array that match the predicate.
 * @param arr 
 * @param isMatch 
 * @returns 
 */
export function arrayRemoveAllIf<T>(arr: T[], isMatch: (item: T) => boolean): T[] {
    let result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (!isMatch(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}

/**
 * Update an item in an array, at the specified index.
 * @param arr 
 * @param index 
 * @param updater 
 * @returns 
 */
export function arrayUpdateAt<T>(arr: T[], index: number, updater: (item: T) => T): T[] {
    return [...arr.slice(0, index), updater(arr[index]), ...arr.slice(index + 1)];
}

/**
 * Update the first item in an array that matches the predicate.
 * @param arr 
 * @param isMatch 
 * @param updater 
 * @returns 
 */
export function arrayUpdateIf<T>(arr: T[], isMatch: (item: T) => boolean, updater: (item: T) => T): T[] {
    for (let i = 0; i < arr.length; i++) {
        if (isMatch(arr[i])) {
            return [...arr.slice(0, i), updater(arr[i]), ...arr.slice(i + 1)];
        }
    }

    return arr;
}

/**
 * Update the last item in an array that matches the predicate.
 * @param arr 
 * @param isMatch 
 * @param updater 
 * @returns 
 */
export function arrayUpdateLastIf<T>(arr: T[], isMatch: (item: T) => boolean, updater: (item: T) => T): T[] {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (isMatch(arr[i])) {
            return [...arr.slice(0, i), updater(arr[i]), ...arr.slice(i + 1)];
        }
    }

    return arr;

}

/**
 * Update all items in an array that match the predicate.
 * @param arr 
 * @param isMatch 
 * @param updater 
 * @returns 
 */
export function arrayUpdateAllIf<T>(arr: T[], isMatch: (item: T) => boolean, updater: (item: T) => T): T[] {
    let result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (isMatch(arr[i])) {
            result.push(updater(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }

    return result;
}

/**
 * Create a new array of the specified length, with the specified initial value.
 * @param length 
 * @param initialValue 
 * @returns 
 */
export function arrayNew<T>(length: number, initialValue?: T): T[] {
    return new Array(length).fill(initialValue as any);
}

/**
 * Return a new 2D array with the specified number of rows and columns.
 * 
 * @param rows 
 * @param columns 
 * @param initialValue 
 * @returns 
 */
export function arrayNew2D<T>(rows: number, columns: number, initialValue?: T): T[][] {
    return new Array(rows).fill(undefined).map(() => new Array(columns).fill(initialValue as any));
}

/**
 * Return a new 2D array with the specified item on the main diagonal.
 * @param rows 
 * @param columns 
 * @param fillWith 
 * @param initialValue 
 * @returns 
 */
export function arrayNew2DFillMainDiagonal<T>(rows: number, columns: number, fillWith: T, initialValue?: T): T[][] {
    const result = new Array(rows).fill(undefined).map(() => new Array(columns).fill(initialValue as any));
    for (let i = 0; i < Math.min(rows, columns); i++) {
        result[i][i] = fillWith;
    }

    return result;
}