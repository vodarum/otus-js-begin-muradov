import { echoMinAndMAxItemsOfArray } from "./task-3";

describe("min and max", () => {
  const testData = [
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], result: "1, 10" },
    { arr: [1, 3, 500, 7, 9, -11, 13, 15, 17, 19], result: "-11, 500" },
    { arr: [-2, 4, 6, 8, 10, -2, 14, 16, -1, 20], result: "-2, 20" },
  ];

  testData.forEach(({ arr, result }) => {
    it(`prints '${result}' for [${arr}]`, () => {
      jest.spyOn(console, "log");

      echoMinAndMAxItemsOfArray(arr);

      expect(console.log).toHaveBeenCalledWith(result);
    });
  });
});
