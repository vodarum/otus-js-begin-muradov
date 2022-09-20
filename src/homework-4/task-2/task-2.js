// Создайте объект user, содержащий поле name со
// значением ‘John’.
// Создать копию объекта user с именем admin.
// Добавить новому объекту поле role со значением ‘admin’.

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

export { admin };
