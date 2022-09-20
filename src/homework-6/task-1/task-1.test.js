import { diff } from "./task-1";

describe("diff", () => {
  const testData = [
    { num1: 1, num2: 10, result: 9 },
    { num1: 1, num2: -10, result: 11 },
    { num1: -10, num2: -1, result: 9 },
    { num1: -10, num2: 1, result: 11 },
    { num1: -2, num2: 2, result: 4 },
    { num1: 2, num2: 2, result: 0 },
  ];

  testData.forEach(({ num1, num2, result }) => {
    it(`prints ${result} for ${num1} and ${num2}`, () => {
      expect(diff(num1, num2)).toBe(result);
    });
  });
});
