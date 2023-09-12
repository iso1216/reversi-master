import React, { useState } from 'react';
import Board from './Board';
import { CheckReverse } from './CheckReverse';
import { Reverse } from './Reverse';

const App = () => {
  const [board, setBoard] = useState(Array(64).fill("empty"));
  const [player, setPlayer] = useState(true);
  const [view, setView] = useState(false);
  const color = ["white", "black"];

  /*　石を置ける場所の判定　*/
  const Checker = (updateBoard) => {
    let flg = player ? 0 : 1;
    for (let index = 0; index < updateBoard.length; index++) {
      if (updateBoard[index] === color[1-flg]){
        updateBoard = CheckReverse(updateBoard, index, flg, color);
      }
    }
    return updateBoard;
  }

  /*　初期配置の設置　*/
  const startGame = () => {
    const newBoard = Array(64).fill("empty");
    newBoard[27] = 'white';
    newBoard[28] = 'black';
    newBoard[35] = 'black';
    newBoard[36] = 'white';
    newBoard[20] = 'pick';
    newBoard[29] = 'pick';
    newBoard[34] = 'pick';
    newBoard[43] = 'pick';
    setBoard(newBoard);
    setPlayer(true);
    setView(true);
  }

  /*　石を置く機能　*/
  const handleClick = (i) => {
    const newBoard = [...board];
    newBoard[i] = player ? 'white' : 'black';
    for (let index = 0; index < newBoard.length; index++) {
      if (!(newBoard[index] === "black" || newBoard[index] === "white"))newBoard[index] = "empty";
    }
    setBoard(Checker(Reverse(newBoard, i, color)));
    setPlayer(!player);
  }

  /*　ゲーム盤面　*/
  const viewBoard = () => {
    return (
      <div className='game-board'>
        <Board
          board={board}
          onClick={(i) => handleClick(i)}
        />
        <button onClick={() => startGame()}>再試合</button>
      </div>
    );
  }

  /*　最初の画面　*/
  const viewStart = () => {
    return (
      <div className='LP'>
        <button onClick={() => startGame()}>スタート！！！</button>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='game'>
        {view ? viewBoard() : viewStart()}
      </div>
    </div>
  );
}

export default App;
