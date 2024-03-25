import { useState } from "react";
import { EmptyTodo } from "../EmptyTodo";
import { NewTodo } from "../NewTodo";

import { generateUUID } from "../../helpers/generate-uuid";
import { TodoType } from "../../types/TodoType";
import { Counter } from "../Counter";
import { TodoList } from "../TodoList";
import styles from "./Todo.module.css";

export function Todo() {
  const [todos, setTodo] = useState<TodoType[]>([]);

  function handleNewTodoItem(todo: string) {
    setTodo([...todos, { id: generateUUID(), content: todo, status: false }]);
  }

  function handleRemoveTodoItem(todoIndex: string) {
    const newTodos = todos.filter((todo) => todo.id !== todoIndex);
    setTodo(newTodos);
  }

  function handeToggleStatus(todoIndex: string) {
    const newTodos = todos.map((todo) => {
      if (todo.id === todoIndex) {
        return { ...todo, status: !todo.status };
      }

      return todo;
    });

    setTodo(newTodos);
  }

  return (
    <div>
      <NewTodo onSubmit={handleNewTodoItem} />

      <div>
        <header className={styles.header}>
          <Counter label="Tarefas criadas" total={todos.length} />
          <Counter
            label="Concluídas"
            total={todos.length}
            partial={todos.filter((todo) => Boolean(todo.status)).length}
          />
        </header>

        {todos.length === 0 && <EmptyTodo />}

        {todos.length > 0 && (
          <TodoList
            todos={todos}
            onToggleStatus={handeToggleStatus}
            onDeleteTodo={handleRemoveTodoItem}
          />
        )}
      </div>
    </div>
  );
}
