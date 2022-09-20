import { echoMultiplicationAndSum } from "./task-1";

const testData = [
  { a: 2, b: 3, result: "6, 5" },
  { a: 100, b: 123, result: "12300, 223" },
  { a: -5, b: 5, result: "-25, 0" },
  { a: 0, b: 7, result: "0, 7" },
  { a: -2, b: -3, result: "6, -5" },
];

beforeEach(() => {
  jest.clearAllMocks();
});

describe("echoMultiplicationAndSum", () => {
  testData.forEach(({ a, b, result }) => {
    it(`prints ${result} for ${a} and ${b}`, () => {
      jest.spyOn(console, "log");

      echoMultiplicationAndSum(a, b);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
