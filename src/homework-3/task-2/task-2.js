// Вывести в консоль таблицу умножения на 7.
// 7 x 1 = 7
// 7 x 2 = 14
// …
// 7 x 9 = 63
export function echoMultiplicationBy7() {
  let i = 1;

  while (i <= 9) {
    console.log(`7 x ${i} = ${i * 7}`);
    i++;
  }
}
