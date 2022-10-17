import { promptValue, determineValueType } from "./index";

describe("determineValueType", () => {
  const testData = [
    { value: "03.09.2022", result: "Value is date" },
    { value: "03/09/2022", result: "Value is date" },
    { value: "03-09-2022", result: "Value is date" },
    { value: "2022-09-03", result: "Unknown value" },

    { value: "mail@mail.ru", result: "Value is email" },
    { value: "mail@mail.a", result: "Unknown value" },
    { value: "mail@m.ru", result: "Unknown value" },

    { value: "8-910-100-10-10", result: "Value is phone" },
    { value: "+7-910-100-10-10", result: "Value is phone" },
    { value: "89101001010", result: "Value is phone" },
    { value: "8 910 100 101 0", result: "Unknown value" },

    { value: "string", result: "Unknown value" },
    { value: "", result: "Unknown value" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ value, result }) => {
    it(`value '${value}' is string`, () => {
      expect(typeof value).toBe("string");
    });

    it("prompt called", () => {
      const spyPrompt = jest
        .spyOn(window, "prompt")
        .mockImplementationOnce(() => `${value}`);

      promptValue();

      expect(spyPrompt).toHaveBeenCalledTimes(1);
    });

    it(`print '${result}' for '${value}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      determineValueType(value);

      expect(spyLog).toHaveBeenCalledWith(result);
    });
  });
});
