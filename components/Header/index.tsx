import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.item}>
            <Link href="/users">Users</Link>
          </li>
          <li className={styles.item}>
            <Link href="/blog">Blog Page</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
