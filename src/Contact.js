import { Typography } from '@mui/material';
import * as React from 'react';
import imageBack from './imag/Background2.jpeg'





function Contact() {
    return(
        <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'92vh',  backgroundPosition:'center'}}>
        <Typography style={{width:'45vw', height:'50vh', justifyContent: 'center'}}>
            aici vor fi contacte
        </Typography>
        </div>
        
    ) 
}

export default Contact;