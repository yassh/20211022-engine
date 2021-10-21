import { addNumber } from './addNumber';

describe('addNumber', () => {
  describe('additionalNumber が省略された場合', () => {
    it('引数で渡された numbers が "そのまま" 返ること', () => {
      const numbers = [1, 2, 3, 4, 5];
      expect(addNumber(numbers)).toBe(numbers);
    });
  });

  describe('mode が "未指定" だった場合', () => {
    const numbers = [1, 2, 3, 4, 5];
    const additionalNumber = 2525;
    it('additionalNumber を numbers[] の末尾に追加した値を返すこと', () => {
      expect(addNumber(numbers, additionalNumber)).toEqual([
        1, 2, 3, 4, 5, 2525,
      ]);
    });
  });

  describe('mode が "prepend" だった場合', () => {
    const numbers = [1, 2, 3, 4, 5];
    const additionalNumber = 2525;
    it('additionalNumber を numbers[] の先頭に追加した値を返すこと', () => {
      expect(addNumber(numbers, additionalNumber, 'prepend')).toEqual([
        2525, 1, 2, 3, 4, 5,
      ]);
    });
  });

  describe('mode が "append" だった場合', () => {
    const numbers = [1, 2, 3, 4, 5];
    const additionalNumber = 2525;
    it('additionalNumber を numbers[] の末尾に追加した値を返すこと', () => {
      expect(addNumber(numbers, additionalNumber, 'append')).toEqual([
        1, 2, 3, 4, 5, 2525,
      ]);
    });
  });
});
