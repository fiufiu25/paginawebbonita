import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Barrapogreso() {
  return (
   <>
   <Box sx={{py:2}}>
 <Typography variant='h6' sx={{color:"#182D5A",fontFamily:"sans-serif"}}>ANÁLISIS SEO</Typography>
    <Box sx={{maxWidth:500,width:"100%",bgcolor:"#EDEDED",height:12,borderRadius:2}}>
        <Box className="barras" sx={{borderRadius:2}}>

        </Box>
    </Box>
    <Box sx={{py:2}}>
    <Typography variant='h6' sx={{color:"#182D5A",fontFamily:"sans-serif"}}>SITIO WEB Y ANALÍTICA WEB</Typography>
    <Box sx={{maxWidth:500,width:"100%",bgcolor:"#EDEDED",height:12,borderRadius:2}}>
        <Box className="barras1" sx={{borderRadius:2}}>

    </Box>
   
        </Box>
    </Box>
    <Box sx={{py:2}}>
    <Typography variant='h6' sx={{color:"#182D5A",fontFamily:"sans-serif"}}>TRÁFICOS DE VELOCIDAD</Typography>
    <Box sx={{maxWidth:500,width:"100%",bgcolor:"#EDEDED",height:12,borderRadius:2}}>
        <Box className="barras2" sx={{borderRadius:2}}>

        </Box>
    </Box>
    
    </Box>
    
    
   </Box>
   </>
  )
}
