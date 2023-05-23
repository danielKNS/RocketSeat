import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article>
      <header className={styles.post}>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/danielKNS.png"
          />
          <div className={styles.authorInfo}>
            <strong></strong>
            <span></span>
          </div>
        </div>
      </header>
    </article>
  );
};

export default Post;
