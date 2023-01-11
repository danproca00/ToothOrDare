import { Typography } from '@mui/material';
import { blue, blueGrey } from '@mui/material/colors';
import {useEffect, useState} from 'react';
import imageBack from './imag/Background2.jpeg'
import Map from './Map';
import pin from'./imag/pin.png';
import {Marker} from 'react-map-gl';
import Navbar from './Navbar';

function Contact() {
    return(
        <div style={{ backgroundColor:'#8aecff', backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'100vh',  backgroundPosition:'center', width:'100vw'}}>
            <Navbar/>
            <div style={{width:100, height:'40vh'}}>
                <Map >
                </Map>
            </div>
            <div style={{width:'80vw', height:'44vh', backgroundColor:'white', marginTop:'3vh',  marginLeft:'11vw'}}>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <Typography style={{fontFamily:'Roboto',fontSize:'6vh', color:'#01579B'}}>CONTACT</Typography>
                </div>
                <div style={{marginLeft:'4vw'}} >
                    <Typography style={{fontFamily:'Roboto',fontSize:'4vh', color:'#01579B'}}>ORAR: Luni-Duminică: 10:00-17:00</Typography>
                </div>
                <div style={{marginLeft:'4vw'}}>
                    <Typography style={{fontFamily:'Roboto',fontSize:'4vh', color:'#01579B'}}>Număr telefon: 0258-754 010</Typography>
                </div>
                <div style={{marginLeft:'4vw'}}>
                    <Typography style={{fontFamily:'Roboto',fontSize:'4vh', color:'#01579B'}}>
                        Adresa de e-mail: office@toothordare.ro
                    </Typography>
                </div>
                <div style={{marginLeft:'4vw'}}>
                    <Typography style={{fontFamily:'Roboto',fontSize:'4vh', color:'#01579B'}}>
                        Locație: Strada Coriolan Brediceanu 2, Timișoara 300077
                    </Typography>
                </div>
                <div style={{marginLeft:'4vw'}}>
                    <Typography style={{fontFamily:'Roboto',fontSize:'4vh', color:'#01579B'}}>
                        Vă așteptăm 😁
                    </Typography>
                </div>
            </div>
        </div>
        
    ) 
}

export default Contact;