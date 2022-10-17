import { determineIfTriangleIsRightTriangle } from "./task-1";

describe("determineIfTriangleIsRightTriangle", () => {
  const testData = [
    { triangleSides: [3, 4, 5], result: "Треугольник прямоугольный" },
    { triangleSides: [4, 4, 4], result: "Треугольник не прямоугольный" },
    { triangleSides: [5, 4, 3], result: "Треугольник прямоугольный" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is function", () => {
    expect(determineIfTriangleIsRightTriangle).toBeInstanceOf(Function);
  });

  testData.forEach(({ triangleSides, result }) => {
    it("defined three sides of triangle", () => {
      expect(triangleSides).toHaveLength(3);
    });

    triangleSides.forEach((side) => {
      it(`correct size '${side}' of side`, () => {
        expect(side).toBeGreaterThan(0);
      });
    });

    it(`print '${result}' for '${triangleSides}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      determineIfTriangleIsRightTriangle(triangleSides);

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
