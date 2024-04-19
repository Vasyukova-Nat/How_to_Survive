import CardButton from '../CardButton/CardButton';
import "./ArticleAddButton.css";

function ArticleAddButton() {
  return (
    <CardButton className="article-add">
        Предложить статью
        <img width='20' src='/plus.svg' alt="╨Ч" />
        {/* className='plus' */}
    </CardButton>
    
  );
}

export default ArticleAddButton;
     
    