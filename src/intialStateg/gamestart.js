import React from "react";
import "./gamestart.css";

const InitialState = ({
  flip,
  coins,
  randCoins1,
  randCoins2,
  result,
  type,
  choice,
  finalCoin
}) => {
  return (
    <div className="container">
     {
       !finalCoin?
      <figure>
        {!flip ? (
          <img
            src={coins[randCoins1]}
            style={{ width: "250px", height: "250px" }}
            alt="head"
          />
        ) : (
          <img
            src={coins[randCoins2]}
            style={{ width: "250px", height: "250px" }}
            alt="tail"
          />
        )}
      </figure>
    :
    <React.Fragment>
    <figure>
      <img
      src={coins[randCoins1]}
      style={{ width: "250px", height: "250px" }}
      alt="head"
    />
      </figure>
      <figure>

        {
          coins[randCoins1] === choice ?
          <p className={!result ? "resultfirst" : "result"}>
            You win It's {" "}
            {type}
          </p>
          : 
          <p className={!result ? "redfirst" : "red"}>
          You Lose It's {" "}
          {type}
        </p>
        }
      </figure>
    </React.Fragment>
    }
      
    </div>
  );
};

export default InitialState;
