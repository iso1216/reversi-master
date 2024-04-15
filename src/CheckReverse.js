/* 8方向の石の判定 */
export const CheckReverse = (board, i, j, player) => {
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

    // 盤面の範囲内かつ反対のプレイヤーの石が続く間ループ
    while (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === player) {
      tilesToFlip.push([x, y]);
      x += dx;
      y += dy;
    }

    // ループを抜けた後、自分の石で挟まれているか確認
    if (x >= 0 && x < 8 && y >= 0 && y < 8 && board[x][y] === "empty" && tilesToFlip.length !== 0) {
      // 挟まれている場所をpickに変更
      board[x][y] = 'pick';
    }
  });
  
  return board;
};
