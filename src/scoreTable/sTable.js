import React from "react";
import "./sTable.css"

const Stable = ({ right,wrong,change }) => {
   
  return (
    <table>
    <thead>
      <tr>
        <th>Guess</th>
        <th>Score</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Right</td>
        <td className={change === 1 ? "greedBackground" : null}>{right}</td>
      </tr>
      <tr>
        <td>Wrong</td>
        <td className={change === 2 ? "redBackground" : null}>{wrong}</td>
      </tr>
      </tbody>
    </table>
  );
};

export default Stable