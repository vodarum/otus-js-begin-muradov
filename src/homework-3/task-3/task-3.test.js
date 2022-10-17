import { promptPositiveNumber, echoAvgOfOddNum } from "./task-3";

describe("echoAvgOfOddNum", () => {
  const testData = [
    { promptValue: 5, result: 3 },
    { promptValue: 10, result: 5 },
    { promptValue: 3, result: 2 },
    { promptValue: 1, result: 1 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("prompt called", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => true);

    promptPositiveNumber();

    expect(window.prompt).toHaveBeenCalledTimes(1);
  });

  testData.forEach(({ promptValue, result }) => {
    it(`${promptValue} is number`, () => {
      expect(typeof promptValue).toBe("number");
    });

    it(`${promptValue} is positive number`, () => {
      expect(promptValue).toBeGreaterThan(0);
    });

    it(`prints ${result} for '${promptValue}'`, () => {
      jest.spyOn(console, "log");

      echoAvgOfOddNum(promptValue);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
