import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import Board from "./Board";
import { useNavigate } from "react-router-dom";

const GameCpu = ({board, handleClickCpu, player}) => {
  const navigate = useNavigate(); // useNavigateフックを使用してnavigate関数を取得
  const [flg, setFlg] = useState(false);

  useEffect(() => {
    if (!board.flat().some(cell => cell === "pick" || cell === "empty") || flg) {
      navigate("/result", { replace: true }); // 条件を満たした場合にページ遷移
    }
  }, [navigate, board, flg]); // 依存配列にnavigateを追加

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