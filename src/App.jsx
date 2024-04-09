import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Sidebar from "./components/Sidebar.jsx";
import ListItem from "./components/ListItem.jsx";

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState("");
  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);

    setList(newList);
  };
  // return
  return (
    <div>
      <h1>Todo List</h1>
      <div className="todosearch">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>add</button>
      </div>

      <div className="todoadded">
        <ul>
          {list.map((todo) => (
            <li key={todo.id}>
              {todo.todo}
              <button onClick={() => deleteTodo(todo.id)}>&times;</button>
            </li>
          ))}
        </ul>
      </div>

      <Navbar />
      <Sidebar />
      <Body />
      <ListItem />
      <Footer />
    </div>
  );
}

export default App;
