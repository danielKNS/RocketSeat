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

  const [newCommentText, setNewCommentText] = useState("");

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

    setComments([...comments, newCommentText.trim()]);
    setNewCommentText("");

    console.log(comments);
  };

  const handleNewCommentChange = () => {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  };
  const deleteComment = (commentToDelete) => {
    // this is imutabilidade/immutability
    const commentsWithoudDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoudDeletedOne);
  };

  const handleNewCommentInvalid = () => {
    event.target.setCustomValidity("this field is mandatory");
  };

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      {/* Aqui embaixo é o cabeçalho que contem as info do usuario +
      a data de publicação */}
      <header>
          {/* O avatar e outros estão em um div diferente para não ter
          dificuldade para alinhar */}
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

        {/* Aqui embaixo é o conteudo do post */}
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Leave your comment</strong>

        <textarea
          name="comment"
          placeholder="Write your comment"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publish
          </button>
        </footer>
      </form>

      {/* //List of Comments */}
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
