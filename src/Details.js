import { Typography } from '@mui/material';
import * as React from 'react';
import Navbar from './Navbar';





function Details(props) {
    const{emailLog} =props;

    return(
        <div>
            <Navbar emailLog={emailLog}/>
        </div>
    ) 
}

export default Details;