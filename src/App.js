import './App.css';
import React from 'react';
import Board from './Board';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      board: Array(64).fill(null),
      player: true,
    };
  }

  render(){
    return (
      <div className="App">
        <div className='game-board'>
          <Board 
            board={this.state.board}
          />
        </div>
      </div>
    );
  }
}

export default App;
