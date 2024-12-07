import { useState } from "react";
import "./App.css";
import AddFrom from "./components/add";
import Todos from "./components/todos";
import "./css/test.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false },
  ]);

  const addTodo = (newTodoTitle) => {
    const newTodo = {
      id: Date.now(),
      title: newTodoTitle,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    todos.splice(index, 1);
    setTodos([...todos]);
  };
  return (
    <section className="bg-midnight">
      <section className="container mx-auto">
        <AddFrom addTodo={addTodo} />
        <Todos todos={todos} deleteTodo={deleteTodo} />
      </section>
    </section>
  );
}

export default App;
