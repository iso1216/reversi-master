import { Box, Button } from "@mui/material";

function Space({rowIndex, cellIndex, cell, onClick, player}){
  /*　マスの情報　*/
  return (
    <Box sx={{ border: '1px solid #444', backgroundColor: '#009a00' }}>
    <Button disabled={cell !== 'pick' || !player}
      onClick={() => onClick(rowIndex,cellIndex)}
      disableRipple
      sx={{
        minWidth: 0,
        minHeight: 0,
        height: {md: 100, sm: 60, xs: 38},
        p: 0,
        borderRadius: 0,
        textAlign: 'center',
        width: {md: 100, sm: 60, xs: 38}
      }}>
      <Box sx={{
          width: cell === 'pick' ? {md: 10, sm: 7, xs: 4} : {md: 65, sm: 40, xs: 25},
          height: cell === 'pick' ? {md: 10, sm: 7, xs: 4} : {md: 65, sm: 40, xs: 25},
          backgroundColor: cell === 'pick' ? 'whitesmoke' : cell === false ? 'black' : cell === true && 'white',
          borderRadius: '50%',
          border: cell !== 'empty' && '1px solid gray',
        }}
      />
    </Button>
    </Box>
  );
}

export default Space;