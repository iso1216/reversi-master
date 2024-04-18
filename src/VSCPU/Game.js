import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useNavigate } from "react-router-dom";

const GameCpu = ({board, handleClickCpu, player}) => {
  const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得
  const [flg, setFlg] = useState(false); // ゲーム終了判定のためのフラグ

  // 盤面に石を置いた時とpassを押したときに、ゲーム終了かどうかの判定
  useEffect(() => {
    // 盤面のすべてのマスが埋まっているかflgの状態によってresultに遷移
    if (!board.flat().some(cell => cell === "pick" || cell === "empty") || flg) {
      navigate("/result", { replace: true });
    }
  }, [navigate, board, flg]);

  return(
		<Box>
			<Board
        board={board}
        onClick={(i,j) => {handleClickCpu(i,j)}}
        player={player}
      />
      {
        !board.flat().some(cell => cell === "pick") &&
        <Button onClick={() => {handleClickCpu(Infinity,Infinity,setFlg)}}>Pass</Button>
      }
		</Box>
	);
}

export default GameCpu;