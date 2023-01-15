import { Typography } from '@mui/material';
import * as React from 'react';
import Navbar from './Navbar';
import pozaprog from './imag/pozapret.jpg';
import axios from 'axios';
import { useEffect } from 'react';

function Details(props) {
    const{emailLog} =props;
    const[programare, setProgramare]=React.useState([])

    useEffect((e) => {
        let params = new FormData()
        params.append('emailLog', emailLog);
        axios.post("http://localhost:8080/php/get_programare.php", params).then((response) => {
            setProgramare(response.data)
              console.log(response.data)
              console.log(programare)
      })
      },[]);
      

    return(
        <div style={{height:'100vh', width:'100vw', backgroundImage: `url(${pozaprog})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <Navbar emailLog={emailLog}/>
            <div style={{height:'30vh', width:'30vw', backgroundColor:'white' , marginTop:'5vh', marginLeft:'2vw', borderRadius: 4}}>
             
                {/* {programare.map((prog, index) => (
                    <div key={index} style={{width:'30vw', height:'10vh'}}>
                        <Typography>
                        Programarea din data de {prog.DATA_SI_ORA}
                        {console.log(prog.DATA_SI_ORA)}
                        </Typography>
                </div>
))}  */}





            </div>
        </div>
    ) 
}

export default Details;