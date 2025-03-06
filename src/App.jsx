import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";

/*
const initialList = [
  { id: 1, task: "Complete online Javascript course", completed: true },
  { id: 2, task: "Jog around the park 3x", completed: false },
  { id: 3, task: "10 minutes meditation", completed: false },
  { id: 4, task: "Read for 1 hour", completed: false },
  { id: 5, task: "Pick Up Groceries", completed: false },
  { id: 6, task: "Complete Todo app on Frontend Mentor", completed: false },
];
*/
function App() {
  const [isDark, setIsDark] = useState(false); //for dark mode and day mode
  const [filter, setFilter] = useState("all"); //"all", "active", "completed"
  const [todos, setTodos] = useState(() => {
    // retrieve saved todos data from localStorage and set as initial set
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // save todos to localStorage whenever [todos] state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  function handleAddTodo(todo) {
    setTodos((todos) => [...todos, todo]);
  }

  // edit the completed status when toggled as complete/uncomplete
  function handleToggleCompletedTodos(id) {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todositem) => todositem.id !== id));
  }

  // filtering function for completed todos
  const filteredTodosList = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; //"all" case
  });

  useEffect(
    function () {
      document.body.classList.toggle("dark-mode");
    },
    [isDark]
  );

  return (
    <div className="app">
      <Header onIsDark={setIsDark} isDark={isDark} />
      <Form onAddTodo={handleAddTodo} />
      {/* <TodoList initialList={initialList} /> */}
      <TodoList
        onDeleteTodo={handleDeleteTodo}
        onToggleCompletedTodo={handleToggleCompletedTodos}
        list={filteredTodosList}
      />
      <Footer
        list={filteredTodosList}
        onFilter={setFilter}
        activeFilter={filter}
      />
    </div>
  );
}

export default App;
