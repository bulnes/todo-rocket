import { useState } from "react";
import { Input } from "../Input";
import { NewTodoButton } from "../NewTodoButton";

import styles from "./NewTodo.module.css";

interface NewTodoProps {
  onSubmit: (todo: string) => void;
}

export function NewTodo({ onSubmit }: NewTodoProps) {
  const [todoValue, setTodoValue] = useState("");

  function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();

    onSubmit(todoValue);
    setTodoValue("");
  }

  function handleTodoChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTodoValue(event.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit} className={styles.newTodo}>
      <Input
        placeholder="Adicione uma nova tarefa"
        value={todoValue}
        onChange={handleTodoChange}
      />
      <NewTodoButton />
    </form>
  );
}
