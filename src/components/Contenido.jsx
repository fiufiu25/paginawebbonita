import React from 'react'
import {Box,Typography,Paper} from '@mui/material';
export default function Contenido() {
  return (
   <>
   <Box>
    <Box>
        <Paper elevation={12}  sx={{borderRadius:3,maxWidth:200,height:200,display:"flex",justifyContent:"center",alignItems:"center",p:3}} >
            <Box sx={{
            textAlign:"center"
            }}>
            <Typography variant='h4' sx={{color:"#FF7901",fontWeight:800}}>
        320 MM
       </Typography>
       <Typography variant='body2' sx={{color:"#182D7A",fontSize:12,fontWeight:600}}>
        DICOVER EXPLOLAR THIS PRODUCT 
       </Typography>  
            </Box>
     
        </Paper>
        
      
    </Box>
   </Box>
   </>
  )
}
