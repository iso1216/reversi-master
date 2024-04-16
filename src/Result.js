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
			<Typography variant="h4" sx={{mt: 1, fontFamily: "-moz-initial"}}>{CheckResult(board)}</Typography>
			<Button
				variant="contained"
				component={RouterLink}
				to={'/'}
        sx={{
					backgroundColor: "black",
					fontSize: 20,
					fontWeight: 500,
					fontFamily: "-moz-initial",
          mr: 5
        }}
			>終了して最初の画面に戻る</Button>
		</Box>
	);
};

export default Result;