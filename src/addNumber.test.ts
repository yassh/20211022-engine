import { addNumber } from "./addNumber"

describe("addNumber", () => {
  const BaseNumbers = [1, 2, 3]

  describe("additionalNumber が未指定の場合、 numbers をそのまま返す", () => {
    it("mode は未指定", () => {
      expect(addNumber(BaseNumbers)).toEqual([1, 2, 3])
    })

    it("mode は prepend", () => {
      expect(addNumber(BaseNumbers, undefined, "prepend")).toEqual([1, 2, 3])
    })

    it("mode は append", () => {
      expect(addNumber(BaseNumbers, undefined, "append")).toEqual([1, 2, 3])
    })
  })

  describe("additionalNumber の指定あり", () => {
    it("mode が未指定の場合、 numbers の後ろに additionalNumber を追加した配列を返す", () => {
      expect(addNumber(BaseNumbers, 5)).toEqual([1, 2, 3, 5])
    })

    it("mode が prepend の場合、 numbers の前に additionalNumber を追加した配列を返す", () => {
      expect(addNumber(BaseNumbers, 5, "prepend")).toEqual([5, 1, 2, 3])
    })

    it("mode が append の場合、 numbers の後ろに additionalNumber を追加した配列を返す", () => {
      expect(addNumber(BaseNumbers, 5, "append")).toEqual([1, 2, 3, 5])
    })
  })
})
