import { Typography } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import {useEffect, useState} from 'react';
import imageBack from './imag/Background2.jpeg'
import locatie from './imag/locatie.png'
import Map from './Map';
import pin from'./imag/pin.png';
import {Marker} from 'react-map-gl'





function Contact() {
    return(
        <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'92vh',  backgroundPosition:'center', width:'100vw'}}>
            <div style={{width:100, height:'40vh'}}>
                <Map >
                    <Marker 
                    longitude={21.2282} 
                    latitude={45.7559} 
                    offsetLeft={-20}
                    offsetTop={-30} >
                        <img src={pin}  style={{width:'100vw',height:'100vh'}}/>
                    </Marker>
                </Map>
            </div>
            <div style={{width:'80vw', height:'44vh', backgroundColor:'white', marginTop:'3vh',  marginLeft:'11vw'}}>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <Typography style={{fontFamily:'fantasy',fontSize:'4vh', color:'black'}}>CONTACT</Typography>
                </div>
                <div style={{marginLeft:'4vw'}} >
                    <Typography>ORAR:</Typography>
                </div>
                <div style={{marginLeft:'2vw'}}>
                    <Typography>aaa</Typography>
                </div>
            </div>
        </div>
        
    ) 
}

export default Contact;