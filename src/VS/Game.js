import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useNavigate } from "react-router-dom";

const Game = ({board, handleClick, player}) => {
  const [flg, setFlg] = useState(0); // ゲーム終了判定のためのフラグ
  const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得

  // 盤面に石を置いた時とpassを押したときに、ゲーム終了かどうかの判定
  useEffect(() => {
    // 二連続でpassが押されたか、盤面のすべてのマスが埋まったときにresultに遷移
    if (flg >= 2 || !board.flat().some(cell => cell === "pick" || cell === "empty")) {
      navigate("/result", { replace: true });
    }
  }, [flg, navigate, board]);

  return(
		<Box>
      <Typography variant="h4" sx={{mt: {md: 5, xs: 15}}}>Turn of {player ? "white" : "black"}</Typography>
			<Board
        board={board}
        onClick={(i,j) => {handleClick(i,j); setFlg(0);}}
      />
      {
        // 盤面における場所がない場合にpassのボタンを表示
        !board.flat().some(cell => cell === "pick") &&
        <Button onClick={() => {handleClick(Infinity,Infinity); setFlg(flg+1)}}>Pass</Button>
      }
		</Box>
	);
}

export default Game;