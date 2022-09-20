// Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным.

export function determineIfTriangleIsRightTriangle(triangleSides) {
  // Индекс гипотенузы треугольника
  const indexOfHypotenuse = (() => {
    let idx = 0;

    for (let i = 1; i < triangleSides.length; i++) {
      if (triangleSides[i] > triangleSides[idx]) {
        idx = i;
      }
    }

    return idx;
  })();

  /**
   * Получить сумму квадратов катетов треугольника
   */
  function getSumSquareСathetus() {
    let result = 0;

    for (let i = 0; i < triangleSides.length; i++) {
      if (i !== indexOfHypotenuse) {
        result += triangleSides[i] ** 2;
      }
    }

    return result;
  }

  if (triangleSides[indexOfHypotenuse] ** 2 === getSumSquareСathetus()) {
    console.log("Треугольник прямоугольный");
  } else {
    console.log("Треугольник не прямоугольный");
  }
}
