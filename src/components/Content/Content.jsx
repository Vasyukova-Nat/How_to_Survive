import "./Content.css";

function Content({ title, text}) {

  return (
    <>
      <h2 className="content__header">{title}</h2>
      <h2 className="content__body">
        <div className="content__text">{text}</div>
      </h2>
    </>
  );
}

export default Content;
