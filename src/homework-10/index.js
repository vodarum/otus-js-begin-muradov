// Пользователь вводит текстовую строку.
// Определить с помощью регулярного выражения, является ли введённая строка:
// - Датой.
// - Адресом электронной почты.
// - Номером телефона.

function promptValue() {
  return prompt("Enter a value: ");
}

function determineValueType(value) {
  const dateRegexp =
    /^(0[1-9]|[12][0-9]|3[0-1])[-./]{1}(0[1-9]|1[0-2])[-./]{1}(0[0-9]{2}[1-9]{1}|[1-9]{1}[0-9]{3})$/;
  const emailRegexp = /^(\w+)@([a-z]{2,})\.([a-z]{2,})$/;
  const phoneRegexp =
    /^(8|\+?7)-?(9[0-9]{2})-?([0-9]{3})-?([0-9]{2})-?([0-9]{2})$/;

  if (dateRegexp.test(value)) {
    console.log("Value is date");
  } else if (emailRegexp.test(value)) {
    console.log("Value is email");
  } else if (phoneRegexp.test(value)) {
    console.log("Value is phone");
  } else {
    console.log("Unknown value");
  }
}

export { promptValue, determineValueType };
