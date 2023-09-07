import React, { useState } from "react";
import "../styles/clock.css"

function getDate() {
  return new Date().toLocaleTimeString();
}

function Clock() {
  const [date, setDate] = useState(getDate());

  function tick() {
    setDate(getDate())
  }

  setInterval(tick, 1000)

  return <div className="clock">{date}</div>;
}

export default Clock;
