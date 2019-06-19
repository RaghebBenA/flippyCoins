import React from "react";
import "../App.css"

const HTBtn = ({
  onclickHead,
  onmouseOverHead,
  onclickTail,
  onmouseOverTail
}) => {
  return (
    <div className="cont-button">
      <button
        className="head-button"
        onClick={onclickHead}
        onMouseOver={onmouseOverHead}
      >
        <h2> Head</h2>
      </button>
      <button
        className="tail-button"
        onClick={onclickTail}
        onMouseOver={onmouseOverTail}
      >
        <h2> Tail</h2>
      </button>
    </div>
  );
};

export default HTBtn;
