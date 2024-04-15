import { Box } from '@mui/material';
import React from 'react';
import Space from './Space';

const Board = ({board, onClick}) => {
  // 盤面を描画する関数
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <Box key={rowIndex} sx={{ display: 'flex' }}>
        {row.map((cell, cellIndex) => (
          <Space key={cellIndex} row={rowIndex} cell={cellIndex} board={board} onClick={() => onClick(rowIndex, cellIndex)} />
        ))}
      </Box>
    ));
  };

  return (
    <Box>
      {renderBoard()}
    </Box>
  );
};

export default Board;