function Footer({ list, onFilter, activeFilter }) {
  const completedTasks = list.filter((list) => list.completed).length;

  console.log(activeFilter);
  const TODO_LIST = list.length;
  // calculate how many uncompleted tasks are left
  const REMAINING_TODOS = TODO_LIST - completedTasks;

  return (
    <div className="footer">
      {REMAINING_TODOS === 0 ? (
        <p className="items-quantity">Todos Completed!</p>
      ) : REMAINING_TODOS > 1 ? (
        <p className="items-quantity">{REMAINING_TODOS} items left</p>
      ) : (
        <p className="items-quantity">1 item left</p>
      )}

      <div className="btn-group">
        <button
          className={activeFilter === "all" ? "active" : ""}
          onClick={() => onFilter("all")}
        >
          All
        </button>
        <button
          className={activeFilter === "active" ? "active" : ""}
          onClick={() => onFilter("active")}
        >
          Active
        </button>
        <button
          className={activeFilter === "completed" ? "active" : ""}
          onClick={() => onFilter("completed")}
        >
          Completed
        </button>
      </div>
      <button onClick={() => onFilter("active")}>Clear Completed</button>
    </div>
  );
}

export default Footer;
