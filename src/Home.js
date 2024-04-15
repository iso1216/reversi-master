import React from "react";
import { Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home = ({startGame}) =>{
  return(
    <Box>
			<Typography>オセロ</Typography>
			<Typography
				onClick={() => startGame()}
				component={RouterLink}
				to={'/game'}
			>スタート！！！</Typography>
    </Box>
	);
}

export default Home;