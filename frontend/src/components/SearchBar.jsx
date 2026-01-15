function SearchBar({ value, onChange, onSearch, onShowAll, onFocus }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="search-row">
      <input
        type="text"
        value={value}
        placeholder="Search by name, department or designation..."
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
      />

      <button className="btn primary" onClick={onSearch}>Search</button>
      <button className="btn secondary" onClick={onShowAll}>Show All</button>
    </div>
  );
}

export default SearchBar;
