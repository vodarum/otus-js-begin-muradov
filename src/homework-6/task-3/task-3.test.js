import { pow } from "./task-3";

describe("pow", () => {
  const testData = [
    { a: 9, x: 2, result: 81 },
    { a: -9, x: 2, result: 81 },
    { a: 1, x: 3, result: 1 },
    { a: -3, x: 3, result: -27 },
    { a: 0, x: 5, result: 0 },
    // { a: 0, x: -5, result: null },
  ];

  testData.forEach(({ a, x, result }) => {
    it(`a is number`, () => {
      expect(typeof a).toBe("number");
    });

    it(`x is number`, () => {
      expect(typeof a).toBe("number");
    });

    it(`x is positive`, () => {
      expect(x).toBeGreaterThan(0);
    });

    it(`prints '${result}' for ${a} and ${x}`, () => {
      expect(pow(a, x)).toBe(result);
    });
  });
});
