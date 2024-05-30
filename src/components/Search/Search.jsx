import "./Search.css";

function Search({ ...props }) {
  return (
    <div className="search">
      <input
        {...props}
        type="text"
        placeholder="Поиск статьи"
      />
      <img src="/search.svg" alt="F" style={{marginRight: '8px'}}/>
    </div>
  );
}

export default Search;
