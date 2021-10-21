/**
 * additionalNumber が省略されたら、numbers をそのまま返します。
 *
 * additionalNumber が省略されなかったら、numbers に additionalNumber を追加した新しい配列を返します。
 * この場合、mode が "prepend" であれば additionalNumber を numbers の先頭に追加し、"append" であれば末尾に追加します。
 *
 * modeは省略可能で、デフォルト値は"append"です。
 */
export const addNumber = (
  numbers: number[],
  additionalNumber?: number,
  mode: "prepend" | "append" = "append"
) => {
  if (additionalNumber === undefined) {
    return numbers;
  }

  if (mode === "prepend") {
    return [additionalNumber, ...numbers];
  }

  return [...numbers, additionalNumber];
};
