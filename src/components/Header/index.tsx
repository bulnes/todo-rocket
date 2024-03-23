import logo from "../../assets/logo.svg";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <img
          src={logo}
          alt="ToDo Rocket"
          width={126}
          height={48}
          loading="lazy"
        />
        <span className="sr-only">ToDo Rocket</span>
      </h1>
    </header>
  );
}
