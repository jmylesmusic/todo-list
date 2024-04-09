import { useState } from "react";
import toDoListItems from "../assets/todolist-items.json";

function ListItem() {
  /*   const [task, setTask] = useState(toDoListItems);
  const deleteTask = (itemId) => {
    const copy = JSON.parse(JSON.stringify(task));
    const filteredTasks = copy.filter((theitem) => {
      return theitem.id !== itemId;
    });
    setTask(filteredTasks);
  };
  return (
    <div className="container">
      {task.map((singleItem) => {
        return (
          <div key={singleItem.id} className="info-table">
            <div className="list-item-ctn">
              <div>{singleItem.item}</div>
              <div>{singleItem.priority}</div>
              <div>{singleItem.due_date}</div>
            </div>
          </div>
        );
      })}
    </div>
  ); */
}
export default ListItem;
