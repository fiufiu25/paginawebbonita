import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Barrapogreso from './barrapogreso'

export default function Barra() {
  return (
    <>
    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center", flexWrap:"wrap",gap:5}}>
    <Box sx={{maxWidth:700}}>
    <Typography variant='h4' sx={{fontWeight:600,color:"#182D5A",textAlign:{xs:"center",sm:"left"}}}>
 Experiencia
 </Typography>
 <Typography variant='h2' sx={{fontWeight:900,color:" #FF7501",fontSize:{xs:35,md:"auto"},textAlign:{xs:"center",sm:"left"}}}>
 pagar por calificado  tráfico de marketing
 </Typography>
 <Typography variant='h6' sx={{fontFamily:"sans-serif",textAlign:"justify"}}>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea error, pariatur consequatur commodi eius?
 </Typography>
 <Barrapogreso/>
 <Box sx={{mt:4}}>
            <button className='cotenidobutton'>APRENDE MAS</button>
            <Button variant='text'sx={{color:"#182D5A",mx:2,mt:2}} > VERIFICACION DE TRAFICO</Button>
        </Box>
    </Box>
    <Box sx={{maxWidth:600}}>
        <Box component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/experience.png' height={500} width={"100%"} />
    </Box>
    </Box>

   

    </>
  )
}
