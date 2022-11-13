import { Button, Typography } from "@mui/material";
import React from "react";
import imageBack from './imag/Background2.jpeg'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Form from "./Form";
import {Routes, Route, useNavigate} from 'react-router-dom';

function FirstPage(){
    // const navigate = useNavigate();

    // const handleClick = () => {
    //     // 👇️ navigate programmatically
    //     navigate('/form');
    //   };
    
    return(
        <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'92vh',  backgroundPosition:'center'}}>
            <div style={{right:'3vw', position:'absolute', top:'15vh'}}>
            
                <Button className="button"
                variant='contained' 
                >
                    <NoteAltIcon/>
                    PROGRAMEAZA-TE ACUM!
                </Button>
                
            </div>
            <div style={{justifyContent:'space-between', display:'flex', flexDirection:'row'}}>
                <div style={{backgroundColor:'#00BCD4', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh',marginLeft:'10vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DOCTOR</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button >
                            <VaccinesIcon style={{width:'15vw', height:'15vh'}}/>
                        </Button>
                    </div>
                
                </div>
                <div style={{backgroundColor:'#00BCD4', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh', marginLeft:'40vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>PROGRAMARE</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button >
                            <DescriptionIcon style={{width:'15vw', height:'15vh'}}/>
                        </Button>
                    </div>
                </div>
                <div style={{backgroundColor:'#00BCD4', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh', marginLeft:'70vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DESPRE NOI</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button >
                            <PeopleAltIcon style={{width:'15vw', height:'13vh'}}/>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FirstPage