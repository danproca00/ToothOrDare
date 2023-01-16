import { Typography } from '@mui/material';
import * as React from 'react';
import Slider from './Slider';
import Navbar from './Navbar';




function AboutUs(props) {
  const{emailLog, name={name}} =props;
    return(
        <div>
        <Navbar emailLog={emailLog}name={name} />
        <Slider />
        <div style={{ width: '80vw', height: '34vh', backgroundColor: '#8aecff', marginTop: '3vh', marginLeft: '11vw', borderStyle: 'solid', borderColor:'#01579B',borderWidth:'0.2vw'}}>
          <div style={{ justifyContent: 'center', display: 'flex' }}>
              <Typography style={{ fontFamily: 'Roboto', fontSize: '6vh', color: '#01579B' }}>Despre noi🤗</Typography>
          </div>
          <div style={{ marginLeft: '4vw' }}>
              <Typography style={{ fontFamily: 'Roboto', fontSize: '3vh', color: '#01579B' }}>Clinica stomatologică ToothOrDare🦷 
              este un loc care se dedică să ofere pacienților noștri cea mai bună îngrijire dentară posibilă.
               Ne străduim să oferim un ambient plăcut și un personal amabil care să vă facă să vă simțiți confortabil și în siguranță 
               în timpul vizitei noastre😌. În plus, ne actualizăm constant cunoștințele și abilitățile pentru a fi la curent cu cele mai noi tehnologii 
               și metode în domeniul îngrijirii dentare🥸. 
               Vă așteptăm cu drag să ne vizitați!🥰</Typography>
          </div>
        </div>
      </div>
    ) 
}

export default AboutUs;