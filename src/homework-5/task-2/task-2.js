// Cоздайте новый массив на основе исходного, в
// котором каждый элемент будет вдвое больше
// элемента исходного массива с таким же индексом.
// (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив)

function createArray(...items) {
  return Array.of(...items);
}

function doubleItemsOfArray(array) {
  return array.map((item) => item * 2);
}

export { createArray, doubleItemsOfArray };
