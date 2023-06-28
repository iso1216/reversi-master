import React from 'react';
import Board from './Board';
import Checker from './checker';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: Array(64).fill("empty"),
      player: true,
      view: false,
    };
  }

  startGame() {
    const board = Array(64).fill("empty");
    board[27]='white';
    board[28]='black';
    board[35]='black';
    board[36]='white';
    this.setState({
      board: board,
      view: true,
    })
  }

  handleClick(i){
    const board = this.state.board.slice();
    if(board[i] !== "empty") return;
    board[i] = this.state.player ? 'white' : 'black';
    this.setState({
      board: board,
      player: !this.state.player
    });
  }

  viewBoard(){
    return (
    <div className='game-board'>
      <Board
        board={this.state.board}
        onClick={(i) => this.handleClick(i)}
      />
      <button onClick={()=>this.startGame()}>再試合</button>
    </div>
    );
  }

  viewStart(){
    return (
      <div className='LP'>
        <button onClick={()=>this.startGame()}>スタート！！！</button>
      </div>
    );
  }
  render(){
    return (
      <div className="App">
        <div className='game'>
          {this.state.view ? 
          this.viewBoard() : 
          this.viewStart()}
        </div>
      </div>
    );
  }
}

export default App;
