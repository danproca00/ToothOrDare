import { Typography } from '@mui/material';
import * as React from 'react';
import TatianaPopescu from'./imag/TatianaPopescu.png' 
import DenisaGolban from'./imag/DenisaGolban.png' 
import ClaudiuJucu from'./imag/ClaudiuJucu.png' 
import AdelinStoica from'./imag/AdelinStoica.png'
import BackgroundFirstPage from './imag/BackgroundFirstPage.png' 
import Navbar from './Navbar';



function Doctor(props) {
    const{emailLog, name} =props;

    return(
        <div style={{ backgroundImage: `url(${BackgroundFirstPage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'100vh',  backgroundPosition:'center'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{width:'100vw', height:'92vh'}}>
                <div style={{width:'97vw', height:'46vh', display:'flex', flexDirection:'row'}}>
                    <div style={{backgroundColor:'white', height:'37vh', width:'30vw',justifyContent:'space-between', marginLeft:'5vw', marginTop:'5vh', borderRadius: 4, borderStyle: 'solid', borderColor:'#01579B'}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <img src={TatianaPopescu} alt="TatianaPopescu"/>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh', fontWeight: 'bold'  }}>Dr. Tatiana Popescu</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh' }}>Stomatologie generală</Typography>
                        </div>
                    </div>
                    
                    <div style={{backgroundColor:'white', height:'37vh', width:'30vw',justifyContent:'space-between', marginLeft:'15vw', marginTop:'5vh', borderRadius: 4,borderStyle: 'solid', borderColor:'#01579B'}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <img src={DenisaGolban} alt="DenisaGolban"/>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh', fontWeight: 'bold' }}>Dr. Denisa Golban</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh' }}>Ortodonție</Typography>
                        </div>
                    </div>

                </div>
                <div style={{width:'97vw', height:'46vh', display:'flex', flexDirection:'row'}}>
                    <div style={{backgroundColor:'white', height:'37vh', width:'30vw',justifyContent:'space-between', marginLeft:'20vw', marginTop:'1vh', borderRadius: 4,borderStyle: 'solid', borderColor:'#01579B'}}>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <img src={ClaudiuJucu} alt="ClaudiuJucu"/>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh', fontWeight: 'bold'  }}>Dr. Claudiu Jucu</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh' }}>Tehnician dentar</Typography>
                        </div>
                    </div>

                    <div style={{backgroundColor:'white', height:'37vh', width:'30vw',justifyContent:'space-between', marginLeft:'15vw', marginTop:'1vh', borderRadius: 4,borderStyle: 'solid', borderColor:'#01579B'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                            <img src={AdelinStoica} alt="AdelinStoica"/>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh', fontWeight: 'bold'  }}>Dr. Adelin Stoica</Typography>
                        </div>
                        <div style={{justifyContent:'center', display:'flex'}}>
                            <Typography style={{fontFamily:'boldmonospace', color:'#01579B', fontSize:'3vh' }}>Chirurgie dentară</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Doctor;