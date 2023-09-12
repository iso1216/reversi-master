export const Reverse = (updateBoard, index, color) => {
  const flg = updateBoard[index] === color[0] ? 0 : 1;
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
    if (index%8 === 0 || index < 8)break;
    if (updateBoard[index-9] === color[1-flg]) index-=9;
    else {
      if (updateBoard[index-9] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index+=9;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const Up = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index < 8)break;
    if (updateBoard[index-8] === color[1-flg]) index-=8;
    else {
      if (updateBoard[index-8] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index+=8;
        }
      }
      break;
    }
  }
  return updateBoard;
}
const UpRight = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index < 8 || index%8 === 7)break;
    if (updateBoard[index-7] === color[1-flg]) index-=7;
    else {
      if (updateBoard[index-7] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index+=7;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const Left = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8 === 0)break;
    if (updateBoard[index-1] === color[1-flg]) index--;
    else {
      if (updateBoard[index-1] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index++;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const Right = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index%8 === 7)break;
    if (updateBoard[index+1] === color[1-flg]) index++;
    else {
      if (updateBoard[index+1] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index--;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const DownLeft = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55 || index%8 === 0)break;
    if (updateBoard[index+7] === color[1-flg]) index+=7;
    else {
      if (updateBoard[index+7] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index-=7;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const Down = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55)break;
    if (updateBoard[index+8] === color[1-flg]) index+=8;
      else {
      if (updateBoard[index+8] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index-=8;
        }
      }
      break;
    }
  }
  return updateBoard;
};
const DownRight = (updateBoard, i, flg, color) => {
  let index=i;
  while (true){
    if (index > 55 || index%8 === 7)break;
    if (updateBoard[index+9] === color[1-flg]) index+=9;
    else {
      if (updateBoard[index+9] === color[flg]){
        while (index !== i){
          updateBoard[index] = color[flg];
          index-=9;
        }
      }
      break;
    }
  }
  return updateBoard;
};
