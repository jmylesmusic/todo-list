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
            <div className="navbar">
              <div id="navbar-item"></div>
              <div id="navbar-item">Task:</div>
              <div>{task.item}</div>
              <div id="navbar-item">Priority:</div>
              <div>{task.priority}</div>
              <div id="navbar-item">Due Date:</div>
              <div>{task.due_date}</div>
              <div id="navbar-item">Completed?</div>
              <button
                onClick={() => deleteTask(task.id)}
                className="btn-delete"
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
