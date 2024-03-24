import removeImage from "../../assets/remove.svg";
import { TodoType } from "../../types/TodoType";
import styles from "./TodoList.module.css";

interface TodoListProps {
  todos: TodoType[];
  onDeleteTodo: (todo: number) => void;
}

export function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  function handleDeleteTodo(index: number) {
    onDeleteTodo(index);
  }

  return (
    <div className={styles.todoList}>
      {todos.map((todo, index) => (
        <div key={index} className={styles.todoListItem}>
          <input
            type="checkbox"
            id={`todo-${index}`}
            className={styles.todoListItemCheckbox}
            checked={todo.status}
            onChange={() => {}}
          />

          <span>{todo.content}</span>

          <button
            type="button"
            className={styles.todoListItemButton}
            onClick={() => handleDeleteTodo(index)}
          >
            <img src={removeImage} alt="Remover tarefa" />
            <span className="sr-only">Remover tarefa</span>
          </button>
        </div>
      ))}
    </div>
  );
}
