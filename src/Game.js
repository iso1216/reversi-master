import { Box } from "@mui/material";
import React from "react";
import Board from "./Board";

const Game = ({board, handleClick}) => {
  return(
		<Box>
			<Board
        board={board}
        onClick={(i,j) => handleClick(i,j)}
      />
		</Box>
	);
}

export default Game;