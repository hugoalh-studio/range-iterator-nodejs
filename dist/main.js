/**
 * Resolve code point of the character.
 * @access private
 * @param {string} argumentName Argument name.
 * @param {string} value Character.
 * @returns {number} Code point of the character.
 */
function resolveCharacterCodePoint(argumentName, value) {
    try {
        const valueSplit = [...value];
        if (valueSplit.length !== 1) {
            throw undefined;
        }
        const characterCodePoint = value.codePointAt(0);
        if (typeof characterCodePoint === "undefined") {
            throw undefined;
        }
        return characterCodePoint;
    }
    catch {
        throw new RangeError(`\`${value}\` (argument \`${argumentName}\`) is not a character which is in code point range 0 ~ 1114111!`);
    }
}
/**
 * @access private
 * @template {bigint | number | string} T
 * @param {RangeLooperParameters<T>} param
 * @returns {Generator<T, void, unknown>}
 */
function* rangeLooper({ end, endExclusive, resultIsString, start, step }) {
    const isReverse = start > end;
    //@ts-ignore All of the types are compatible.
    for (let current = start; isReverse ? (current >= end) : (current <= end); current += isReverse ? -step : step) {
        if (!(endExclusive && current === end)) {
            if (resultIsString) {
                yield String.fromCodePoint(current);
            }
            else {
                yield current;
            }
        }
    }
}
export function rangeIterator(start, end, options = {}) {
    if (typeof options !== "object") {
        options = {
            step: options
        };
    }
    const optionsEndExclusive = options.endExclusive ?? options.exclusiveEnd ?? false;
    if (typeof start === "bigint" && typeof end === "bigint") {
        let optionsStep = 1n;
        if (typeof options.step !== "undefined") {
            if (!(options.step > 0n)) {
                throw new RangeError(`Argument \`options.step\` is not a bigint which is > 0!`);
            }
            optionsStep = options.step;
        }
        return rangeLooper({
            end,
            endExclusive: optionsEndExclusive,
            resultIsString: false,
            start,
            step: optionsStep
        });
    }
    let resultIsString = false;
    let startAsNumber;
    let endAsNumber;
    if (typeof start === "number" && typeof end === "number") {
        startAsNumber = start;
        endAsNumber = end;
    }
    else if (typeof start === "string" && typeof end === "string") {
        resultIsString = true;
        startAsNumber = resolveCharacterCodePoint("start", start);
        endAsNumber = resolveCharacterCodePoint("end", end);
    }
    else {
        throw new TypeError(`Arguments \`start\` and \`end\` are not bigints, numbers, or strings (character)!`);
    }
    let optionsStep = 1;
    if (typeof options.step !== "undefined") {
        if (!(options.step > 0)) {
            throw new RangeError(`Argument \`options.step\` is not a number which is > 0!`);
        }
        optionsStep = options.step;
    }
    if (resultIsString) {
        return rangeLooper({
            end: endAsNumber,
            endExclusive: optionsEndExclusive,
            resultIsString: true,
            start: startAsNumber,
            step: optionsStep
        });
    }
    return rangeLooper({
        end: endAsNumber,
        endExclusive: optionsEndExclusive,
        resultIsString: false,
        start: startAsNumber,
        step: optionsStep
    });
}
export default rangeIterator;
