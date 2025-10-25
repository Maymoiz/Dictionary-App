import React, { useState } from "react";
import './Dictionary.css';
import axios from "axios";

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
    setResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = '6b0de8c4f230fd2bf4t68daf5046oe9a';
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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

      {result && (
        <div className="Results">
          <h2>{result.word}</h2>
          <p>{result.meanings.definition}</p> {/* You’ll likely need to adjust this based on the actual API structure */}
        </div>
      )}
    </div>
  );
}