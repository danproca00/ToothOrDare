import { Typography } from '@mui/material';
import * as React from 'react';
import Slider from './Slider';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import photoPag from'./imag/navbar2.jpeg'
import poza3 from './imag/poza3.jpeg'
import poza5 from './imag/poza5.png'
import poza6 from './imag/poza6.jpeg'
import poza4 from'./imag/poza4.jpeg'
import { useState } from 'react';
import { useEffect } from 'react';

function PagFirst(props) {
  const{emailLog} =props;
  // const images = [  photoPag,  poza3,  poza6, poza5];
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [intervalId, setIntervalId] = useState(null);

  // useEffect(() => {
  //   setIntervalId(setInterval(changeBackground, 500));
  //   return () => clearInterval(intervalId);
  // }, []);

  // function changeBackground() {
  //   setTimeout(() => {
  //     setCurrentIndex((currentIndex + 1) % images.length);
  //     changeBackground();
  //   }, 500);
  // }
  

    return(
        
        
        <div style={{ backgroundImage:`url(${poza6})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' ,width: '100vw', height: '100vh'}}>

          <Navbar2/>
            <div style={{height:'10vh', width:'100vw',  marginTop:'10vh'}}>
            <Typography style={{fontSize:'4vw', marginLeft:'16vw', fontFamily:'cursive'}}>
                Bine ati venit la Clinica ToothOrDare🦷!
            </Typography>

            </div>
            
          {/* <div style={{ justifyContent: 'center', display: 'flex' }}>
              <Typography style={{ fontFamily: 'Roboto', fontSize: '6vh', color: '#01579B' }}>Despre noi🤗</Typography>
          </div>
          <div style={{ marginLeft: '4vw' }}>
              <Typography style={{ fontFamily: 'Roboto', fontSize: '3vh', color: '#01579B' }}>Clinica stomatologică ToothOrDare🦷 
              este un loc care se dedică să ofere pacienților noștri cea mai bună îngrijire dentară posibilă.
               Ne străduim să oferim un ambient plăcut și un personal amabil care să vă facă să vă simțiți confortabil și în siguranță 
               în timpul vizitei noastre😌. În plus, ne actualizăm constant cunoștințele și abilitățile pentru a fi la curent cu cele mai noi tehnologii 
               și metode în domeniul îngrijirii dentare🥸. 
               Vă așteptăm cu drag să ne vizitați!🥰</Typography>
          </div> */}
        
      </div>
    ) 
}

export default PagFirst;