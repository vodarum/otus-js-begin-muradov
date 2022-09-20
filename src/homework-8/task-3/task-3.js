// *В двух переменных хранятся даты рождения двух
// пользователей в формате ДД.ММ.ГГГГ. Написать
// программу, которая определяет более молодого
// пользователя.

export function echoYoungerUser(firstUser, secondUser) {
  const [fubDate, fubMonth, fubYear] = firstUser.birthday.split(".");
  const [subDate, subMonth, subYear] = secondUser.birthday.split(".");

  const fubAsMillisec = +new Date(`${fubYear}-${fubMonth}-${fubDate}`);
  const subAsMillisec = +new Date(`${subYear}-${subMonth}-${subDate}`);

  if (fubAsMillisec > subAsMillisec) {
    console.log("Первый пользователь моложе второго");
  } else if (fubAsMillisec < subAsMillisec) {
    console.log("Второй пользователь моложе первого");
  } else {
    console.log("Пользователи ровесники");
  }
}
