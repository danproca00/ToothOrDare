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
import poza5 from './imag/poza5.png'

function Details(props) {
    const{emailLog, name} =props;
    const[programare, setProgramare]=React.useState([])

    useEffect((e) => {
        let params = new FormData()
        params.append('emailLog', emailLog);
        axios.post("http://localhost:8080/php/get_programare.php", params).then((response) => {
            setProgramare(response.data)
            console.log(response.data)
      })
      },[]);
      const Anulare = () => {
        let params = new FormData()
        params.append('emailLog', emailLog);
        axios.post("http://localhost:8080/php/anulare_prog.php", params).then((response) => {
            alert('Programarea a fost anulata! ')
            console.log(response.data)
      })
      };

    return(
        <div style={{height:'100vh', width:'100vw', backgroundImage: `url(${pozaprog})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{height:'45vh', width:'80vw',  marginTop:'5vh', marginLeft:'2vw', display:'flex', justifyContent:'space-between', flexDirection:'row'}}>
            {programare == [] ? 
                    alert('Nu aveti nicio programare')
            //     programare.map((prog)=>(
            //     <Card sx={{ maxWidth: 364, maxHeight:600 }}>
            //         <Typography>Nu aveti nicio programare</Typography>
            //         <CardMedia
            //             component="img"
            //             alt="green iguana"
            //             height="140"
            //             image={poza5}
            //         />
            //         <CardContent>
            //             <Typography gutterBottom variant="h5" component="div">
            //             Programare
            //             </Typography>
            //             <Typography variant="body2" color="text.secondary">
            //                 Data si ora:{prog.DATA_SI_ORA}
            //             </Typography>
            //             <Typography variant="body2" color="text.secondary">
            //                 Procedura:{prog.PROCEDURA}
            //             </Typography>
            //             <Typography variant="body2" color="text.secondary">
            //                 Doctor:{prog.DOCTOR}
            //             </Typography>
            //         </CardContent>
            //         <CardActions>
            //             <Button size="small" style={{backgroundColor:'red', color:'white', marginLeft:'9vw'}}>Anuleaza programarea</Button>
            //         </CardActions>
            //     </Card>
            // )) 
            :
            programare.map((prog)=>(
                <Card sx={{ maxWidth: 364, maxHeight:600 }}>
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
                    <CardActions>
                        <Button size="small" 
                        style={{backgroundColor:'red', color:'white', marginLeft:'9vw'}}
                        onClick={() => Anulare()}
                        >Anuleaza programarea
                        </Button>
                    </CardActions>
                </Card>
            )) }

            </div>
        </div>
    ) 
}

export default Details;