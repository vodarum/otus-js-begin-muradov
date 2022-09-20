// Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.

function promptNumber() {
  return prompt("Enter a number: ");
}

function echoCircleLength(circleRadius) {
  const circleLengthByRadius = 2 * Math.PI * circleRadius;

  console.log(+circleLengthByRadius.toFixed(2));
}

function echoCircleSquare(circleRadius) {
  const circleSquareByRadius = Math.PI * circleRadius ** 2;

  console.log(+circleSquareByRadius.toFixed(2));
}

export { promptNumber, echoCircleLength, echoCircleSquare };
