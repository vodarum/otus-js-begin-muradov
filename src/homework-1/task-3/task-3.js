// *Написать программу, которая запрашивает у
// пользователя ввод трёхзначного числа, а потом
// выводит в консоль сумму цифр введённого числа.

function promptThreeDigitNumber() {
  return prompt("Enter a three-digit number: ");
}

function echoSumFromThreeDigitNumber(threeDigitNumberAsString) {
  const threeDigitNumberAsArray = threeDigitNumberAsString.split("");

  console.log(
    +threeDigitNumberAsArray[0] +
      +threeDigitNumberAsArray[1] +
      +threeDigitNumberAsArray[2]
  );
}

export { promptThreeDigitNumber, echoSumFromThreeDigitNumber };
