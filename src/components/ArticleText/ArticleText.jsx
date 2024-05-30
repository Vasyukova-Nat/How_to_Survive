import "./ArticleText.css";
import ArticleImg from "../ArticleImg/ArticleImg";

function ArticleText({ text }) {
  return (
    <>
      {text.map((el, Index) =>
        el[0] != "/" ? (
          <div key={Index} className="article_text">
            {el}
          </div>
        ) : (
          <ArticleImg key={Index} img={el} />
        )
      )}
    </>
  );
}

export default ArticleText;
