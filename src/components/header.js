
import React, { useState } from "react";
import {AppBar, Toolbar, Typography,Tabs,Tab,Button} from '@mui/material/';

import AddHomeIcon from '@mui/icons-material/AddHome';
import { Link } from "react-router-dom";
const Header=()=>{
    const[Count,setCount]=useState();
    return(
        
        <React.Fragment>
        <AppBar sx={{background:'#000000'}}>
        <Toolbar>
        <AddHomeIcon fontsize="large"></AddHomeIcon>
          
           <Typography sx={{paddingleft:'10%'}}>VHOPE</Typography>
           <Tabs sx={{marginLeft:'750px'}} indicatorColor='primary' value={Count} onChange={(e, Count) => setCount(Count)} textColor='inherit'>
          <Link to="/"><Tab label="Home" sx={{color:"white",textDecoration:'none'}}/></Link>
          <Link to="/about"><Tab sx={{color:"white",textDecoration:'none'}} label="About us"  /></Link>
           <Link to="contact"><Tab sx={{color:"white",textDecoration:'none'}} label="contact us"  /></Link>
           </Tabs>
           <Button sx={{marginLeft:'auto', background:'#ffffff',color:'black'}} variant="container"><Link to="/signup">Signup</Link></Button>
          <Button sx={{marginLeft:'10px',background:'#ffffff',color:'black'}} variant  ="container"><Link to="/login">Login</Link></Button>   
           </Toolbar>
        </AppBar>
        </React.Fragment>
    )
}
export default Header;