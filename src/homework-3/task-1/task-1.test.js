import { echoNumbersFromFiftyToOneHundred } from "./task-1";

describe("echoNumbersFromFiftyToOneHundred", () => {
  const testArray = [];

  function pushNumsInTestArray(from, to) {
    while (from <= to) {
      testArray.push(from);
      from++;
    }
  }

  pushNumsInTestArray(50, 100);

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("length of testArray equals length of log", () => {
    const spyLog = jest.spyOn(console, "log");

    echoNumbersFromFiftyToOneHundred();

    expect(testArray.length).toBe(spyLog.mock.calls.length);
  });

  it("correct logging", () => {
    const spyLog = jest.spyOn(console, "log");

    echoNumbersFromFiftyToOneHundred();

    testArray.forEach((value, idx) => {
      expect(spyLog).toHaveBeenNthCalledWith(idx + 1, testArray[idx]);
    });
  });
});
