import React from "react";
import "./head.css";

const Head = ({ head ,headImg }) => {
  return (
    <figure className="front">
      <img src={head} alt="head" className={headImg === head? "dinar-head" : "dinars-tail"} />
    </figure>
  );
};

export default Head;
