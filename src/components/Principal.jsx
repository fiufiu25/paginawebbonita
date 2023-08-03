import React from 'react'
import {Box,Typography} from '@mui/material';
import Buscador from './Buscador';
function Principal() {
  return (
<>
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
<Box sx={{maxWidth:{xs:600,sm:700,lg:600},textAlign:{xs:"center",lg:"left"}}}>
    <Typography variant='h1' sx={{color:"#FF6C01",fontWeight:900,fontSize:{xs:40,sm:45,md:70},my:2}}>
    ÉXITO DE MARKETING DIGITAL
    </Typography>
    <Typography variant='body2' sx={{color:"#182d5a",fontWeight:510,fontFamily:"sans-serif",lineHeight:1.9}}>
    EL MARKETING DIGITAL SE REFIERE A LA PRÁCTICA DE PROMOCIONAR PRODUCTOS O SERVICIOS UTILIZANDO VARIOS CANALES
Y TECNOLOGÍAS DIGITALES. OPTIMIZACIÓN DE LA GAMA DE ACTIVIDADES.
    </Typography>
   <Box xs={{textAlign:"center"}}>
   <Buscador/>
   </Box>
</Box>
<Box sx={{maxWidth:800}}>
    <Box component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/hero.png' width={"100%"}    height={600}/>
</Box>
</Box>
</>
  )
}

export default Principal
