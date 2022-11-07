import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
    import poza from './imag/poza.png';


    
  function Test() {
      return (
        <Box style={{ width:'100vw',
        height:'25vh'}}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
               
              >
                <MenuIcon />
              </IconButton>
              <img src={poza} style={{ width:'7vw'
                ,height:'8vh'}} alt="poza" />
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    

export default Test;