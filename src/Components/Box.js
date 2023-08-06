import React, { useState } from "react";
import Squres from "./Squres";

const Box = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  // console.log(state);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      // console.log(logic);
      // console.log(state)
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }
    return false;
  };

  const isWinner = checkWinner();
  // console.log(isWinner)

  const handleClick = (i) => {
    let copyState = [...state];
    // console.log("clicked box", i);
    copyState[i] = isX ? "x" : "o";
    setState(copyState);
    setIsX(!isX);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <>
      {isWinner ? (
        <>
          <p>{isWinner} is won</p>
          <br />
          <button onClick={handleReset}>Play again</button>
        </>
      ) : (
        <div className="box-container">
          <div className="box-row">
            <Squres value={state[0]} onClick={() => handleClick(0)} />
            <Squres value={state[1]} onClick={() => handleClick(1)} />
            <Squres value={state[2]} onClick={() => handleClick(2)} />
          </div>
          <div className="box-row">
            <Squres value={state[3]} onClick={() => handleClick(3)} />
            <Squres value={state[4]} onClick={() => handleClick(4)} />
            <Squres value={state[5]} onClick={() => handleClick(5)} />
          </div>
          <div className="box-row">
            <Squres value={state[6]} onClick={() => handleClick(6)} />
            <Squres value={state[7]} onClick={() => handleClick(7)} />
            <Squres value={state[8]} onClick={() => handleClick(8)} />
          </div>
        </div>
      )}
    </>
  );
};

export default Box;
