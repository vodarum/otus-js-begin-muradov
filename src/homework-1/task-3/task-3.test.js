import { promptThreeDigitNumber, echoSumFromThreeDigitNumber } from "./task-3";

describe("echoSumFromThreeDigit", () => {
  const testData = [
    { value: "123", result: 6 },
    { value: "000", result: 0 },
    { value: "910", result: 10 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ value, result }) => {
    it("prompt called", () => {
      const promptSpy = jest
        .spyOn(window, "prompt")
        .mockImplementation(() => value);

      promptThreeDigitNumber();

      expect(promptSpy).toHaveBeenCalledTimes(1);
    });

    it(`'${value}' consists of 3 numbers`, () => {
      expect(value.length).toBe(3);
    });

    it(`'${value}' contains only numbers`, () => {
      expect(/^\d+$/.test(value)).toBeTruthy();
    });

    it(`prints ${result} for '${value}'`, () => {
      jest.spyOn(console, "log");

      echoSumFromThreeDigitNumber(value);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
