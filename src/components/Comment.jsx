import React from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img className={styles.avatar} src="https://github.com/danielKNS.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Daniel Ribeiro</strong>
              <time title="11 of May at 8:30" dateTime="2023-05-11">
                Published in 1h
              </time>
            </div>

            <button title="Delete the comment">
              <Trash size={24} />
            </button>
          </header>

          <p>Very good Devon, congrats!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Like
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
