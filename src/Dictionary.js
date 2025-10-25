import React, { useState } from "react";
import axios from "axios";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import WordImages from "./WordImages";
import './Dictionary.css';

export default function Dictionary() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState(null);
  const [images, setImages] = useState([]);

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data);
  }

  function handleImageResponse(response) {
    setImages(response.data.photos);
  }

  function search(event) {
    event.preventDefault();

    // SheCodes Dictionary API
    let dictionaryApiKey = "6b0de8c4f230fd2bf4t68daf5046oe9a";
    let dictionaryUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${dictionaryApiKey}`;
    axios.get(dictionaryUrl).then(handleResponse);

    // Pexels Image API
    let pexelsApiKey = "pxdpvrPEYhm98uq4FOxVeGe47bQWmqXp6OADlYuYh4jef5smcIBzur1E";
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=5`;
    axios
      .get(pexelsUrl, {
        headers: { Authorization: pexelsApiKey }
      })
      .then(handleImageResponse);
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
          <Phonetic
            phonetic={result.phonetic}
            audio={result.phonetics?.find(p => p.audio)?.audio}
          />
          {result.meanings.map((meaning, index) => (
            <Meaning key={index} meaning={meaning} />
          ))}
        </div>
      )}

      {images.length > 0 && <WordImages images={images} />}
    </div>
  );
}