import "./Search.css";

function Search({ ...props }) {
  return (
    <div className="search">
      <input
        {...props}
        type="text"
        placeholder="Поиск статьи"
        className="search_input"
      />
      <img src="/search.svg" alt="F" />
    </div>
  );
}

export default Search;
