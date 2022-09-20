// *Найдите и выведите в консоль наибольший и
// наименьший элементы исходного массива.

export function echoMinAndMAxItemsOfArray(array) {
  let [min, max] = [array[0], array[0]];

  for (let i = 0, { length } = array; i < length; i++) {
    if (min > array[i]) {
      min = array[i];
    }

    if (max < array[i]) {
      max = array[i];
    }
  }

  console.log(`${min}, ${max}`);
}
