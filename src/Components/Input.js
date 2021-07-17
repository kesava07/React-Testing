import React, { useState } from "react";

export default function Input({ showDiv }) {
  const [text, setText] = useState("");
  return (
    <div>
      <input
        value={text}
        data-testid="searchBar"
        onChange={(event) => setText(event.target.value)}
        type="text"
        placeholder="Search.."
      />
      <h4 data-testid="displaySearch">{text}</h4>
      {showDiv && <p data-testid="divWantToShow">Hello welcome to React Testing</p>}
    </div>
  );
}
