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
 */
export declare function rangeIterator(start: bigint, end: bigint, step?: RangeIteratorOptions<bigint>["step"]): Generator<bigint, void, unknown>;
/**
 * Range iterator with numbers.
 * @param {number} start Start.
 * @param {number} end End.
 * @param {RangeIteratorOptions<number>["step"]} [step] Step.
 * @returns {Generator<number, void, unknown>}
 */
export declare function rangeIterator(start: number, end: number, step?: RangeIteratorOptions<number>["step"]): Generator<number, void, unknown>;
/**
 * Range iterator with characters.
 * @param {string} start Start.
 * @param {string} end End.
 * @param {RangeIteratorOptions<number>["step"]} [step] Step.
 * @returns {Generator<string, void, unknown>}
 */
export declare function rangeIterator(start: string, end: string, step?: RangeIteratorOptions<string>["step"]): Generator<string, void, unknown>;
/**
 * Range iterator with big integers.
 * @param {bigint} start Start.
 * @param {bigint} end End.
 * @param {RangeIteratorOptions<bigint>} [options] Options.
 * @returns {Generator<bigint, void, unknown>}
 */
export declare function rangeIterator(start: bigint, end: bigint, options?: RangeIteratorOptions<bigint>): Generator<bigint, void, unknown>;
/**
 * Range iterator with numbers.
 * @param {number} start Start.
 * @param {number} end End.
 * @param {RangeIteratorOptions<number>} [options] Options.
 * @returns {Generator<number, void, unknown>}
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