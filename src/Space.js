import { Box, Button } from "@mui/material";

function Space({rowIndex, cellIndex, cell, onClick}){
  /*　マスの情報　*/
  return (
    <Box sx={{ border: '1px solid #444', backgroundColor: '#009a00' }}>
    <Button disabled={cell !== 'pick'}
      onClick={() => onClick(rowIndex,cellIndex
  )}
      disableRipple
      sx={{
      float: 'left',
      lineHeight: "34px",
      height: 65,
      mr: "-1px",
      mt: "-1px",
      p: 0,
      borderRadius: 0,
      textAlign: 'center',
      width: 65,
    }}>
      <Box sx={{
          width: cell === 'pick' ? 8 : 50,
          height: cell === 'pick' ? 8 : 50,
          backgroundColor: cell === 'pick' ? 'whitesmoke' : cell === false ? 'black' : cell === true && 'white',
          opacity: cell === 'pick' && 0.8,
          borderRadius: '50%',
          border: cell !== 'empty' && '1px solid gray',
        }}
      />
    </Button>
    </Box>
  );
}

export default Space;