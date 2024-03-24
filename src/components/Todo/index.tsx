import { useState } from "react";
import { EmptyTodo } from "../EmptyTodo";
import { NewTodo } from "../NewTodo";

import { TodoType } from "../../types/TodoType";
import { Counter } from "../Counter";
import { TodoList } from "../TodoList";
import styles from "./Todo.module.css";

export function Todo() {
  const [todos, setTodo] = useState<TodoType[]>([]);

  function handleNewTodoItem(todo: string) {
    setTodo([...todos, { content: todo, status: false }]);
  }

  function handleRemoveTodoItem(todoIndex: number) {
    const newTodos = todos.filter((_, index) => index !== todoIndex);
    setTodo(newTodos);
  }

  const completedTodos = todos.filter((todo) => todo.status).length;

  return (
    <div>
      <NewTodo onSubmit={handleNewTodoItem} />

      <div>
        <header className={styles.header}>
          <Counter label="Tarefas criadas" total={todos.length} />
          <Counter
            label="Concluídas"
            total={todos.length}
            partial={completedTodos}
          />
        </header>

        {todos.length === 0 && <EmptyTodo />}

        {todos.length > 0 && (
          <TodoList todos={todos} onDeleteTodo={handleRemoveTodoItem} />
        )}
      </div>
    </div>
  );
}
