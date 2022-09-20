// Создайте объект user, содержащий поле name со
// значением ‘John’.
// Запросить у пользователя ввод числа. Записать
// введенное значение в поле age объекта user.
const user = {
  name: "John",
  enterPropValue() {
    return prompt("Enter a property value: ");
  },
  putProp(propName, propValue) {
    this[propName] = propValue;
  },
};

export { user };
