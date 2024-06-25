import Todo from "../Todo/Todo";
import { useSelector } from "react-redux";
import "./TodoList.css";

function TodoList({ deleteTodo }) {
  const todos = useSelector((state) => state.todos.todoList);

  function onDeleteTodo(id) {
    deleteTodo({ id });
  }

  return (
    <div className="todo-list">
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            text={todo.text}
            deleteTodo={() => onDeleteTodo(todo.id)}
          />
        ))}
    </div>
  );
}

export default TodoList;
