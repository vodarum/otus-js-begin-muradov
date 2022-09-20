import { echoMultiplicationBy7 } from "./task-2";

it("echoMultiplicationBy7", () => {
  jest.spyOn(console, "log");

  echoMultiplicationBy7();

  [1, 2, 3, 4, 5, 6, 7, 8, 9].forEach((value, idx) => {
    expect(console.log).toHaveBeenNthCalledWith(
      idx + 1,
      `7 x ${value} = ${7 * value}`
    );
  });
});
