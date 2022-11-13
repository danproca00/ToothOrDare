import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import Typography from '@mui/material/Typography';
    import Button from '@mui/material/Button';
    import IconButton from '@mui/material/IconButton';
    import MenuIcon from '@mui/icons-material/Menu';
    import poza from './imag/poza.png';


    
  function CustomAppBar() {
      return (
        <Box style={{ width:'100vw',
        height:'25vh'}}>
          <AppBar position="static">
            <Toolbar style={{backgroundColor:'#00BCD4'}}>
              <img src={poza} style={{ width:'7vw'
                ,height:'8vh'}} alt="poza" />
                <Button style={{top:12.5, right:'40vw', position:'absolute', color:'#01579B'}} variant='contained'>PRET</Button>
                <Button style={{top:12.5, right:'30vw', position:'absolute', color:'#01579B'}} variant='contained'>CONTACT</Button>
                <Typography style={{top:19.5, right:'1vw', position:'absolute', color:'white'}} >
                  Bine ati venit, Adina!
                </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );
    }
    

export default CustomAppBar;