import { Typography } from '@mui/material';
import * as React from 'react';
import imageBack from './imag/pozapret.jpg'
import Navbar from './Navbar';





function Price(props) {
    const{emailLog, name} =props;
    return(
        <div style={{ backgroundColor:'#d8f9ff', backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'100vh',  backgroundPosition:'center'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{width:'100vw', height:'100vh'}}>
                <div style={{width:'97vw', height:'50vh', display:'flex', flexDirection:'row'}}>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'9vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh',fontWeight: 'bold',marginTop:'10vh'}}>Consultație stomatologie generală</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily: 'Roboto',color:'white', fontSize:'4vh'}}>Preț: 150RON</Typography>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'9vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh',fontWeight: 'bold',marginTop:'6vh'}}>Extracții:</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3vh' }}>Extracție simplă nechirurgicală: 150RON</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3vh' }}>Extracție molar de minte: 400RON</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3vh' }}>Extracție chirugicală cu sutură: 200RON</Typography>
                        </div>

                    </div>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'9vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh',fontWeight: 'bold',marginTop:'10vh' }}>Detartraj</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'4vh'}}>Preț: 100RON</Typography>
                        </div>
                    </div>
                </div>
                <div style={{width:'97vw', height:'50vh', display:'flex', flexDirection:'row'}}>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh', fontWeight: 'bold',marginTop:'10vh' }}>Obturație dentară</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'4vh'}}>Preț: 150RON</Typography>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh',fontWeight: 'bold',marginTop:'10vh' }}>Albire profesională</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'4vh'}}>Preț: 100RON</Typography>
                        </div>
                    </div>
                    <div style={{backgroundColor:'#01579B', height:'30vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh', borderRadius: 4}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3.5vh',fontWeight: 'bold',marginTop:'7vh' }}>Pachet</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'3vh',fontWeight: 'bold'}}>Consultație, igienizare periodica și Air flow</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'Roboto',color:'white', fontSize:'4vh'}}>Preț: 250RON</Typography>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Price;