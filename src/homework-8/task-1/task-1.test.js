import { promptBirthday, echoDayOfBirthday } from "./task-1";

describe("echoDayOfBirthday", () => {
  const birthdayFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
  const testData = [
    { birthday: "14.05.1990", result: "Понедельник" },
    { birthday: "11.09.2001", result: "Вторник" },
    { birthday: "29.02.2012", result: "Среда" },
    { birthday: "12.03.1998", result: "Четверг" },
    { birthday: "13.08.1993", result: "Пятница" },
    { birthday: "03.09.2022", result: "Суббота" },
    { birthday: "17.10.1982", result: "Воскресенье" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is function", () => {
    expect(echoDayOfBirthday).toBeInstanceOf(Function);
  });

  testData.forEach(({ birthday, result }) => {
    it("prompt called", () => {
      const spyPrompt = jest
        .spyOn(window, "prompt")
        .mockImplementationOnce(() => `${birthday}`);

      promptBirthday();

      expect(spyPrompt).toHaveBeenCalledTimes(1);
    });

    it(`'${birthday}' is correct birthday`, () => {
      expect(birthdayFormat.test(birthday)).toBeTruthy();
    });

    it(`print '${result}' for '${birthday}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      echoDayOfBirthday(birthday);

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
