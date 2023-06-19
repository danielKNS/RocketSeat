import React, { useState } from "react";
import styles from "./Comment.module.css";
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import Avatar from "./Avatar";

const Comment = ({ content, deleteComment }) => {
  const [likeCount, setLikeCount] = useState(0);
  const handleDeleteComment = () => {
    deleteComment(content);
  };

  const handleLikeComment = () => {
    setLikeCount(likeCount + 1);
  };
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

            <button onClick={handleDeleteComment} title="Delete the comment">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Like
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
