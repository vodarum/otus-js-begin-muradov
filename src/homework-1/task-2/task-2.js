// В двух переменных хранятся строки символов.
// Написать программу, которая выведет в консоль
// суммарное количество символов в обоих строках.
export function echoSymbolsCount(string1, string2) {
  if (typeof string1 === "string" && typeof string2 === "string") {
    console.log(string1.length + string2.length);
  }
}
