import { Box, Button, Typography } from "@mui/material";
import BoardResult from "./BoardResult";
import { CheckResult } from "./CheckResult";
import { Link as RouterLink } from "react-router-dom";

const Result = ({board}) => {
	return (
		<Box>
			<BoardResult
        board={board}
      />
			<Typography>{CheckResult(board)}</Typography>
			<Button
				variant="outlined"
				component={RouterLink}
				to={'/'}
        sx={{
          mr: 5
        }}
			>終了して最初の画面に戻る</Button>
		</Box>
	);
};

export default Result;