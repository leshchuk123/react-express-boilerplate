import * as React from "react";

import styles from "./home.module.scss";

const HomePage = () => {
  return <div className={styles.alarmBlock}>
    <div className={styles.messageBlock}>
      <div className={styles.alarmMessage}>
        DON'T PANIC
      </div>
      <div className={styles.answerMessage}>
        The Answer to the Ultimate Question of Life, the Universe, and Everything is<br />
        <span className={styles.answer}>42!</span> 
      </div>
    </div>
  </div>;
}

export default HomePage;