import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home = ({startGame}) =>{
  return(
    <Box>
			<Typography>Reversi</Typography>
			<Typography
				onClick={() => startGame()}
				component={RouterLink}
				to={'/game'}
			>Play Game</Typography>
    </Box>
	);
}

export default Home;