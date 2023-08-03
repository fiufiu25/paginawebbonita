import React from 'react'
import {Box,Typography,Button} from '@mui/material';
export default function Contenido2() {
  return (
    <>
    <Box sx={{maxWidth:700}}>
        <Typography variant='h4' sx={{color:"#182D5A",
    fontWeight:800
    }}>
        NUESTRAS PAGINAS
        </Typography>
        <Typography variant='h2' sx={{
        color:"#FF7901",fontWeight:800,fontSize:{xs:30,sm:30,md:35,lg:45}
        }}>
        ¡AUMENTA EL TRÁFICO DE TU WEB Y
SITIO WEB!
        </Typography>
       
        <Typography variant="body1" sx={{color:"#182d5a",lineHeight:2,fontWeight:500}}>
        LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT,
SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE
MAGNA ALIQUA. QUIS IPSUM SUSPENDISSE
        </Typography>
        <Box sx={{mt:4}}>
            <button className='cotenidobutton'>APRENDE MAS</button>
            <Button variant='text'sx={{color:"#182D5A",mx:2}} > VERIFICACION DE TRAFICO</Button>
        </Box>
    </Box>
    </>
  )
}
