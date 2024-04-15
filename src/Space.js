import { Box, Button } from "@mui/material";

function Space({row, cell, board, onClick}){
  /*　マスの情報　*/
  return (
    <Box sx={{ border: '1px solid #000', backgroundColor: '#009a00' }}>
    <Button disabled={board[row][cell] !== 'pick'}
      onClick={() => onClick(row,cell)}
      disableRipple
      sx={{
      float: 'left',
      lineHeight: "34px",
      height: "70px",
      mr: "-1px",
      mt: "-1px",
      p: 0,
      borderRadius: 0,
      textAlign: 'center',
      width: "70px",
    }}>
      {board[row][cell] === 'pick' ? 
        <Box sx={{
            width: 10,
            height: 10,
            backgroundColor: 'aliceblue',
            borderRadius: '50%',
          }}
        ></Box> :
        board[row][cell] === false ? 
        <Box sx={{
            width: 50,
            height: 50,
            backgroundColor: 'black',
            borderRadius: '50%',
            border: '1px solid gray',
          }}
        ></Box> :
        board[row][cell] === true &&
        <Box sx={{
            width: 50,
            height: 50,
            backgroundColor: 'white',
            borderRadius: '50%',
            border: '1px solid gray',
          }}
        ></Box>
      }
    </Button>
    </Box>
  );
}

export default Space;