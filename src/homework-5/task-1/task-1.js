// Создайте массив целых чисел из 10 элементов.
// Выведите в консоль сумму всех элементов массива

function createArray(...items) {
  return Array.of(...items);
}

function echoSumItemsOfArray(array) {
  const result = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  console.log(result);
}

export { createArray, echoSumItemsOfArray };
