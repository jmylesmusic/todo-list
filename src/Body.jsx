import { useState } from "react";
import toDoListItems from "./assets/todolist-items.json";

function Body() {
  const [item, setItem] = useState(toDoListItems);

  return (
    <div>
      {item.map((task) => {
        return (
          <div key={task.id}>
            <p>{task.item}</p>
            <p>{task.priority}</p>
            <p>{task.due_date}</p>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
