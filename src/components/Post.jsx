import React from "react";
import { useState } from "react";
import styles from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";
import { format, formatDistanceToNow } from "date-fns";
import enUS from "date-fns/locale/en-US";

// this is called destructuring
const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(["post muito bacana, hein ?"]);

  const publishedDateFormatted = format(
    publishedAt,
    "d 'of' LLLL 'at' HH:mm'h' ",
    { locale: enUS }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: enUS,
    addSuffix: true,
  });

  const handleCreateNewComment = () => {
    event.preventDefault();

    // const newCommentText =
    console.log(event.target.comment.value);

    setComments([...comments, comments.length + 1]);

    console.log(comments);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your comment</strong>

        <textarea name="comment" placeholder="Write your comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      {/* //List of Comments */}
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
};

export default Post;
