import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import poza from './imag/poza.png';
import {Routes, Route, useNavigate} from 'react-router-dom';

export default function Navbar2() {
    const navigateNav2 = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:'#63e5ff'}}>
        <img src={poza} style={{ width:'7vw',height:'8vh'}} alt="poza" />
          <IconButton
            size="large"
            edge="start"
            style={{color:"black"}}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton >
        
          <Button style={{color:"white", backgroundColor:'black', marginLeft:'80vw'}} 
          onClick={() => navigateNav2("/Log")}
          >Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}