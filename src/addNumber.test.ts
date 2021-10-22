import {　addNumber　} from "./addNumber"

describe('addNumberテスト', () => {
    const numbers = [1, 2, 3, 4, 5];
    const EmptyNumbers = [] as number[]
    const additionalNumber = 100;

    it('additionalNumber が省略されたら、numbers をそのまま返す', () => {
        const expected = [1, 2, 3, 4, 5];
        expect(addNumber(numbers)).toEqual(expected);
    });
    it('additionalNumberを引数で渡し、modeをappendに指定するとadditionalNumberが末尾に追加される', () => {
        const expected = [1, 2, 3, 4, 5, 100]
        expect(addNumber(numbers, additionalNumber, "append")).toEqual(expected);
    });
    it('additionalNumberを引数で渡し、modeをprependに指定するとadditionalNumberが先頭に追加される', () => {
        const expected = [100, 1, 2, 3, 4, 5]
        expect(addNumber(numbers, additionalNumber, "prepend")).toEqual(expected);
    });
    it('additionalNumberを引数で渡し、modeを省略するとadditionalNumberが末尾に追加される', () => {
        const expected = [1, 2, 3, 4, 5, 100]
        expect(addNumber(numbers, additionalNumber)).toEqual(expected);
    });
    it('numbersが空配列でadditionalNumberを省略する場合空配列を返す', () => {
        const expected = [] as number[]
        expect(addNumber(EmptyNumbers)).toEqual(expected);
    });
    it('numbersが空配列でadditionalNumberを渡したらはどのmodeでもadditionalNumberだけ入ってる配列を返す', () => {
        const expected = [100]
        expect(addNumber(EmptyNumbers, additionalNumber, 'prepend')).toEqual(expected);
        expect(addNumber(EmptyNumbers, additionalNumber, 'append')).toEqual(expected);
        expect(addNumber(EmptyNumbers, additionalNumber)).toEqual(expected);
    });
})
