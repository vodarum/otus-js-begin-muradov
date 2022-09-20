import { checkIfCircleFitsInSquare } from "./task-3";

describe("checkIfCircleFitsInSquare", () => {
  const testData = [
    { circle: 14.2, square: 16, result: false },
    { circle: 16, square: 16, result: false },
    { circle: 12.4, square: 16, result: true },
  ];

  testData.forEach(({ circle, square, result }) => {
    it(`circle greater than 0`, () => {
      expect(circle).toBeGreaterThan(0);
    });

    it(`square greater than 0`, () => {
      expect(square).toBeGreaterThan(0);
    });

    it(`prints ${result} for circle = ${circle} and square = ${square}`, () => {
      expect(checkIfCircleFitsInSquare(circle, square)).toBe(result);
    });
  });
});
