import Card from "./components/Card";
import Contenido from "./components/Contenido";
import Contenido2 from "./components/Contenido2";
import Marcas from "./components/Marcas";
import Navbar from "./components/Navbar"
import Ofresemos from "./components/Ofresemos";
import Principal from "./components/Principal";

import {Box} from '@mui/material';
import Barra from "./components/barra";

const App = () => {
 
  
  return (
    <>
    <header>
    <Navbar/>
    </header>
   <Box component="main" sx={{p:2}}>
    <Box sx={{width:"calc(100vh-100px)"}}>
    <Principal/>
    </Box>
    <Box>
      <Marcas/>
    </Box>
  


    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:2,flexWrap:{xs:"wrap-reverse",lg:"nowrap"},pt:5}} id="paginas">
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:2,width:600,flexWrap:"wrap"}}>
<Contenido /> 
<Contenido/> 
<Contenido/> 
<Contenido/> 
</Box>
<Box>
<Contenido2/>
</Box>
</Box>
<Box sx={{textAlign:"center",p:5 }} id="ofertas">
  <Ofresemos/>
  <Card/>
<Box >

</Box>
</Box>
<Box id="experiencia" sx={{pt:5}}>
  <Barra/>
</Box>

   </Box>
    </>
   
  )
}

export default App