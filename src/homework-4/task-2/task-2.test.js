import { admin } from "./task-2";

describe("admin", () => {
  it("name is admin", () => {
    expect(admin.name).toBe("admin");
  });

  it("role is admin", () => {
    expect(admin.role).toBe("admin");
  });
});
