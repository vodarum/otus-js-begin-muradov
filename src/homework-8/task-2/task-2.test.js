import { echoNumOfMinutesFromStartCurrentDay } from "./task-2";

describe("echoNumOfMinutesFromStartCurrentDay", () => {
  const testData = [
    { date: "2022-10-17 12:09:45", result: 729 },
    { date: "2022-10-17 01:45:02", result: 105 },
    { date: "2022-10-17 00:00:23", result: 0 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is function", () => {
    expect(echoNumOfMinutesFromStartCurrentDay).toBeInstanceOf(Function);
  });

  testData.forEach(({ date, result }) => {
    it("correct num of minutes form start current day", () => {
      const spyLog = jest.spyOn(console, "log");

      jest.useFakeTimers().setSystemTime(new Date(date));

      echoNumOfMinutesFromStartCurrentDay();

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
