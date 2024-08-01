import React from "react";

function SearchFilter({ searchQuery, searchBook }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={searchBook}
      />
    </div>
  );
}

export default SearchFilter;
