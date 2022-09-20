import { admin, name, role } from "./task-3";

it("variable 'name' defined", () => {
  expect(name).toBeDefined();
});

it("variable 'role' defined", () => {
  expect(role).toBeDefined();
});

it("variable 'name' equals property 'name' of object 'admin'", () => {
  expect(name).toBe(admin.name);
});

it("variable 'role' equals property 'role' of object 'admin'", () => {
  expect(role).toBe(admin.role);
});
