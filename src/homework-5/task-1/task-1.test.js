import { createArray, echoSumItemsOfArray } from "./task-1";

describe("sum items of array", () => {
  const testData = [
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], arrItemsSum: 55 },
    { arr: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19], arrItemsSum: 100 },
    { arr: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20], arrItemsSum: 110 },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  testData.forEach(({ arr, arrItemsSum }) => {
    it("returns array", () => {
      const createdArray = createArray(...arr);

      expect(createdArray).toEqual(arr);
    });

    it(`prints ${arrItemsSum} for [${arr}]`, () => {
      jest.spyOn(console, "log");

      echoSumItemsOfArray(arr);

      expect(console.log).toHaveBeenCalledWith(arrItemsSum);
    });
  });
});
