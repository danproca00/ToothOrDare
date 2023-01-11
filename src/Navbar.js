import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
    import poza from './imag/poza.png';
    import NoteAltIcon from '@mui/icons-material/NoteAlt';
    import {Routes, Route, useNavigate} from 'react-router-dom';
    import HomeIcon from '@mui/icons-material/Home';
    import LogoutIcon from '@mui/icons-material/Logout';


    
  function CustomAppBar() {
    const navigateBar = useNavigate();
      return (
        <Box style={{ width:'100vw', height:'8vh'}}>
          <AppBar position="static">
            <Toolbar style={{backgroundColor:'#63e5ff'}}>
              <img src={poza} style={{ width:'7vw',height:'8vh'}} alt="poza" />
                <Button style={{backgroundColor:'#01579B', marginLeft:'2vw', marginTop:'0.5vh'}} onClick={() => navigateBar("/First")}>
                  <HomeIcon style={{color:'white', fontFamily:'large'}}/>
                </Button>
                <Button style={{ right:'40vw', position:'absolute', backgroundColor:'#01579B', marginTop:'0.5vh'}} 
                variant='contained' onClick={() => navigateBar("/Price")}>
                    PRET
                </Button>
                <Button style={{right:'30vw', position:'absolute', backgroundColor:'#01579B', marginTop:'0.5vh'}}
                variant='contained' onClick={() => navigateBar("/Contact")}>
                    CONTACT
                </Button>
                <Button style={{ right:'12vw', position:'absolute', backgroundColor:'#9e9e9e', marginTop:'0.5vh'}}
                variant='contained' onClick={() => navigateBar("/")}>
                  
                    <LogoutIcon style={{color:'black'}}/>
                </Button>
                <Typography style={{ right:'1vw', position:'absolute', color:'black', marginTop:'0.5vh'}} >
                  Bine ai venit, Adina!
                </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    

export default CustomAppBar;