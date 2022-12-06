import { Typography } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import {useEffect, useState} from 'react';
import imageBack from './imag/Background2.jpeg'
import locatie from './imag/locatie.png'
import Map from './Map';





function Contact() {
    return(
        <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'92vh',  backgroundPosition:'center'}}>
        <Typography style={{width:'45vw', height:'50vh', justifyContent: 'center', fontWeight: 'bold', fontSize:50, fontFamily:'boldmonospace',color:'#01579B'}}>
            Contact!
        </Typography>
        <Map></Map>
        <Typography style={{width:'30vw', height:'10vh', fontSize:20, fontFamily:'boldmonospace',color:'#01579B'}}>
            Locatia noastra este pe: Strada Lalelelor, nr 25, Timisoara, Romania
            </Typography>
            <Typography>
            Numar de telefon: +40760102183
            </Typography>
            <Typography>
            Adresa de e-mail: office@toothordare.ro
            </Typography>
        </div>
        
    ) 
}

export default Contact;