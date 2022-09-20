import { promptNumber, echoCircleLength, echoCircleSquare } from "./task-2";

describe("echoCircleLengthAndCircleSquare", () => {
  const testData = [
    { circleRadius: 10, circleLength: 62.83, circleSquare: 314.16 },
    { circleRadius: 5, circleLength: 31.42, circleSquare: 78.54 },
    { circleRadius: 1, circleLength: 6.28, circleSquare: 3.14 },
  ];

  testData.forEach(({ circleRadius, circleLength, circleSquare }) => {
    it("prompt called", () => {
      const spyPrompt = jest
        .spyOn(window, "prompt")
        .mockImplementationOnce(() => `${circleRadius}`);

      promptNumber();

      expect(spyPrompt).toHaveBeenCalledTimes(1);
    });

    it("correct circle radius", () => {
      expect(circleRadius).toBeGreaterThan(0);
    });

    it(`prints circle length '${circleLength}' for radius '${circleRadius}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      echoCircleLength(circleRadius);

      expect(spyLog).toHaveBeenCalledWith(circleLength);
    });

    it(`prints circle square '${circleSquare}' for radius '${circleRadius}'`, () => {
      const spyLog = jest.spyOn(console, "log");

      echoCircleSquare(circleRadius);

      expect(spyLog).toHaveBeenCalledWith(circleSquare);
    });
  });
});
