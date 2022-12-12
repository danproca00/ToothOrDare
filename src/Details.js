import { Typography } from '@mui/material';
import * as React from 'react';





function Details() {
    return(
        <><div style={{ width: '80vw', height: '34vh', backgroundColor: '#8aecff', marginTop: '3vh', marginLeft: '11vw'}}>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <Typography style={{ fontFamily: 'Roboto', fontSize: '6vh', color: '#01579B' }}>Programare 1</Typography>
            </div>
            <div style={{ marginLeft: '4vw' }}>
                <Typography style={{ fontFamily: 'Roboto', fontSize: '3vh', color: '#01579B' }}>detalii</Typography>
            </div>
        </div><div style={{ width: '80vw', height: '34vh', backgroundColor: '#8aecff', marginTop: '3vh', marginLeft: '11vw'}}>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <Typography style={{ fontFamily: 'Roboto', fontSize: '6vh', color: '#01579B' }}>Programare 2</Typography>
                </div>
                <div style={{ marginLeft: '4vw' }}>
                    <Typography style={{ fontFamily: 'Roboto', fontSize: '3vh', color: '#01579B' }}>detalii</Typography>
                </div>
            </div></>
    ) 
}

export default Details;