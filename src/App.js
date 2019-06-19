import React, { useState,useEffect } from "react";
import "./App.css";
import Head from "./Head/head";
import Tail from "./Tail/tail";
import {files} from "./config/fileUrl"
import InitialState from "./intialStateg/gamestart";
import HTBtn from "./choiceButton/head&tailBTN";
import Stable from "./scoreTable/sTable";
import { randNum } from "./helper";

function App() {
  const coins = [files.head,  files.tail];
  const [flip, flipIt] = useState(false);
  const [randCoins1, randUp] = useState(randNum(coins));
  const [randCoins2, randUp2] = useState(randNum(coins));
  const [game, startGame] = useState(false);
  const [choice, setChoice] = useState(null);
  const [result, showResult] = useState(false);
  const [type, setType] = useState(null);
  const [finalCoin, setFinal] = useState(false);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [change,setChange] = useState(0)

  useEffect(() => {
    setChange(1);
    setTimeout(() => {
      setChange(0);
    }, 4000);
  }, [right]);
  useEffect(() => {
    setChange(3);
    setTimeout(() => {
      setChange(0);
    }, 4000);
  }, [wrong]);


  if (randCoins1 === randCoins2) {
    randUp(randNum(coins));
    randUp2(randNum(coins));
  }

  return (
    <div className="App">
      <img width="271px" height="200px" src={files.logo} alt="logo" />
      {!game ? (
        <InitialState
          flip={flip}
          coins={coins}
          randCoins1={randCoins1}
          randCoins2={randCoins2}
          result={result}
          type={type}
          choice={choice}
          finalCoin={finalCoin}
        />
      ) : (
        <div className="cont-flip">
          <Tail tail={coins[randCoins1]} tailImg={files.tail} />
          <Head head={coins[randCoins2]} headImg={files.head} />
        </div>
      )}
      {game ? (
        <button
          className="button"
          onClick={() => {
            startGame(false);
            if (coins[randCoins1] === files.head) {
              setType("head");
            } else if (coins[randCoins1] === files.tail) {
              setType("tail");
            }
            setFinal(true);
            setTimeout(() => {
              setFinal(false);
            }, 4000);
            if (coins[randCoins1] === choice) {
              setRight(right + 1);
            } else {
              setWrong(wrong + 1);
            }
          }}
        >
          <h2>Stop</h2>
          <p style={{ fontWeight: "bolder", color: "rgb(100, 46, 2)" }}>
            When You Ready
          </p>
        </button>
      ) : (
        <React.Fragment>
          <HTBtn
            onclickHead={() => {
                randUp(randNum(coins));
                randUp2(randNum(coins));
              startGame(true);
              showResult(true);
              setChoice(files.head);
            }}
            onmouseOverHead={() => {
              if (randCoins1 === 0) {
                flipIt(false);
              } else {
                flipIt(true);
              }
            }}
            onclickTail={() => {
              randUp(randNum(coins));
              randUp2(randNum(coins));
              startGame(true);
              showResult(true);
              setChoice(files.tail);
            }}
            onmouseOverTail={() => {
              if (randCoins1 === 1) {
                flipIt(false);
              } else {
                flipIt(true);
              }
            }}
          />
          <Stable right={right} wrong={wrong} change={change}  />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
