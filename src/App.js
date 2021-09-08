import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import Todolist from "./components/Todolist";
function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo, setList) {
    setTodos([...todos, newTodo]);
    setList("");
  }
  function handleTodo(element) {
    const newtodos = todos.filter((value, index) => {
      return index !== element;
    }, 0);
    setTodos(newtodos);
  }
  return (
    <div className="App">
      <div>
        <div className="borda">
          <Form addTodo={addTodo} />
        </div>
        <Todolist todos={todos} handleTodo={handleTodo} />
      </div>
    </div>
  );
}

export default App;
