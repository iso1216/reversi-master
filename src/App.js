import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Game from './VS/Game';
import { Reverse } from './Reverse';
import Result from './Result';
import GameCpu from './VSCPU/Game';
import { ReverseCpu } from './ReverseCpu';
import { Box } from '@mui/material';

const App = () => {
  const [board, setBoard] = useState(Array(8).fill(null).map(() => Array(8).fill("empty")));
  const [player, setPlayer] = useState(true);
  const handleClick = (i,j) => {
    const newBoard = board.map(row => 
      row.map(cell => cell === "pick" ? "empty" : cell)
    );
    if (isFinite(i)) newBoard[i][j] = player;
    setBoard(Reverse(newBoard,i,j,player));
    setPlayer(!player);
  }
  const handleClickCpu = (i,j,setFlg) => {
    const newBoard = board.map(row => 
      row.map(cell => cell === "pick" ? "empty" : cell)
    );
    if (isFinite(i)) newBoard[i][j] = true;
    setBoard(Reverse(newBoard,i,j,player));
    setPlayer(!player);
    setTimeout(() => {
      if (!board.flat().some(cell => cell === "pick" || cell === "empty")) return;
      setBoard(ReverseCpu(newBoard,false,i,setFlg));
      setPlayer(true);
    }, 1000);
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
    <Box display={'flex'} justifyContent={'center'}>
    <Router>
      <Routes>
        <Route expect path="/" element={ <Home startGame={startGame} /> } />
        <Route expect path="/reversi-master" element={<Home startGame={startGame} />} />
        <Route path="/game" element={<Game board={board} handleClick={handleClick} player={player} />} />
        <Route path="/cpu" element={<GameCpu board={board} handleClickCpu={handleClickCpu} player={player} />} />
        <Route path="/result" element={<Result board={board} />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
