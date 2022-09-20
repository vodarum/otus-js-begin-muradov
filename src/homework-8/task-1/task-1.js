// Запросите у пользователя дату в формате ДД.ММ.ГГГГ.
// Напишите программу, выводящую день недели по введённой дате.

function promptBirthday() {
  return prompt("Enter your birthday (dd.mm.yyyy): ");
}

function echoDayOfBirthday(birthdayStr) {
  if (birthdayStr) {
    const [date, month, year] = birthdayStr.split(".");
    const birthday = new Date(`${year}-${month}-${date}`);
    const day = birthday.getDay();

    let dayName;

    switch (day) {
      case 0:
        dayName = "Воскресенье";
        break;
      case 1:
        dayName = "Понедельник";
        break;
      case 2:
        dayName = "Вторник";
        break;
      case 3:
        dayName = "Среда";
        break;
      case 4:
        dayName = "Четверг";
        break;
      case 5:
        dayName = "Пятница";
        break;
      case 6:
        dayName = "Суббота";
        break;
      default:
        dayName = "Что-то пошло не так!";
        break;
    }

    console.log(dayName);
  } else {
    console.log("Значение пустое!");
  }
}

export { promptBirthday, echoDayOfBirthday };
