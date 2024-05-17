import "./ArticleText.css";

function ArticleText({ text }) {
  return (
    <>
      {text.map((el, Index) => (
        <div key={Index} className="article_text">
          {el}
        </div>
      ))}
    </>
  );
}

export default ArticleText;
