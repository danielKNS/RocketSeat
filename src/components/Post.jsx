import React from "react";
import styles from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";
import { format } from "date-fns";
import enUS from "date-fns/locale/en-US";

// this is called destructuring
const Post = ({ author, publishedAt }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'of' LLLL 'at' HH:mm'h' ",
    { locale: enUS }
  );
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

        <time title="11 of May at 8:30" dateTime="2023-05-11">
          {publishedDateFormatted}
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀{" "}
        </p>
        <p>
          <a href="">jane.design/doctorcare </a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Leave your comment</strong>

        <textarea placeholder="Write your comment" />

        <footer>
          <button type="submit">Publish</button>
        </footer>
      </form>

      {/* //List of Comments */}
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
};

export default Post;
