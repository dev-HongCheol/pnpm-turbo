"use ";
import { BasicTextFields, RadioHookForm } from "@repo/ui/src/atoms";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <RadioHookForm />
      <BasicTextFields />
    </div>
  );
}
