// *Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа.

function promptThreeDigitNumber() {
  return prompt("Enter a three-digit number: ");
}

function echoSumFromThreeDigitNumber(numberAsString) {
  const numberAsArray = numberAsString.trim().split("");
  const result = numberAsArray.reduce(
    (accumulator, currentValue) => +accumulator + +currentValue
  );

  console.log(result);
}

export { promptThreeDigitNumber, echoSumFromThreeDigitNumber };
