// Написать программу, которая выводит в консоль
// количество минут, прошедшее с начала сегодняшнего дня.

export function echoNumOfMinutesFromStartCurrentDay() {
  const now = new Date();
  console.log(now.getHours() * 60 + now.getMinutes());
}
