export const CheckResult = (board) => {
  let checkColor = [0,0];
  // マスの色を確認し石の数に合わせて結果を返す
  board.map((row) => 
    row.map((cell) => cell ? checkColor[0]++ : checkColor[1]++)
  );
	if (checkColor[0] > checkColor[1]) return "Win of white";
	else if (checkColor[0] < checkColor[1]) return "Win of black";
	else return "Drow";
};