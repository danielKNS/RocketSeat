import React from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import Avatar from "./Avatar";

const Comment = ({ content }) => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/danielkns.png" />
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

          <p>{content}</p>
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
