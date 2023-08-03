import React from 'react'
import {Box,Paper} from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
export default function Buscador() {
  return (
    <>
    <Paper elevation={5}  sx={{borderRadius:3,maxWidth:600,position:"relative",bgcolor:"white",p:1,mt:2}}>
    <Box >
        <input type="text"  className="superinput" placeholder='CORREO ELECTRONICO' />
    </Box>
    <Box sx={{position:"absolute",right:10,top:9,textAlign:"center"}}>
        <button className='buttonincon'><SearchIcon/></button>
    </Box>
    </Paper>
    
    </>
  )
}
