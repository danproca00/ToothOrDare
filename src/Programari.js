import { Typography } from '@mui/material';
import * as React from 'react';
import Navbar from './Navbar';
import pozaprog from './imag/pozapret.jpg';
import axios from 'axios';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import poza5 from './imag/poza5.png';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

function Programari(props) {
    const{emailLog, name} =props;
    const[programareDoc, setProgramareDoc]=React.useState([])
    useEffect((e) => {
        let params = new FormData()
        params.append('name', name);
        axios.post("http://localhost:8080/php/get_programare_doc.php", params).then((response) => {
            setProgramareDoc(response.data)
            console.log(response.data)
      })
      },[]);

      const Done = (nume) => {
        let params = new FormData()
        params.append('nume_pacient', nume);
        axios.post("http://localhost:8080/php/anulare_prog_pacient.php", params).then((response) => {
            alert('Programarea a fost efectuata! ')
            console.log(response.data)
      })
      };
    
    return(
        <div style={{height:'100vh', width:'100vw', backgroundImage: `url(${pozaprog})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{height:'50vh', width:'80vw',  marginTop:'5vh',  display:'flex', marginLeft:'3vw', flexDirection:'row'}}>
            {programareDoc == [] ? 
                    alert('Nu aveti nicio programare')
            :
            programareDoc.map((prog)=>(
                <Card sx={{ maxWidth: 364, maxHeight:600, marginLeft:'2vw' }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={poza5}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Programare
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Nume si Prenume:{prog.NUME_SI_PRENUME}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Data si ora:{prog.DATA_SI_ORA}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Procedura:{prog.PROCEDURA}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Doctor:{prog.DOCTOR}
                        </Typography>
                    </CardContent>
                    <CardActions >
                        <Tooltip title="Programare efectuata">
                            <IconButton style={{backgroundColor:'green', color:'white', marginLeft:'15vw',marginBottom:'2vh'}}
                                onClick={() => Done(prog.NUME_SI_PRENUME)}
                            >
                                <CheckBoxIcon />
                            </IconButton>
                        </Tooltip>
                    </CardActions>
                </Card>
            )) }

            </div>
        </div>
    ) 
}

export default Programari;