import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Home = ({startGame}) =>{
  return(
    <Box>
			<Typography variant="h3">Reversi</Typography>
			<Button
      variant="outlined"
				onClick={() => startGame()}
				component={RouterLink}
				to={'/game'}
        sx={{
          mr: 5
        }}
			>Play Game</Button>
			<Button
        variant="outlined"
				onClick={() => startGame()}
				component={RouterLink}
				to={'/cpu'}
			>VS CPU</Button>
    </Box>
	);
}

export default Home;