import { addNumber } from './addNumber';

const createRandomArray = (length: number) => {
    if (length < 0) {
        throw new Error("The length must be a positive number");
    }
    return Array(length).fill(0).map(_ => Math.random());
};

describe("Test addNumber function", () => {
    describe("Edge case - 空配列", () => {        
        it("Subcase 1 - 追加numberのない", () => {
            const testInput: number[] = []; 
            const expected: number[] = [];

            expect(addNumber(testInput)).toEqual(expected);
            expect(addNumber(testInput)).toBe(testInput);    // JSの配列はそのレファランス(pointer)で指示されるため、
            expect(addNumber(testInput)).not.toBe(expected); // 注意が必要 
            expect(addNumber(testInput, undefined, 'prepend')).toEqual(expected); // prepend vs append
        });

        it("Subcase 2 - 追加numberのある", () => {
            const testInput: number[] = []; 
            const extraInput = 1;
            const expected = [1];

            expect(addNumber(testInput, extraInput)).toEqual(expected);
            expect(addNumber(testInput, extraInput, 'prepend')).toEqual(addNumber(testInput, extraInput, 'append')); // prepend vs append
        })
    });

    describe("Simple case - 固定の配列", () => {
        it("Subcase 1 - 追加numberのない", () => {
            const testInput = [1, 2, 3];
            const expected = [1, 2, 3];

            expect(addNumber(testInput)).toEqual(expected);
            expect(addNumber(testInput)).toBe(testInput);    // JSの配列はそのレファランス(pointer)で指示されるため、
            expect(addNumber(testInput)).not.toBe(expected); // 注意が必要
            expect(addNumber(testInput, undefined, 'prepend')).toEqual(addNumber(testInput)); // prepend vs append
        });

        it("Subcase 2 - 追加numberのある", () => {
            const testInput = [1, 2, 3];
            const extraInput = 1;
            
            const expectedPrepend = [1, 1, 2, 3];
            const expectedAppend = [1, 2, 3, 1];

            expect(addNumber(testInput, extraInput)).toEqual(expectedAppend);
            expect(addNumber(testInput, extraInput, 'prepend')).toEqual(expectedPrepend); // prepend vs append
        });
    });

    describe("Random case - Random number array", () => {
        it("Test", () => {

            const testInput = createRandomArray(10);
            const extraInput = 1;

            const expectedPrepend = [1, ...testInput];
            const expectedAppend = [...testInput, 1];

            expect(addNumber(testInput, extraInput)).toEqual(expectedAppend);
            expect(addNumber(testInput, extraInput, 'prepend')).toEqual(expectedPrepend); // prepend vs append
        })
    });
});
