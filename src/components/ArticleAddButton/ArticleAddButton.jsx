import "./ArticleAddButton.css";

function ArticleAddButton({ text, link }) {
  const handleClick = () => {
    window.location.href = link; // ссылка для перехода
  };

  return (
    <button className="art_add_btn" onClick={handleClick}>
      {text}
    </button>
  );
}

export default ArticleAddButton;
