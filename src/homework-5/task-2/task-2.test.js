import { createArray, doubleItemsOfArray } from "./task-2";

describe("double items of array", () => {
  const testData = [
    {
      arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      doubleArr: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
    },
    {
      arr: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19],
      doubleArr: [2, 6, 10, 14, 18, 22, 26, 30, 34, 38],
    },
    {
      arr: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
      doubleArr: [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
    },
  ];

  testData.forEach(({ arr, doubleArr }) => {
    it("returns array", () => {
      const createdArray = createArray(...arr);

      expect(createdArray).toEqual(arr);
    });

    it(`correct calculated double`, () => {
      const calculatedDoubleArr = doubleItemsOfArray(createArray(...arr));

      expect(calculatedDoubleArr).toEqual(doubleArr);
    });
  });
});
