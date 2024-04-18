import { CheckReverse } from "./CheckReverse";

export const Reverse = (board, i, j, player) => {
  // 方向を定義: [x増分, y増分]
  const directions = [
    [-1, -1], // 上左
    [-1, 0],  // 上
    [-1, 1],  // 上右
    [0, -1],  // 左
    [0, 1],   // 右
    [1, -1],  // 下左
    [1, 0],   // 下
    [1, 1]    // 下右
  ];

  // 各方向に対して処理を実行
  directions.forEach(([dx, dy]) => {
    let x = i + dx;
    let y = j + dy;
    let tilesToFlip = [];

    // 盤面の範囲内かつ相手プレイヤーの石が続く間ループ
    while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === !player) {
      tilesToFlip.push([x, y]);
      x += dx;
      y += dy;
    }

    // ループを抜けた後、自分の石で挟まれているか確認
    if (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === player) {
      // 挟まれている石を反転
      tilesToFlip.forEach(([flipX, flipY]) => {
        board[flipX][flipY] = player;
      });
    }
  });

  // 置ける場所の確認
  let checkList = [];
  board.map((row, rowIndex) => 
    row.map((cell, cellIndex) => cell === !player && checkList.push([rowIndex, cellIndex]))
  );
  if (checkList.length === 0) return board;

  checkList.forEach(([i, j]) => {
    board = CheckReverse(board, i, j, player)
  });

  return board;
};
