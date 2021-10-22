import { addNumber } from "./addNumber";

const table: {
  numbers: number[];
  additionalNumber: number;
  mode?: "prepend" | "append";
  expected: number[];
}[] = [
  {
    numbers: [1, 2, 3],
    additionalNumber: 4,
    mode: "prepend",
    expected: [4, 1, 2, 3],
  },
  {
    numbers: [1, 2, 3],
    additionalNumber: 4,
    mode: "append",
    expected: [1, 2, 3, 4],
  },
  {
    numbers: [1, 2, 3],
    additionalNumber: 4,
    mode: undefined,
    expected: [1, 2, 3, 4],
  },
];

test.each(table)(
  "addNumber($numbers, $additionalNumber, $mode) => $expected",
  ({ numbers, additionalNumber, mode, expected }) => {
    expect(addNumber(numbers, additionalNumber, mode)).toEqual(expected);
  }
);
