import { useState } from "react";
import toDoListItems from "./assets/todolist-items.json";

function Body() {
  const [task, setTask] = useState(toDoListItems);
  const deleteTask = (itemId) => {
    const copy = JSON.parse(JSON.stringify(task));
    const filteredTasks = copy.filter((theitem) => {
      return theitem.id !== itemId;
    });
    setTask(filteredTasks);
  };
  return (
    <div>
      {task.map((task) => {
        return (
          <div key={task.id} className="info-table">
            <p>{task.item}</p>
            <p>{task.priority}</p>
            <p>{task.due_date}</p>
            <button onClick={() => deleteTask(task.id)} className="btn-delete">
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
