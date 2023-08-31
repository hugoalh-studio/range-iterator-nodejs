/**
 * @access private
 * @param {string} name
 * @param {string} value
 * @returns {number}
 */
function checkCharacter(name, value) {
    const valueSplit = [...value];
    if (valueSplit.length !== 1) {
        throw new RangeError(`\`${valueSplit.join(" ")}\` (argument \`${name}\`) is not a character which is in code point range 0 ~ 1114111!`);
    }
    return value.codePointAt(0);
}
/**
 * @access private
 * @template {bigint | number | string} T
 * @param {RangeLooperParameters<T>} param
 * @returns {Generator<T, void, unknown>}
 */
function* rangeLooper(param) {
    const isReverse = param.start > param.end;
    //@ts-ignore All of the types are compatible.
    for (let current = param.start; isReverse ? current >= param.end : current <= param.end; current += isReverse ? -param.step : param.step) {
        if (!(param.endExclusive && current === param.end)) {
            if (param.resultIsString) {
                yield String.fromCodePoint(current);
            }
            else {
                yield current;
            }
        }
    }
}
export function rangeIterator(start, end, options = {}) {
    if (typeof options === "bigint" ||
        typeof options === "number") {
        options = {
            step: options
        };
    }
    let endExclusive = false;
    options.endExclusive ?? (options.endExclusive = options.exclusiveEnd);
    if (typeof options.endExclusive === "boolean") {
        endExclusive = options.endExclusive;
    }
    else if (typeof options.endExclusive !== "undefined") {
        throw new TypeError(`Argument \`options.endExclusive\` is not a boolean or undefined!`);
    }
    if (typeof start === "bigint" && typeof end === "bigint") {
        let step = 1n;
        if (typeof options.step === "bigint") {
            if (!(options.step > 0n)) {
                throw new RangeError(`Argument \`options.step\` is not a bigint which is > 0n!`);
            }
            step = options.step;
        }
        else if (typeof options.step !== "undefined") {
            throw new TypeError(`Argument \`options.step\` is not a bigint or undefined!`);
        }
        return rangeLooper({
            end,
            step,
            endExclusive,
            resultIsString: false,
            start
        });
    }
    else {
        let endAsNumber;
        let startAsNumber;
        let resultIsString = false;
        if (typeof start === "number" && !Number.isNaN(start) && typeof end === "number" && !Number.isNaN(end)) {
            endAsNumber = end;
            startAsNumber = start;
        }
        else if (typeof start === "string" && typeof end === "string") {
            resultIsString = true;
            startAsNumber = checkCharacter("start", start);
            endAsNumber = checkCharacter("end", end);
        }
        else {
            throw new TypeError(`Arguments \`start\` and \`end\` are not bigints, numbers, or strings (character)!`);
        }
        let step = 1;
        if (typeof options.step === "number" && !Number.isNaN(options.step)) {
            if (!(options.step > 0)) {
                throw new RangeError(`Argument \`options.step\` is not a number which is > 0!`);
            }
            step = options.step;
        }
        else if (typeof options.step !== "undefined") {
            throw new TypeError(`Argument \`options.step\` is not a number or undefined!`);
        }
        if (resultIsString) {
            return rangeLooper({
                end: endAsNumber,
                endExclusive,
                resultIsString: true,
                start: startAsNumber,
                step
            });
        }
        return rangeLooper({
            end: endAsNumber,
            endExclusive,
            resultIsString: false,
            start: startAsNumber,
            step
        });
    }
}
export default rangeIterator;
