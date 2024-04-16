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
					width: 65,
					height: 65 }}>
					<Box sx={{
						width: 50,
						height: 50,
						backgroundColor: cell ? cell !== 'empty' && 'white' : 'black', // 条件に基づいて背景色を設定
						borderRadius: '50%',
						border: cell !== 'empty' && '2px solid gray',
					}}/>
				</Box>
			))}
		</Box>
	));
};

export default BoardResult;
