import removeImage from "../../assets/remove.svg";
import { TodoType } from "../../types/TodoType";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
  onToggleStatus: (todo: string) => void;
  onDeleteTodo: (todo: string) => void;
}

export function TodoList({
  todos,
  onToggleStatus,
  onDeleteTodo,
}: TodoListProps) {
  function handleDeleteTodo(index: string) {
    onDeleteTodo(index);
  }

  function handleToggleStatus(index: string) {
    onToggleStatus(index);
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <div key={todo.content} className={styles.todoListItem}>
          <input
            type="checkbox"
            className={styles.todoListItemCheckbox}
            defaultChecked={todo.status}
            onChange={() => handleToggleStatus(todo.id)}
          />

          <span>{todo.content}</span>

          <button
            type="button"
            className={styles.todoListItemButton}
            onClick={() => handleDeleteTodo(todo.id)}
          >
            <img src={removeImage} alt="Remover tarefa" />
            <span className="sr-only">Remover tarefa</span>
          </button>
        </div>
      ))}
    </div>
  );
}
