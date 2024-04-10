import React, { useState } from "react";
import toDoListItems from "../assets/todolist-items.json";

function List({ children }) {
  const [task, setTask] = useState(toDoListItems);
  const [newTask, setNewTask] = useState({
    item: "",
    priority: "",
    due_date: "",
  });

  const deleteTask = (itemId) => {
    const filteredTasks = task.filter((theitem) => {
      return theitem.id !== itemId;
    });
    setTask(filteredTasks);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (!newTask.item || !newTask.priority || !newTask.due_date) {
      alert("Please fill in all fields!");
      return;
    }
    const newTaskList = [newTask, ...task];
    setTask(newTaskList);
    setNewTask({
      item: "",
      priority: "",
      due_date: "",
    });
  };

  return (
    <div className="container">
      <div className="list-heading-ctn">
        <div id="navbar-item">Task:</div>
        <div id="navbar-item">Priority:</div>
        <div id="navbar-item">Due Date:</div>
        <div id="navbar-item">Completed?</div>
      </div>
      <div className="info-table">
        <div className="list-item-ctn">
          <input
            type="text"
            name="item"
            placeholder="Task"
            value={newTask.item}
            onChange={handleInputChange}
            id="input-list-item"
          />
          <input
            type="text"
            name="priority"
            placeholder="Priority"
            value={newTask.priority}
            onChange={handleInputChange}
            id="input-list-item"
          />
          <input
            type="date"
            name="due_date"
            placeholder="Due Date"
            value={newTask.due_date}
            onChange={handleInputChange}
            id="input-list-item"
          />
          <button onClick={addTask} type="button" id="input-btn">
            Add
          </button>
        </div>
      </div>
      {task.map((task) => {
        return (
          <div key={task.id} className="info-table">
            <div className="list-item-ctn">
              <div id="list-item">{task.item}</div>
              <div id="list-item">{task.priority}</div>
              <div id="list-item">{task.due_date}</div>
              <button onClick={() => deleteTask(task.id)} id="btn">
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default List;
