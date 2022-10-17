import { echoSymbolsCount } from "./task-2";

describe("echoSymbolsCount", () => {
  const testData = [
    { string1: "string1", string2: "string2", result: 14 },
    { string1: "", string2: "string2", result: 7 },
    { string1: "str", string2: "rts", result: 6 },
    { string1: "", string2: "", result: 0 },
    { string1: "s", string2: "0", result: 2 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ string1, string2, result }) => {
    [string1, string2].forEach((i) => {
      it("is a string", () => expect(typeof i).toBe("string"));
    });

    it(`prints ${result} for '${string1}' and '${string2}'`, () => {
      jest.spyOn(console, "log");

      echoSymbolsCount(string1, string2);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
