import React from 'react'
import {Box,Typography,Button,Paper,IconButton} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DvrIcon from '@mui/icons-material/Dvr';
import AddCardIcon from '@mui/icons-material/AddCard';

export default function Card() {
 const cards=[
  {
    title:"MARCA Y GRÁFICO",icons:<AddCardIcon sx={{fontSize:30,color:"#182D7E"}}/>
  },
  {
    title:"DESARROLLADOR DE COMERCIO ELECTRÓNICO",icons:<NotificationsIcon sx={{fontSize:30,color:"#182D7E"}}/>
  },
  {
    title:"DESARROLLADOR WEB",icons:<AddCardIcon sx={{fontSize:30,color:"#182D7E"}}/>
  }
 ]
  return (
    <Box  sx={{display:"flex", justifyContent:"center",alignContent:"center",gap:2,flexWrap:"wrap",mt:2}}>
      {
        cards.map(e=>(
<Paper className="card_action"  key={e.title} elevation={12} sx={{borderRadius:4,maxWidth:360,height:350,display:"flex",justifyContent:"center",alignContent:"center",flexDirection:"column",p:2,textAlign:"center"}}>
<Box
sx={{textAlign:"center"}}
>
    <IconButton sx={{padding:4,bgcolor:"#EDEDED",my:2}}>
      {e.icons}
    </IconButton>
</Box>
<Typography variant='h5' sx={{color:"#182D7E",fontWeight:700}}>
{e.title}
</Typography>
<Typography variant='body2' sx={{fontSize:11,lineHeight:2}}>
ES TU VOZ ES LA FORMA EN QUE EXPRESA LO QUE SU
EMPRESA CREE Y REPRESENTA. EN ESTE DÍA
Y EDAD, ESTAS COSAS SON INNEGABLEMENTE
</Typography>
<Button sx={{color:"#182D7E",fontWeight:600,mt:1}} size="large">
    APRENDE MAS
</Button>

        </Paper>
        ))
      }
        
    </Box>
  )
}
