import { useState } from "react";
import toDoListItems from "../assets/todolist-items.json";

function Body() {
  // const [task, setTask] = useState(toDoListItems);
  // const deleteTask = (itemId) => {
  //   const copy = JSON.parse(JSON.stringify(task));
  //   const filteredTasks = copy.filter((theitem) => {
  //     return theitem.id !== itemId;
  //   });
  //   setTask(filteredTasks);
  // };
  // return (
  //   <div className="container">
  //     {task.map((task) => {
  //       return (
  //         <div key={task.id} className="info-table">
  //           <div className="list-heading-ctn">
  //             <div id="navbar-item"></div>
  //             <div id="navbar-item">Task:</div>
  //             <div id="navbar-item">Priority:</div>
  //             <div id="navbar-item">Due Date:</div>
  //             <div id="navbar-item">Completed?</div>
  //           </div>
  //           <div className="list-item-ctn">
  //             <div>{task.item}</div>
  //             <div>{task.priority}</div>
  //             <div>{task.due_date}</div>
  //             <button
  //               onClick={() => deleteTask(task.id)}
  //               className="btn-delete"
  //             >
  //               Delete
  //             </button>
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default Body;
