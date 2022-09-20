// Запросить у пользователя ввод числа от 1 до 12.
// Вывести в консоль название месяца, соответствующее
// этому числу (1 — январь, 2 — февраль и т.д.)

const obj = {
  months: {
    1: "Январь",
    2: "Февраль",
    3: "Март",
    4: "Апрель",
    5: "Май",
    6: "Июнь",
    7: "Июль",
    8: "Август",
    9: "Сентябрь",
    10: "Октябрь",
    11: "Ноябрь",
    12: "Декабрь",
  },
  monthNum: null,
  promptNumber() {
    this.monthNum = prompt("Enter a number from 1 to 12: ");
  },
  echoMonthName() {
    if (+this.monthNum >= 1 && +this.monthNum <= 12) {
      console.log(this.months[+this.monthNum]);
    }
  },
};

export { obj };
