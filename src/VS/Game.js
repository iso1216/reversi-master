import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useNavigate } from "react-router-dom";

const Game = ({board, handleClick, player}) => {
  const [flg, setFlg] = useState(0);
  const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得

  useEffect(() => {
    if (flg >= 2 || !board.flat().some(cell => cell === "pick" || cell === "empty")) {
      navigate("/result", { replace: true }); // 条件を満たした場合にページ遷移
    }
  }, [flg, navigate, board]); // 依存配列にnavigateを追加

  return(
		<Box>
      <Typography variant="h4" sx={{mt: {md: 5, xs: 15}}}>Turn of {player ? "white" : "black"}</Typography>
			<Board
        board={board}
        onClick={(i,j) => {handleClick(i,j); setFlg(0);}}
      />
      {
        !board.flat().some(cell => cell === "pick") &&
        <Button onClick={() => {handleClick(Infinity,Infinity); setFlg(flg+1)}}>Pass</Button>
      }
		</Box>
	);
}

export default Game;