import "./ContentList.css";

function ContentList({ children }) {
  return (
    <div className="content-list">
      {children}
    </div>
  );
}

export default ContentList;
