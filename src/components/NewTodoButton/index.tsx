import { ButtonHTMLAttributes } from "react";
import plusImage from "../../assets/plus.svg";

import styles from "./NewTodoButton.module.css";

interface NewTodoButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function NewTodoButton({ ...props }: NewTodoButtonProps) {
  return (
    <button className={styles.button} type="submit" {...props}>
      <span>Criar</span>
      <img src={plusImage} alt="Adicionar nova tarefa" />
    </button>
  );
}
