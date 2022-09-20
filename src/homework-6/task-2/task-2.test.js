import { isWord } from "./task-2";

describe("isWord", () => {
  const testData = [
    { str: "слово", result: true },
    { str: "два слова", result: false },
    { str: "один, два, три", result: false },
    // { str: '!', result: false },
    // { str: '', result: false },
  ];

  testData.forEach(({ str, result }) => {
    it("is string", () => {
      expect(typeof str).toEqual("string");
    });

    it("str exists letters", () => {
      expect(/[а-яА-Яa-zA-Z]+/.test(str)).toBeTruthy();
    });

    it(`str exists one word`, () => {
      expect(isWord(str)).toBe(result);
    });
  });
});
