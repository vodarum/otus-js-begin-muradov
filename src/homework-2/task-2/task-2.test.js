import { obj } from "./task-2";

describe("echoMonthName", () => {
  const testData = [];

  Object.entries(obj.months).forEach((entry) => {
    testData.push({
      monthNum: entry[0],
      monthName: entry[1],
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ monthNum, monthName }) => {
    it("prompt called", () => {
      const promptSpy = jest
        .spyOn(window, "prompt")
        .mockImplementation(() => `${monthNum}`);

      obj.promptNumber();

      expect(promptSpy).toHaveBeenCalledTimes(1);
    });

    it(`'${monthNum}' from 1 to 12`, () => {
      expect(+monthNum).toBeGreaterThanOrEqual(1);
      expect(+monthNum).toBeLessThanOrEqual(12);
    });

    it(`prints ${monthName} for '${monthNum}'`, () => {
      jest.spyOn(console, "log");

      obj.monthNum = monthNum;
      obj.echoMonthName();

      expect(console.log).toHaveBeenCalledWith(monthName);
    });
  });
});
