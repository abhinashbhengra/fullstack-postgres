export default function Post({ id, title, content, author }) {
  return (
    <div
      style={{ border: "1px solid white", padding: "15px", margin: "10px 0px" }}
    >
      <h3>{author}</h3>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  );
}
