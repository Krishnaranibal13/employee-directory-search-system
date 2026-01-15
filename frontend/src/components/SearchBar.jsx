// function SearchBar({ value, onChange, onSearch, onShowAll, onFocus }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") onSearch();
//   };

//   return (
//     <div className="search-row">
//       <input
//         type="text"
//         value={value}
//         placeholder="Search by name, department or designation..."
//         onChange={onChange}
//         onKeyDown={handleKeyDown}
//         onFocus={onFocus}   
//         style={{
//           padding: "12px",
//           width: "340px",
//           borderRadius: "8px",
//           border: "1px solid #cbd5e1",
//           fontSize: "15px",
//         }}
//       />

//       <button onClick={onSearch} style={btnPrimary}>Search</button>
//       <button onClick={onShowAll} style={btnSecondary}>Show All</button>
//     </div>
//   );
// }

// const btnPrimary = {
//   padding: "12px 20px",
//   borderRadius: "8px",
//   border: "none",
//   backgroundColor: "#2563eb",
//   color: "white",
//   fontSize: "15px",
//   cursor: "pointer",
// };

// const btnSecondary = {
//   padding: "12px 20px",
//   borderRadius: "8px",
//   border: "none",
//   backgroundColor: "#e5e7eb",
//   color: "#111827",
//   fontSize: "15px",
//   cursor: "pointer",
// };

// export default SearchBar;


// function SearchBar({ value, onChange, onSearch, onShowAll, onFocus }) {
//   const handleKeyDown = (e) => {
//     if (e.key === "Enter") onSearch();
//   };

//   return (
//     <div className="search-row">
//       <input
//         type="text"
//         value={value}
//         placeholder="Search by name, department or designation..."
//         onChange={onChange}
//         onKeyDown={handleKeyDown}
//         onFocus={onFocus}
//         className="search-input"
//       />

//       <button className="btn primary" onClick={onSearch}>
//         Search
//       </button>

//       <button className="btn secondary" onClick={onShowAll}>
//         Show All
//       </button>
//     </div>
//   );
// }

// export default SearchBar;


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
