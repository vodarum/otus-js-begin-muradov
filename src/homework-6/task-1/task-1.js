// Напишите функцию diff, которая получает в качестве
// параметров 2 числа и возвращает разницу между наибольшим и наименьшим.

export function diff(num1, num2) {
  const [min, max] = num1 < num2 ? [num1, num2] : [num2, num1];

  return max - min;
}
