// *Записать все значения полей объекта admin в
// отдельные переменные. Имена переменных
// должны совпадать с названиями полей.

const user = {
  name: "John",
  enterPropValue() {
    return prompt("Enter a property value: ");
  },
  putProp(propName, propValue) {
    this[propName] = propValue;
  },
};

const admin = { ...user };
admin.putProp("name", "admin");
admin.putProp("role", "admin");

const [name, role] = [admin.name, admin.role];

export { admin, name, role };
