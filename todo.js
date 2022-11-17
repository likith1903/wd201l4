
const todli = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const comp = (index) => {
    all[index].completed = true;
  };

  let To_Day = new Date().toLocaleDateString("en-CA");
  

  const dued = () => {
    return all.filter((todo) => {
      return todo.dueDate < To_Day;
    });
  };

  const due_to_day = () => {
    return all.filter((todo) => {
      return todo.dueDate === To_Day;
    });
  };

  const due_after = () => {
    return all.filter((todo) => {
      return todo.dueDate > To_Day;
    });
  };

  const to_disp_list = (list) => {
    return list
      .map((todo) => {
        display_status = todo.completed ? "[x]" : "[ ]";
        display_date = todo.dueDate == To_Day ? "" : todo.dueDate;

        return `${display_status} ${todo.title} ${display_date}`;
      })
      .join("\n");
  };

  return {
    all,
    add,
    comp,
    dued,
    due_to_day,
    due_after,
    to_disp_list,
  };
};

module.exports = todli;

