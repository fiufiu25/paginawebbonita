import React from 'react'
import {Box} from "@mui/material"
export default function Marcas() {
  return (
   <>
   <Box sx={{p:4,display:"flex",justifyContent:"center",alignContent:"center",gap:2,flexWrap:"wrap",py:5}}>
     <Box component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/l1.png'/>
     <Box  component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/l2.png'/>
     <Box  component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/l3.png'/>
     <Box  component={"img"} src='https://dxdesignz.github.io/Ewebot.com/img/l4.png'/>
     
     <Box/>
   </Box>
   </>
  )
}
