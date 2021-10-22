import{addNumber} from "./addNumber"

/**
 * 途中で力尽きたらすいません。。。
 * みんなホワイトボックステストっぽいのでブラックボックステスト的なのをやってみました
 * テストケース過多になってそうなので実際ブラックボックステストをちゃんと過不足やろうとするとどうなるかという意見を聞きたい
 */
describe("第一引数が空配列", () => {
    describe("第二引数なし", () => {
        it("空配列が返ること", () => {
            expect(addNumber([])).toStrictEqual([])
        })
    })
    describe("第二引数がNan", () => {
        describe("第三引数なし", () => {
            it("要素がNaNの配列が返ること", () => {
                expect(addNumber([], NaN, "append")).toStrictEqual([NaN])
            })
        })
        describe("第三引数がprepend", () => {
            it("要素がNaNの配列が返ること", () => {
                expect(addNumber([], NaN,"prepend")).toStrictEqual([NaN])
            })
        })
    })
    describe("第二引数がMAX_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {
            it("要素がMAX_SAFE_INTEGERの配列が返ること", () => {
                expect(addNumber([], Number.MAX_SAFE_INTEGER)).toStrictEqual([Number.MAX_SAFE_INTEGER])
            })
        })
        describe("第三引数がprepend", () => {
            it("要素がMAX_SAFE_INTEGERの配列が返ること", () => {
                expect(addNumber([], Number.MAX_SAFE_INTEGER, "prepend")).toStrictEqual([Number.MAX_SAFE_INTEGER])
            })
        })
    })
    describe("第二引数がMIN_SAFE_INTEGER", () => {
        it("要素がMIN_SAFE_INTEGERの配列が返ること", () => {
            expect(addNumber([], Number.MIN_SAFE_INTEGER, "append")).toStrictEqual([Number.MIN_SAFE_INTEGER])
        })
        describe("第三引数がprepend", () => {
            it("要素がMIN_SAFE_INTEGERの配列が返ること", () => {
                expect(addNumber([], Number.MIN_SAFE_INTEGER, "append")).toStrictEqual([Number.MIN_SAFE_INTEGER])
            })
        })
    })
    describe("第二引数が0", () => {
        describe("第三引数なし", () => {
            it("要素が0の配列が返ること", () => {
                expect(addNumber([], 0)).toStrictEqual([0])
            })
        })
        describe("第三引数がprepend", () => {
            it("要素が0配列が返ること", () => {
                expect(addNumber([], 0, "prepend")).toStrictEqual([0])
            })
        })
    })
})

describe("第一引数がNanが要素の配列", () => {
    describe("第二引数なし", () => {
        it("要素がNaNの配列が返ること", () => {
            expect(addNumber([NaN])).toStrictEqual([NaN])
        })
    })
    describe("第二引数がNan", () => {
        describe("第三引数なし", () => {
            it("空配列が返ること", () => {
                expect(addNumber([NaN], NaN)).toStrictEqual([NaN, NaN])
            })
        })
        describe("第三引数がprepend", () => {
            it("空配列が返ること", () => {
                expect(addNumber([NaN], NaN, "append")).toStrictEqual([NaN, NaN])
            })
        })
    })
    describe("第二引数がMIN_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {
            it("[NaN, Number.MIN_SAFE_INTEGER]が返ること", () => {
                expect(addNumber([NaN], Number.MIN_SAFE_INTEGER)).toStrictEqual([NaN, Number.MIN_SAFE_INTEGER])
            })
        })
        describe("第三引数がprepend", () => {
            it("[Number.MIN_SAFE_INTEGER, NaN]が返ること", () => {
                expect(addNumber([NaN], Number.MIN_SAFE_INTEGER, "prepend")).toStrictEqual([Number.MIN_SAFE_INTEGER, NaN])
            })
        })
    })
    describe("第二引数がMIN_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {
            it("[NaN, Number.MAX_SAFE_INTEGER]が返ること", () => {
                expect(addNumber([NaN], Number.MAX_SAFE_INTEGER)).toStrictEqual([NaN, Number.MAX_SAFE_INTEGER])
            })
        })
        describe("第三引数がprepend", () => {
            it("[Number.MAX_SAFE_INTEGER, NaN]が返ること", () => {
                expect(addNumber([NaN], Number.MAX_SAFE_INTEGER, "prepend")).toStrictEqual([Number.MAX_SAFE_INTEGER, NaN])
            })
        })
    })
    describe("第二引数が0", () => {
        describe("第三引数なし", () => {
            it("[NaN, 0]が返ること", () => {
                expect(addNumber([NaN], 0)).toStrictEqual([NaN, 0])
            })
        })
        describe("第三引数がprepend", () => {
            it("[0, NaN]が返ること", () => {
                expect(addNumber([NaN], 0, "prepend")).toStrictEqual([0, NaN])
            })
        })
    })
})
describe("第一引数が整数が要素の配列", () => {
    describe("第二引数なし", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がNan", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がMAX_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がMIN_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数が0", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
})
describe("第一引数が浮動小数点数が要素の配列", () => {
    describe("第二引数なし", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がNan", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がMAX_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数がMIN_SAFE_INTEGER", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
    describe("第二引数が0", () => {
        describe("第三引数なし", () => {})
        describe("第三引数がprepend", () => {})
    })
})
