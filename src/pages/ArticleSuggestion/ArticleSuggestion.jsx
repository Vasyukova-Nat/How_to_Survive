import "../../App.css";
import "./ArticleSuggestion.css";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import FeedBackArticle from "../../components/FeedBackArticle/FeedBackArticle";

function Contacts() {
  return (
    <div className="page-suggestion">

      <Breadcrumbs />

      <div style={{display: 'flex', background: '#DEF0F8'}}>
        <h5 style={{fontSize: '36px', fontWeight: '500', textAlign: 'center', width: '100%'}}>Предложить статью</h5>
      </div>

      <div className="suggestion-container">
          <p>Ниже вы можете предложить статью</p>
          <FeedBackArticle/>
      </div>
      
    </div>
  );
}

export default Contacts;
