const Post = (property) => {
  return (
    <div>
      <strong>{property.author}</strong>
      <p>{property.content}</p>
    </div>
  );
};

export default Post;
