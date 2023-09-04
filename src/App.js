import React, { useState } from 'react';
import Board from './Board';

const App = () => {
  const [board, setBoard] = useState(Array(64).fill("empty"));
  const [player, setPlayer] = useState(true);
  const [view, setView] = useState(false);

  /*　石を置ける場所の判定　*/
  const Checker = (updateBoard) => {
    for (let index = 0; index < updateBoard.length; index++) {
      if (updateBoard[index] === "black" || updateBoard[index] === "white"){
        for (let i = -1; i <= 1; i++){
          for (let j = -1; j <=1; j++){
            if (index%8===0 && j===-1) continue;
            if (index%8===7 && j===1) continue;
            if (updateBoard[index+j+(8*i)]==="empty") updateBoard[index+j+(8*i)]="pick";
          }
        }
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
    setBoard(Checker(newBoard));
    setView(true);
  }

  /*　石を置く機能　*/
  const handleClick = (i) => {
    const newBoard = [...board];
    newBoard[i] = player ? 'white' : 'black';
    setBoard(Checker(newBoard));
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
