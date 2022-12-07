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


    
  function CustomAppBar() {
    const navigateFirst = useNavigate();
      return (
        <Box style={{ width:'100vw',
        height:'8vh'}}>
          <AppBar position="static">
            <Toolbar style={{backgroundColor:'#00BCD4'}}>
              <img src={poza} style={{ width:'7vw'
                ,height:'8vh'}} alt="poza" />
                <Button style={{backgroundColor:'#01579B', marginLeft:'2vw'}} onClick={() => navigateFirst("/")}>
                  <HomeIcon style={{color:'white', fontFamily:'large'}}/>
                </Button>
                <Button style={{top:12.5, right:'40vw', position:'absolute', backgroundColor:'#01579B'}} 
                variant='contained' onClick={() => navigateFirst("/Price")}>
                    PRET
                </Button>
                
                <Button style={{top:12.5, right:'30vw', position:'absolute', backgroundColor:'#01579B'}}
                variant='contained' onClick={() => navigateFirst("/Contact")}>
                    CONTACT
                </Button>
                <Typography style={{top:19.5, right:'1vw', position:'absolute', color:'black'}} >
                  Bine ai venit, Adina!
                </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    

export default CustomAppBar;