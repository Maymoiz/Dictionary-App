import React from "react";

export default function Phonetic({ phonetic }) {
  return (
    <div className="Phonetic">
      <p className="phonetic">/{phonetic}/</p>
    </div>
  );
}