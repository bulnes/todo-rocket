import clipcoardImage from "../../assets/clipboard.svg";

import styles from "./EmptyTodo.module.css";

export function EmptyTodo() {
  return (
    <div className={styles.emptyTodo}>
      <img src={clipcoardImage} alt="" loading="lazy" width={56} height={56} />

      <div className={styles.msg}>
        <h2>Você ainda não tem tarefas cadastradas</h2>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
