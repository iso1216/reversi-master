import { Box, Typography } from "@mui/material";
import BoardResult from "./BoardResult";
import { CheckResult } from "./CheckResult";

const Result = ({board}) => {
	return (
		<Box>
			<BoardResult
        board={board}
      />
			<Typography>{CheckResult(board)}</Typography>
		</Box>
	);
};

export default Result;