// Definition.js
import React from "react";

export default function Definition({ definition }) {
  return (
    <div className="Definition">
      <p><strong>Definition:</strong> {definition.definition}</p>
      {definition.example && (
        <p><strong>Example:</strong> <em>{definition.example}</em></p>
      )}
      {definition.synonyms && definition.synonyms.length > 0 && (
        <p><strong>Synonyms:</strong> {definition.synonyms.join(", ")}</p>
      )}
      {definition.antonyms && definition.antonyms.length > 0 && (
        <p><strong>Antonyms:</strong> {definition.antonyms.join(", ")}</p>
      )}
    </div>
  );
}