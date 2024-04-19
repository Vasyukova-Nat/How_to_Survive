import "./ArticleImg.css";

function ArticleImg({ img }) {
  return (
    <div className="article_img">
      <img src={img} alt="F" />
    </div>
  );
}

export default ArticleImg;
