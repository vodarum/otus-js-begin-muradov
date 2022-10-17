// Напишите функцию pow(a, x), которая вернёт
// значение числа a, возведённого в степень x.

export function pow(a, x) {
  let result = a;

  for (let i = 2; i <= x; i++) {
    result *= a;
  }

  return result;
}
