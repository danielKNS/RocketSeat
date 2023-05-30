import React from "react";
import styles from "./Post.module.css";
import Comment from "./Comment";
import Avatar from "./Avatar";

const Post = () => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/maykbrito.png" />
          <div className={styles.authorInfo}>
            <strong> Diego Fernandes </strong>
            <span> Web Developer </span>
          </div>
        </div>

        <time title="11 of May at 8:30" dateTime="2023-05-11">
          Published in 1h
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
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a> <a href="">#rocketseat</a>
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
