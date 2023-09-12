/**
 * @access private
 */
type RangeIndexType<T> = T extends bigint ? bigint : number;
/**
 * Range iterator options.
 */
export interface RangeIteratorOptions<T> {
    /**
     * Whether to exclusive end.
     * @default false
     */
    endExclusive?: boolean;
    /**
     * Step of decrement/increment.
     * @default 1n // Big integer.
     * @default 1 // Number/String.
     */
    step?: RangeIndexType<T>;
    /** @alias endExclusive */ exclusiveEnd?: this["endExclusive"];
}
/**
 * Range iterator with big integers.
 * @param {bigint} start Start.
 * @param {bigint} end End.
 * @param {RangeIteratorOptions<bigint>["step"]} [step] Step.
 * @returns {Generator<bigint, void, unknown>}
 * @example
 * Array.from(rangeIterator(1n, 9n));
 * //=> [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n, 9n]
 * @example
 * Array.from(rangeIterator(1n, 9n, 2n));
 * //=> [1n, 3n, 5n, 7n, 9n]
 * @example
 * Array.from(rangeIterator(9n, 1n));
 * //=> [9n, 8n, 7n, 6n, 5n, 4n, 3n, 2n, 1n]
 * @example
 * Array.from(rangeIterator(9n, 1n, 2n));
 * //=> [9n, 7n, 5n, 3n, 1n]
 */
export declare function rangeIterator(start: bigint, end: bigint, step?: RangeIteratorOptions<bigint>["step"]): Generator<bigint, void, unknown>;
/**
 * Range iterator with numbers.
 * @param {number} start Start.
 * @param {number} end End.
 * @param {RangeIteratorOptions<number>["step"]} [step] Step.
 * @returns {Generator<number, void, unknown>}
 * @example
 * Array.from(rangeIterator(1, 9));
 * //=> [1, 2, 3, 4, 5, 6, 7, 8, 9]
 * @example
 * Array.from(rangeIterator(1, 9, 2));
 * //=> [1, 3, 5, 7, 9]
 * @example
 * Array.from(rangeIterator(9, 1));
 * //=> [9, 8, 7, 6, 5, 4, 3, 2, 1]
 * @example
 * Array.from(rangeIterator(9, 1, 2));
 * //=> [9, 7, 5, 3, 1]
 */
export declare function rangeIterator(start: number, end: number, step?: RangeIteratorOptions<number>["step"]): Generator<number, void, unknown>;
/**
 * Range iterator with characters.
 * @param {string} start Start.
 * @param {string} end End.
 * @param {RangeIteratorOptions<number>["step"]} [step] Step.
 * @returns {Generator<string, void, unknown>}
 * @example
 * Array.from(rangeIterator("a", "g"));
 * //=> ["a", "b", "c", "d", "e", "f", "g"]
 * @example
 * Array.from(rangeIterator("a", "g", 2));
 * //=> ["a", "c", "e", "g"]
 * @example
 * Array.from(rangeIterator("g", "a"));
 * //=> ["g", "f", "e", "d", "c", "b", "a"]
 * @example
 * Array.from(rangeIterator("g", "a", 2));
 * //=> ["g", "e", "c", "a"]
 */
export declare function rangeIterator(start: string, end: string, step?: RangeIteratorOptions<string>["step"]): Generator<string, void, unknown>;
/**
 * Range iterator with big integers.
 * @param {bigint} start Start.
 * @param {bigint} end End.
 * @param {RangeIteratorOptions<bigint>} [options] Options.
 * @returns {Generator<bigint, void, unknown>}
 * @example
 * Array.from(rangeIterator(1n, 9n, { endExclusive: true }));
 * //=> [1n, 2n, 3n, 4n, 5n, 6n, 7n, 8n]
 */
export declare function rangeIterator(start: bigint, end: bigint, options?: RangeIteratorOptions<bigint>): Generator<bigint, void, unknown>;
/**
 * Range iterator with numbers.
 * @param {number} start Start.
 * @param {number} end End.
 * @param {RangeIteratorOptions<number>} [options] Options.
 * @returns {Generator<number, void, unknown>}
 * @example
 * Array.from(rangeIterator(1, 9, { endExclusive: true }));
 * //=> [1, 2, 3, 4, 5, 6, 7, 8]
 */
export declare function rangeIterator(start: number, end: number, options?: RangeIteratorOptions<number>): Generator<number, void, unknown>;
/**
 * Range iterator with characters.
 * @param {string} start Start.
 * @param {string} end End.
 * @param {RangeIteratorOptions<number>} [options] Options.
 * @returns {Generator<string, void, unknown>}
 */
export declare function rangeIterator(start: string, end: string, options?: RangeIteratorOptions<string>): Generator<string, void, unknown>;
export default rangeIterator;
//# sourceMappingURL=main.d.ts.map