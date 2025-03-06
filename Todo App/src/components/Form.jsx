import { useState } from "react";

function Form({ onAddTodo }) {
  const [task, setTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!task) return;

    const newTodo = { id: Date.now(), task, completed: false };
    if (task.length > 2) onAddTodo(newTodo);

    setTask("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="active-img-container">
        <button className="btn-active">
          <img src="/images/icon-check.svg" alt="check-mark" />
        </button>
      </div>
      <div className="input-container">
        <input
          placeholder="Create a new todo..."
          onChange={(e) => {
            setTask(e.target.value);
          }}
          type="text"
          value={task}
        />
      </div>
    </form>
  );
}

export default Form;
