import React, { useState } from "react";
import "../styles/toggle.css"

function Toggle() {
  const [state, setState] = useState(0);

  function togglestate() {
    setState(state ^ 1);
  }

  return (
    <div className="toggle" onClick={togglestate} state={state ? "on" : "off"}>
      <div className={state ? "toggleon" : "toggleoff"}></div>
    </div>
  );
}

export default Toggle;
