import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Typography} from "@mui/material"

export default function BasicList( {setabrir,abrir}) {
     const enlaces=[
        {title:"PAGINAS",hrf:"#paginas"},
        {title:"DE INICIO",hrf:"#"},
        {title:"OFERTAS",hrf:"#ofertas"},
        {title:"EXPERIENCIA",hrf:"#experiencias"},
        {title:"BLOG",hrf:"#blog"},
        {title:"CONTACTOS",hrf:"#"}

     ]
  return (
    <Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
      <Typography variant='h5' sx={{textAlign:"center", fontWeight:900,color:"#182D5A",py:5}}>
                EWEBOT 
            </Typography>
        <List>
          
            {
                enlaces.map(item=>(
<ListItem disablePadding key={item.title}>
            <ListItemButton href={item.hrf} onClick={()=>setabrir(!abrir)} >
           
              <ListItemText  > <Typography sx={{fontWeight:700}}>
              {item.title}
                </Typography></ListItemText>
            </ListItemButton>
          </ListItem>
                ))
            }
          
          
        </List>
      </nav>
     
    </Box>
  );
}