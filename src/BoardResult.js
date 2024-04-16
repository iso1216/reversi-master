import { Box } from "@mui/material";

const BoardResult = ({board}) => {
	return board.map((row, rowIndex) => (
		<Box key={rowIndex} sx={{ display: 'flex', flexDirection: 'row' }}>
			{row.map((cell, cellIndex) => (
				<Box key={cellIndex} sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					border: '1px solid #444',
					backgroundColor: '#009a00',
						minWidth: 0,
						minHeight: 0,
						height: {md: 100, sm: 60, xs: 38},
						width: {md: 100, sm: 60, xs: 38},
					}}>
					<Box sx={{
						width: {md: 65, sm: 40, xs: 25},
						height: {md: 65, sm: 40, xs: 25},
						backgroundColor: cell ? cell !== 'empty' && 'white' : 'black', // 条件に基づいて背景色を設定
						borderRadius: '50%',
						border: cell !== 'empty' && '1px solid gray',
					}}/>
				</Box>
			))}
		</Box>
	));
};

export default BoardResult;
