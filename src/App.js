import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './Game';
import { Reverse } from './Reverse';

const App = () => {
  const [board, setBoard] = useState(Array(8).fill(null).map(() => Array(8).fill("empty")));
  const [player, setPlayer] = useState(true);
  const handleClick = (i,j) => {
    const newBoard = board.map(row => 
      row.map(cell => cell === "pick" ? "empty" : cell)
    );
    newBoard[i][j] = player;
    setBoard(Reverse(newBoard,i,j,player));
    setPlayer(!player);
  }

  const startGame = () => {
    const newBoard = Array(8).fill(null).map(() => Array(8).fill("empty"));
    newBoard[3][3] = true;
    newBoard[3][4] = false;
    newBoard[4][3] = false;
    newBoard[4][4] = true;
    newBoard[3][5] = 'pick';
    newBoard[2][4] = 'pick';
    newBoard[4][2] = 'pick';
    newBoard[5][3] = 'pick';
    setBoard(newBoard);
    setPlayer(true);
  }

  return (
    <Router>
      <Routes>
        <Route expect path="/reversi-master" element={<Home startGame={startGame} />} />
        <Route path="/game" element={<Game board={board} handleClick={handleClick} />} />
      </Routes>
    </Router>
  );
}

export default App;
