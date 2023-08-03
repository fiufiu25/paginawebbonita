import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search'
import Drovers from "./Drovers"
import  { Drawer} from "@mui/material"

import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function Navbar(){
    const [abrir,setabrir]=React.useState(false)
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{bgcolor:"#F2F4F4",display:"flex",
     justifyContent:"space-between"
    }}>
         
          <Box>
            <Box component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/logo%20header.png' height={90} width={120} 
            
            />
          </Box>
         <Box sx={{display:{xs:"none",lg:"block"}}}>
            <ul className='list'>
                <li className='listtem'><a className='enlacea'  href="#paginas">Paginas</a></li>
                <li><a className='enlacea' href="">De inicio</a></li>
                <li><a className='enlacea' href="#ofertas">Ofertas</a></li>
                <li><a className='enlacea' href="#experiencia">Experiencia</a></li>
                <li><a className='enlacea' href="#blog">Blog</a></li>
                <li><a className='enlacea' href="">Contacto</a></li>
            </ul>
         </Box>
         
      
         
         <Box sx={{display:"flex",gap:0.5}} >
         <Button onClick={()=>setabrir(true)}  sx={{px:1,py:2,bgcolor:"white",borderRadius:2,visibility:{xs:"visible",lg:"hidden"}}}>
                <MenuIcon sx={{color:"black"}}/>

            </Button>
            <Button sx={{px:1,py:2,bgcolor:"white",borderRadius:2}}>
                <PersonOutlineOutlinedIcon sx={{color:"black"}}/>

            </Button>
            <Button sx={{px:1,py:2,bgcolor:"white",borderRadius:2,display:{xs:"none",sm:"block"}}} >
                <SearchIcon sx={{color:"black"}}/>

            </Button>
            
           <button className='listbutton'> inscribirse</button>
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
  <Drawer open={abrir} onClose={()=>setabrir(!setabrir)}>
    <Drovers setabrir={setabrir} abrir={abrir}/>
  </Drawer>
    </>
    
  );
}
