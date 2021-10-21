/**
 * module(s)
 */
import { addNumber } from "./addNumber"

// 第一引数
const numbersExistancePattern = [-1]
const numbersNoExistancePattern: number[] = []

// 第二引数
const additionalNumber = 1

// 第三引数
const prepend = "prepend"
const append = "append"

describe('numbers が1つ以上存在', () => {
  describe('additionalNumber 有り', () => {
    describe('prepend モード', () => {
      it('additionalNumber が配列の先頭へ挿入される結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, additionalNumber, prepend)).toEqual([1, -1])
      })
    })
    describe('append モード', () => {
      it('additionalNumber が配列の最後尾へ挿入される結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, additionalNumber, append)).toEqual([-1, 1])
      })
    })
    describe('モード指定なし', () => {
      it('additionalNumber が配列の最後尾へ挿入される結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, additionalNumber)).toEqual([-1, 1])
      })
    })
  })
  describe('additionalNumber 無し', () => {
    describe('prepend モード', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, undefined, prepend)).toEqual([-1])
      })
    })
    describe('append モード', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, undefined, append)).toEqual([-1])
      })
    })
    describe('モード指定なし', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersExistancePattern, undefined)).toEqual([-1])
      })
    })
  })
})

describe('numbers が空配列', () => {
  describe('additionalNumber 有り', () => {
    describe('prepend モード', () => {
      it('additionalNumber が配列へ挿入される結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, additionalNumber, prepend)).toEqual([1])
      })
    })
    describe('append モード', () => {
      it('additionalNumber が配列へ挿入される結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, additionalNumber, append)).toEqual([1])
      })
    })
    describe('モード指定なし', () => {
      it('additionalNumber が配列へ挿入される結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, additionalNumber)).toEqual([1])
      })
    })
  })
  describe('additionalNumber 無し', () => {
    describe('prepend モード', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, undefined, prepend)).toEqual([])
      })
    })
    describe('append モード', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, undefined, append)).toEqual([])
      })
    })
    describe('モード指定なし', () => {
      it('配列の結果が変わらない結果が得られること', () => {
        expect(addNumber(numbersNoExistancePattern, undefined)).toEqual([])
      })
    })
  })
})