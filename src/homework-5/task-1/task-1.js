// Создайте массив целых чисел из 10 элементов.
// Выведите в консоль сумму всех элементов массива

function createArray(...items) {
  return Array.of(...items);
}

function echoSumItemsOfArray(array) {
  let sum = 0;

  for (let i = 0, { length } = array; i < length; i++) {
    sum += array[i];
  }

  console.log(sum);
}

export { createArray, echoSumItemsOfArray };
