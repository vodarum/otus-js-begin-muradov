// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.
function promptPositiveNumber() {
  const promptVal = prompt("Enter a positive number: ");

  return typeof +promptVal === "number" ? +promptVal : null;
}

function echoAvgOfOddNum(num) {
  let [min, oddNumCount, sum] = [1, 0, 0];

  while (min <= num) {
    if (min % 2 !== 0) {
      sum += min;
      oddNumCount++;
    }

    min++;
  }

  console.log(sum / oddNumCount);
}

export { promptPositiveNumber, echoAvgOfOddNum };
