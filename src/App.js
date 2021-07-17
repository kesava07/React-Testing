import React, { useState } from "react";
import Button from "./Components/Button";
import Input from "./Components/Input";

export default function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div>
      <Input showDiv={showDiv} />
      <Button />
    </div>
  );
}
