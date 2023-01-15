import React from 'react';
import  Typography  from '@mui/material/Typography';
import Navbar from './Navbar';
function Programari(props){
    const {emailLog}=props;
    return(
        <div>
            <Navbar emailLog={emailLog}/>
            <Typography>
                Aici va fi pagina cu programari a fiecarui doctor
            </Typography>
        </div>
    )
}
export default Programari