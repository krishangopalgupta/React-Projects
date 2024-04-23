import Square from "./Square";
import { useState } from "react";

import "./TTT.css";
const TTT = () => {
  const [update, setUpdate] = useState(Array(9).fill(null));
  const [isnext, setIsNext] = useState(false);

  function handleClick(i) {
    if (update[i] || calculateWinner(update)) return;
    const copyUpdate = [...update];
    isnext ? (copyUpdate[i] = "X") : (copyUpdate[i] = "O");
    setUpdate(copyUpdate);
    setIsNext(!isnext);
  }


  let winner = calculateWinner(update);
  let status;
  winner
    ? (status = `winner is ${winner}`)
    : (status = isnext? "X is next": "O is next" );
  return (
    <div>
      <div>{status} </div>
      <button onClick={()=>setUpdate(Array(9).fill(null))}>Restart</button>
      <div className="row-span">
        <Square value={update[0]} onSquareClick={() => handleClick(0)} />
        <Square value={update[1]} onSquareClick={() => handleClick(1)} />
        <Square value={update[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="row-span">
        <Square value={update[3]} onSquareClick={() => handleClick(3)} />
        <Square value={update[4]} onSquareClick={() => handleClick(4)} />
        <Square value={update[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="row-span">
        <Square value={update[6]} onSquareClick={() => handleClick(6)} />
        <Square value={update[7]} onSquareClick={() => handleClick(7)} />
        <Square value={update[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default TTT;

function calculateWinner(update) {
  const winnerLines = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < winnerLines.length; i++) {
    const [a, b, c] = winnerLines[i];
    if (update[a] && update[a] === update[b] && update[b] === update[c]) {
      return update[a];
    }
  }
  return null;
}
