import React, { useState } from "react";

export default function Button() {
  const [showButton, setShowButton] = useState(false);
  return (
    <div>
      <button data-testid="button" onClick={() => setShowButton(true)}>Click Here</button>
      {showButton && <button data-testid="button">Tada..!</button>}
    </div>
  );
}
