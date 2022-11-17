const todli = require("../todo");
let To_Day = new Date().toLocaleDateString("en-CA");

const { all, comp, add, dued, due_to_day, due_after } = todli();

describe("test the todo list", () => {
  beforeAll(() => {
    add({
      title: "Say hey google",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });

  test("new todo added to list", () => {
    let length = all.length;

    add({
      title: "do cpp dsa",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });

    expect(all.length).toBe(length + 1);
  });

  test("tick the todo", () => {
    expect(all[0].completed).toBe(false);
    comp(0);
    expect(all[0].completed).toBe(true);
  });

  test("get overdued todos", () => {
    let to_do_li = dued();

    expect(
      to_do_li.every((todo) => {
        return todo.dueDate < To_Day;
      })
    ).toBe(true);
  });

  test("get overdued todos for today", () => {
    let to_do_li = due_to_day();

    expect(
      to_do_li.every((todo) => {
        return todo.dueDate === To_Day;
      })
    ).toBe(true);
  });

  test("get overdued todos for later", () => {
    let to_do_li = due_after();

    expect(
      to_do_li.every((todo) => {
        return todo.dueDate > To_Day;
      })
    ).toBe(true);
  });
});
