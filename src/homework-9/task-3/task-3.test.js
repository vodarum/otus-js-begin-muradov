import { promptNumber, echoRootsOfQuadraticEquation } from "./task-3";

describe("echoRootsOfQuadraticEquation", () => {
  const testData = [
    {
      a: 1,
      b: 2,
      c: -3,
      result: "Квадратное уравнение имеет корни x1 = 1 и x2 = -3",
    },
    {
      a: 2,
      b: 2,
      c: 0,
      result: "Квадратное уравнение имеет корни x1 = 0 и x2 = -1",
    },
    {
      a: 2,
      b: 0,
      c: -3,
      result: "Квадратное уравнение имеет корни x1 = 1.225 и x2 = -1.225",
    },
    {
      a: -2,
      b: 8,
      c: -9,
      result: "Корней нет",
    },
    {
      a: 2,
      b: 0,
      c: 0,
      result: "Корень квадратного уравнения равен 0",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ a, b, c, result }) => {
    [a, b, c].forEach((param) => {
      it("prompt called", () => {
        const spyPrompt = jest
          .spyOn(window, "prompt")
          .mockImplementationOnce(() => `${param}`);

        promptNumber();

        expect(spyPrompt).toHaveBeenCalledTimes(1);
      });
    });

    it(`print '${result}' for '${(a, b, c)}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      echoRootsOfQuadraticEquation(a, b, c);

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
