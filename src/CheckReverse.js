/* 8方向の石の判定 */
export const CheckReverse = (updateBoard, index, flg, color) => {
  updateBoard = UpLeft(updateBoard, index, flg, color);
  updateBoard = Up(updateBoard, index, flg, color);
  updateBoard = UpRight(updateBoard, index, flg, color);
  updateBoard = Left(updateBoard, index, flg, color);
  updateBoard = Right(updateBoard, index, flg, color);
  updateBoard = DownLeft(updateBoard, index, flg, color);
  updateBoard = Down(updateBoard, index, flg, color);
  updateBoard = DownRight(updateBoard, index, flg, color);
  return updateBoard;
};

const UpLeft = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8===0 || index<8) break;
    if (updateBoard[index - 9] === color[flg])index-=9;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index - 9] === "empty"){
        updateBoard[index - 9] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const Up = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index < 8) break;
    if (updateBoard[index - 8] === color[flg])index-=8;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index - 8] === "empty"){
        updateBoard[index - 8] = "pick";
      }
      break;
    }
  }
  return updateBoard;
}
const UpRight = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8 === 7 || index < 8) break;
    if (updateBoard[index - 7] === color[flg])index-=7;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index - 7] === "empty"){
        updateBoard[index - 7] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const Left = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8 === 0) break;
    if (updateBoard[index - 1] === color[flg])index--;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index - 1] === "empty"){
        updateBoard[index - 1] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const Right = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8 === 7) break;
    if (updateBoard[index + 1] === color[flg])index++;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index + 1] === "empty"){
        updateBoard[index + 1] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const DownLeft = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55 || index%8 === 0) break;
    if (updateBoard[index + 7] === color[flg])index+=7;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index + 7] === "empty"){
        updateBoard[index + 7] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const Down = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55) break;
    if (updateBoard[index + 8] === color[flg])index+=8;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index + 8] === "empty"){
        updateBoard[index + 8] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
const DownRight = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55 || index%8 === 7) break;
    if (updateBoard[index + 9] === color[flg])index+=9;
    else {
      if (updateBoard[index] === color[flg] && updateBoard[index + 9] === "empty"){
        updateBoard[index + 9] = "pick";
      }
      break;
    }
  }
  return updateBoard;
};
