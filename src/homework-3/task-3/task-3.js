// *Запросить у пользователя ввод числа N. Вывести в
// консоль среднее арифметическое всех нечётных
// чисел от 1 до N.
function promptPositiveNumber() {
  const promptVal = prompt("Enter a positive number: ");

  return typeof +promptVal === "number" ? +promptVal : null;
}

function echoAvgOfOddNum(num) {
  let [oddNumCount, sum] = [0, 0];

  for (let i = 1; i <= num; i += 2) {
    sum += i;
    oddNumCount++;
  }

  console.log(sum / oddNumCount);
}

export { promptPositiveNumber, echoAvgOfOddNum };
