import React from "react";

import styles from './Main.module.css';

interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return <main className={styles.main}>{children}</main>;
}
