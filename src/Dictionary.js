import React, { useState } from "react";
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${keyword}`);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}