import { user } from "./task-1";

describe("user", () => {
  const testPromptValue = "18";

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("user name is John", () => {
    expect(user.name).toBe("John");
  });

  it("prompt called", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => testPromptValue);

    user.enterPropValue();

    expect(window.prompt).toHaveBeenCalledTimes(1);
  });

  it("user has age", () => {
    const spyPrompt = jest
      .spyOn(window, "prompt")
      .mockImplementation(() => testPromptValue);

    user.putProp("age", +spyPrompt());

    expect(user.age).toBe(18);
  });
});
