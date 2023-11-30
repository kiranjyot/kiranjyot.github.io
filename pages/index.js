import Terminal from "../components/Terminal";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>
        kiranjyotgill:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href="https://kiranjyotgill.github.io" target="_blank" rel="noreferrer">
          Static Website
        </a>
      </p>

      <Terminal />
    </div>
  );
}
