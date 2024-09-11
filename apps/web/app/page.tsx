import Image from "next/image";
// import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import App from "../node_modules/gnb/dist";

export default function Home() {
  return (
    <div className={styles.page}>
      <App />
    </div>
  );
}
