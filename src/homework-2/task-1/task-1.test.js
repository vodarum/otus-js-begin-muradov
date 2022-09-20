import { echoGreaterNumber } from "./task-1";

describe("echoSymbolsCount", () => {
  const testData = [
    { a: 1, b: 3, result: 3 },
    { a: 10, b: 3, result: 10 },
    { a: 0, b: -1, result: 0 },
    { a: -1, b: -3, result: -1 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ a, b, result }) => {
    [a, b].forEach((i) => {
      it(`${i} is a number`, () => expect(typeof i).toBe("number"));
    });

    it(`${a} is different from ${b}`, () =>
      expect(Object.is(a, b)).toBeFalsy());

    it(`prints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      echoGreaterNumber(a, b);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
