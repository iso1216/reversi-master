export const CheckResult = (board) => {
  let checkColor = [0,0];
  board.map((row) => 
    row.map((cell) => cell ? checkColor[0]++ : checkColor[1]++)
  );
	if (checkColor[0] > checkColor[1]) return "Win of white";
	else if (checkColor[0] < checkColor[1]) return "Win of black";
	else return "Drow";
};