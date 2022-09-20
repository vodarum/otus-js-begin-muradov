import { echoNumOfMinutesFromStartCurrentDay } from "./task-2";

describe("echoNumOfMinutesFromStartCurrentDay", () => {
  function getNumOfMinutesFromStartCurrentDay() {
    const now = new Date();
    const startCurrentDay = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    );
    const diffMilliseconds = now.getTime() - startCurrentDay.getTime();

    return Math.floor(diffMilliseconds / (1000 * 60));
  }

  it("is function", () => {
    expect(echoNumOfMinutesFromStartCurrentDay).toBeInstanceOf(Function);
  });

  it("correct num of minutes form start current day", () => {
    const spyLog = jest.spyOn(console, "log");
    const numOfMinutes = getNumOfMinutesFromStartCurrentDay();

    echoNumOfMinutesFromStartCurrentDay();

    expect(spyLog).toHaveBeenCalledWith(numOfMinutes);
  });
});
