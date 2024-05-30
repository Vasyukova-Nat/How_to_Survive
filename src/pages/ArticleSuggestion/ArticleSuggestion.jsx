import "../../App.css";
import "./ArticleSuggestion.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FeedBackArticle from "../../components/FeedBackArticle/FeedBackArticle";

function Contacts() {
  return (
    <div className="page-suggestion">
      <Breadcrumbs />

      <div style={{ display: "flex", background: "#DEF0F8" }}>
        <h5
          style={{
            fontSize: "36px",
            fontWeight: "500",
            textAlign: "center",
            width: "100%",
          }}
        >
          Предложить статью
        </h5>
      </div>

      <div className="suggestion-container">
        <p>
          Ниже вы можете предложить как название и тему, так и уже готовый текст
          статьи. <br /> Также вы можете предложить дополнить уже существующую
          статью, указав её название и тему {'"'}Дополнение{'"'} в
          соответствующих полях.
        </p>
        <FeedBackArticle />
      </div>
    </div>
  );
}

export default Contacts;
