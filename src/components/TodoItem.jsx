function TodoItem({ list, onDeleteTodo, onToggleCompletedTodo }) {
  return (
    <li>
      <div className="items-desc">
        <button
          className={list.completed ? "btn-active" : "btn-inactive"}
          onClick={() => onToggleCompletedTodo(list.id)}
        >
          <img
            className={list.completed ? "" : "inactive"}
            src="/images/icon-check.svg"
            alt="check-mark"
          />
        </button>
        <p className={list.completed ? "task-desc" : ""}>{list.task}</p>
      </div>
      <div className="items-cancel">
        <img
          src="/images/icon-cross.svg"
          alt="cancel-button"
          onClick={() => onDeleteTodo(list.id)}
        />
      </div>
    </li>
  );
}

export default TodoItem;
