import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home = ({startGame}) =>{
	const matches = useMediaQuery("(min-width:500px)");

  return(
    <Box>
			{matches ? 
				<Typography variant="h1" textAlign={"center"} sx={{py: 10}}>Reversi</Typography> :
				<Typography variant="h3" textAlign={"center"} sx={{py: 10}}>Reversi</Typography>
			}
			<Box position={"relative"} sx={{mb:1}}>
			<Button position={"relative"}
				variant="outlined"
				onClick={() => startGame()}
				component={RouterLink}
				to={'/game'}
				sx={{
					pl: matches ? 10: 5,
					width: matches ? 450 : 200,
					fontSize: matches ? 50 : 20,
					borderRadius: 0,
					border: 2,
					color: "black",
					fontFamily: "-moz-initial",
					background: "linear-gradient(120deg, black 20%, white 20%)",
				}}
			>Play Game</Button>
			</Box>
			<Box>
				<Button position={"relative"}
					variant="outlined"
					onClick={() => startGame()}
					component={RouterLink}
					to={'/cpu'}
					sx={{
						pl: matches ? 10: 5,
						width: matches ? 450 : 200,
						fontSize: matches ? 50 : 20,
						borderRadius: 0,
						border: 2,
						color: "black",
						fontFamily: "-moz-initial",
						background: "linear-gradient(120deg, black 20%, white 20%)",
					}}
				>VS CPU</Button>
			</Box>
		</Box>
	);
}

export default Home;