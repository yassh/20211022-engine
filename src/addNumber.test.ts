import assert from "assert";
import { addNumber } from "./addNumber";

test("additionalNumber が省略されたとき、numbers がそのまま返る", () => {
  const original = [1, 2, 3];
  const result = addNumber(original);
  assert(result === original);
});

test("additionalNumber が省略されなかったとき、新しい配列が返る", () => {
  const original = [1, 2, 3];
  const result = addNumber(original, 4);
  assert(result !== original);
});

describe('mode が "prepend" の場合、先頭に追加される', () => {
  test("[1, 2, 3], 4, => [4, 1, 2, 3]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 4, "prepend"), [4, 1, 2, 3]);
  });

  test("[1, 2, 3], 0, => [1, 2, 3, 0]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 0, "prepend"), [0, 1, 2, 3]);
  });
});

describe('mode が "append" の場合、末尾に追加される', () => {
  test("[1, 2, 3], 4, => [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 4, "append"), [1, 2, 3, 4]);
  });

  test("[1, 2, 3], 0, => [1, 2, 3, 0]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 0, "append"), [1, 2, 3, 0]);
  });
});

describe("mode が省略された場合、末尾に追加される", () => {
  test("[1, 2, 3], 4, => [1, 2, 3, 4]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 4), [1, 2, 3, 4]);
  });

  test("[1, 2, 3], 0, => [1, 2, 3, 0]", () => {
    assert.deepStrictEqual(addNumber([1, 2, 3], 0), [1, 2, 3, 0]);
  });
});
