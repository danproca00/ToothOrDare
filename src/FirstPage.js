import { Button, Typography } from "@mui/material";
import React from "react";
import imageBack from './imag/altapoza.jpeg'
import VaccinesIcon from '@mui/icons-material/Vaccines';
import DescriptionIcon from '@mui/icons-material/Description';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import Form from "./Form";
import Doctor from "./Doctor";
import Details from "./Details";
import {Routes, Route, useNavigate} from 'react-router-dom';


function FirstPage(props){
    const navigateFirst = useNavigate();
    return(
        <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'92vh',  backgroundPosition:'center'}}>
            <div style={{right:'3vw', position:'absolute', top:'15vh'}}>
            
                <Button className="button"
                variant='contained' onClick={() => navigateFirst("/Form")}
                >
                    <NoteAltIcon/>
                    PROGRAMEAZA-TE ACUM!
                </Button>
                
            </div>
            <div style={{justifyContent:'space-between', display:'flex', flexDirection:'row'}}>
                <div style={{backgroundColor:'#96ECFC', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh',marginLeft:'10vw', borderRadius: 4, borderStyle: 'solid', borderColor:'#01579B', borderWidth:'0.2vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DOCTOR</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button  onClick={() => navigateFirst("/Doctor")}>
                            <VaccinesIcon style={{width:'15vw', height:'15vh'}}/>
                        </Button>
                    </div>
                
                </div>
                <div style={{backgroundColor:'#96ECFC', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh', marginLeft:'40vw', borderRadius: 4, borderStyle: 'solid', borderColor:'#01579B',borderWidth:'0.2vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>PROGRAMARE</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button  onClick={() => navigateFirst("/Details")} >
                            <DescriptionIcon style={{width:'15vw', height:'15vh'}}/>
                        </Button>
                    </div>
                </div>
                <div style={{backgroundColor:'#96ECFC', height:'35vh', width:'20vw',justifyContent:'space-between',position:'absolute', bottom:'3vh', marginLeft:'70vw', borderRadius: 4,  borderStyle: 'solid', borderColor:'#01579B',borderWidth:'0.2vw'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DESPRE NOI</Typography>
                    </div>
                    <div style={{width:'20vw', height:'25vh', justifyContent:'center', display:'flex'}}>
                        <Button  onClick={() => navigateFirst("/AboutUs")}>
                            <PeopleAltIcon style={{width:'15vw', height:'13vh'}}/>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default FirstPage