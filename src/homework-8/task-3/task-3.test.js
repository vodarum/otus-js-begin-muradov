import { echoYoungerUser } from "./task-3";

describe("echoYoungerUser", () => {
  const birthdayFormat = /[0-9]{2}\.[0-9]{2}\.[0-9]{4}/;
  const testData = [
    {
      firstUser: { birthday: "13.08.1993" },
      secondUser: { birthday: "03.06.1992" },
      result: "Первый пользователь моложе второго",
    },
    {
      firstUser: { birthday: "13.08.1993" },
      secondUser: { birthday: "03.09.2022" },
      result: "Второй пользователь моложе первого",
    },
    {
      firstUser: { birthday: "13.08.1993" },
      secondUser: { birthday: "13.08.1993" },
      result: "Пользователи ровесники",
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("is function", () => {
    expect(echoYoungerUser).toBeInstanceOf(Function);
  });

  testData.forEach(({ firstUser, secondUser, result }) => {
    it(`is correct birthday '${firstUser.birthday}' of firstUser`, () => {
      expect(birthdayFormat.test(firstUser.birthday)).toBeTruthy();
    });

    it(`is correct birthday '${secondUser.birthday}' of secondUser`, () => {
      expect(birthdayFormat.test(secondUser.birthday)).toBeTruthy();
    });

    it(`print '${result}' for firstUser '${JSON.stringify(
      firstUser
    )}' and secondUser '${JSON.stringify(secondUser)}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      echoYoungerUser(firstUser, secondUser);

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
