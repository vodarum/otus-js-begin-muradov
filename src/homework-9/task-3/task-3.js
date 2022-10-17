// *Пользователь вводит числа a, b и c.
// Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

function promptNumber() {
  return prompt("Enter a number: ");
}

function echoRootsOfQuadraticEquation(a, b, c) {
  const D = b ** 2 - 4 * a * c;

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);

    console.log(
      `Квадратное уравнение имеет корни x1 = ${
        x1 % 1 === 0 ? x1 : x1.toFixed(3)
      } и x2 = ${x2 % 1 === 0 ? x2 : x2.toFixed(3)}`
    );
  } else if (D < 0) {
    console.log("Корней нет");
  } else {
    const root = -b / (2 * a);
    console.log(
      `Корень квадратного уравнения равен ${
        root % 1 === 0 ? root : root.toFixed(3)
      }`
    );
  }
}

export { promptNumber, echoRootsOfQuadraticEquation };
