import styles from "./Counter.module.css";

interface CounterProps {
  label: string;
  partial?: number;
  total: number;
}

export function Counter({ label, partial, total }: CounterProps) {
  const partialIsSetted = partial !== undefined;

  return (
    <div className={styles.container}>
      <span>{label}</span>

      <span className={styles.counter}>
        {partialIsSetted && `${partial} de `}
        {total}
      </span>
    </div>
  );
}
