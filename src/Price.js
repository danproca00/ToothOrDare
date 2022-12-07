import { Typography } from '@mui/material';
import * as React from 'react';





function Price() {
    return(
        <div style={{width:'100vw', height:'100vh'}}>
            <div style={{width:'100vw', height:'25vh', display:'flex', flexDirection:'row'}}>
                <div style={{backgroundColor:'#00BCD4', height:'20vh', width:'20vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                </div>
                <div style={{backgroundColor:'#00BCD4', height:'20vh', width:'20vw',justifyContent:'space-between', marginLeft:'20vw', marginTop:'2vh'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                </div>
            </div>
            <div style={{width:'100vw', height:'30vh', display:'flex', flexDirection:'row'}}>
                <div style={{backgroundColor:'#00BCD4', height:'20vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                </div>
                <div style={{backgroundColor:'#00BCD4', height:'20vh', width:'30vw',justifyContent:'space-between', marginLeft:'3vw', marginTop:'2vh'}}>
                    <div style={{justifyContent:'center', display:'flex'}}>
                        <Typography style={{fontFamily:'boldmonospace',color:'#01579B', fontSize:'3vh' }}>DETALII</Typography>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Price;