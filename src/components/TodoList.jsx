import EmptyMessage from "./EmptyMessage";
import TodoItem from "./TodoItem";

function TodoList({ list, onDeleteTodo, onToggleCompletedTodo }) {
  return (
    <div className="items">
      {/* show Todo list if there is at least one item in array */}
      {list.length > 0 ? (
        <ul>
          {list.map((list) => (
            <TodoItem
              key={list.id}
              list={list}
              onDeleteTodo={onDeleteTodo}
              onToggleCompletedTodo={onToggleCompletedTodo}
            />
          ))}
        </ul>
      ) : (
        // else show a message saying there is no item in todo list
        <EmptyMessage />
      )}
    </div>
  );
}

export default TodoList;
