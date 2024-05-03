import "./Button.css";

function Button({ text, link }) {
  const handleClick = () => {
    window.location.href = link; // ссылка для перехода
  };

  return (
    <button className="button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default Button;
