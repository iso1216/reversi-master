import Box from "./Box";
import React from "react";

class Board extends React.Component {
  renderBox(i) {
    return (
      <Box
        key={i}
        value={this.props.board[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const edge = [0, 1, 2, 3, 4, 5, 6, 7];
    return (
      <div>
        {edge.map((index) => (
          <div className="board-row" key={index}>
            {edge.map((number) => this.renderBox(number + 8 * index))}
          </div>
        ))}
      </div>
    );
  }
}

export default Board;