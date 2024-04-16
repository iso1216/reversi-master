import { Box } from '@mui/material';
import React from 'react';
import Space from './Space';

const Board = ({board, onClick}) => {
  // 盤面を描画する関数
  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <Box key={rowIndex} sx={{ display: 'flex' }}>
        {row.map((cell, cellIndex) => (
          <Space key={cellIndex} rowIndex={rowIndex} cellIndex={cellIndex} cell={cell} onClick={() => onClick(rowIndex, cellIndex)} />
        ))}
      </Box>
    ));
  };

  return (
    <Box sx={{border: '1px solid #444', mt: {md: 5, xs: 15}}}>
      {renderBoard()}
    </Box>
  );
};

export default Board;