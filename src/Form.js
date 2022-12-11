import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from "@mui/material";
import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ProgrPhoto from './imag/formphoto.jpeg';
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import Grid from "@mui/material/Grid";
import axios from "axios";

import Autocomplete from '@mui/material/Autocomplete';
import { Grade } from "@mui/icons-material";


function Form(){
    const[namechange, setNameChange] = React.useState('');
    const[date,setDate]=React.useState('');
    const[email, setEmail]= React.useState('');
    const[procedura, setProcedura]= React.useState('');
    const[doctor, setDoctor]= React.useState('');
    const current = new Date();
    const todaydate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [dateWithNoInitialValue,setDateWithNoInitialValue ]= React.useState(null);
    const [total, setTotal] = React.useState([]);
    // const [value, setValue] = React.useState(dayjs(todaydate));
    const handleProced = (e, value) => {
        console.log(value)
        setProcedura(value);
    }

    const handleDoct= (e, value) => {
        console.log(value)
        setDoctor(value);
    }
    const doctors = [
        { label: 'Dr. Tatiana Popescu' },
        {label: 'Dr. Denisa Golban'},
        {label:'Dr. Claudiu Jucu'},
        {label:'Dr. Adelin Stoica'}
        ]

const specializare =[
    { label: 'Consultație stomatologie generală' },
    {label: 'Extracție simplă nechirurgicală'},
    {label:'Extracție molar de minte'},
    {label:'Detartraj'},
    {label:'Obturație dentară'},
    {label:'Extracție chirugicală cu sutură'},
    {label:'Albire profesională'},
    {label:'Pachet'}
        ]
    

  const Programare = () => {
    let params = new FormData()
    params.append('nume_prenume', namechange)
    params.append('varsta', date)
    params.append('email', email)
    params.append('proced', procedura)
    params.append('data', document.getElementById('datetime').value)
    params.append('doctor',doctor)
    axios.post("programare.php", params).then((response) => {
        setTotal(response.data)
      
    })
  }
  
    return(
        <div style={{height:'92vh',width:'100vw',backgroundImage: `url(${ProgrPhoto})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div style={{justifyContent:'center',display:'flex',}}>
                <div style={{height:'90vh',width:'40vw',backgroundColor:'white', marginTop:'1vh'}}>
                    <div style={{justifyContent:'center', display:'flex', color:'black', backgroundColor:'#80deea'}}>
                        <Typography style={{fontFamily:'Comic Sans Bold', fontSize:20}}>PROGRAMARE</Typography>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',backgroundColor:'white'}}>
                        <div style={{ display:'flex', justifyContent:'space-between', width:'28vw', height:'20vh'}}>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                                <Box
                                    component="form"
                                    style={{height:'20vh'}}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                    id="filled-textarea1"
                                    label="Nume si Prenume"
                                    multiline
                                    variant="filled"
                                    onChange={(e)=>setNameChange(e.target.value)}
                                    />
                                    {console.log(namechange)}
                                </Box>
                            </div>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                                <Box
                                    component="form"
                                    style={{height:'20vh'}}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="outlined-number"
                                        label="Varsta"
                                        type="number"
                                        onChange={(e)=>setDate(e.target.value)}
                                        InputLabelProps={{
                                            shrink: true,
                                            
                                        }}
                                    />
                                    {console.log(date)}
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',backgroundColor:'white'}}>
                        <div style={{ display:'flex', justifyContent:'space-between', width:'28vw', height:'20vh'}}>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                                <Box
                                    component="form"
                                    style={{height:'10vh'}}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                    id="filled-textarea2"
                                    label="Adresa de email"
                                    multiline
                                    variant="filled"
                                    onChange={(e)=>{setEmail(e.target.value)
                                    console.log(e.target.value)}}
                                    
                                    />
                                </Box>
                            </div>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                            <Grid style={{width:'11vw'}}>
                                <Grid item xs={70}>
                                    <Autocomplete
                                    multiple
                                    limitTags={2}
                                    size="small"
                                    disableCloseOnSelect={true}
                                    onChange={handleProced}
                                    options={specializare.map((procedura) => procedura.label)}
                                    
                                    renderInput={params => (<TextField {...params} variant="outlined" label="Procedura"/>)}
                                    />
                                </Grid>
                            </Grid>

                            </div>
                        </div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',backgroundColor:'white'}}>
                        <div style={{display:'flex', justifyContent:'space-between',width:'28vw', height:'10vh'}}>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Stack  >
                                        <DateTimePicker
                                            style={{ustifyContent:'center', display:'flex'}}
                                            sx={{width:197}}
                                            inputFormat="YYYY-MM-DD HH:mm"
                                            ampm={false}
                                            label="Data si ora"
                                            value={dateWithNoInitialValue}
                                            onChange={(newValue)=>{setDateWithNoInitialValue(newValue)
                                            console.log(document.getElementById("datetime").value)}}
                                            renderInput={(params) => <TextField {...params} id="datetime"/>}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                
                            </div>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                            <Grid style={{width:'11vw'}}>
                                <Grid style={{width:'11vw'}}>
                                    <Autocomplete
                                    size="small"
                                    disableCloseOnSelect={true}
                                    onChange={handleDoct}
                                    options={doctors.map((doctor) => doctor.label)}
                                    
                                    renderInput={params => (<TextField {...params} variant="outlined" label="Doctor"/>)}
                                    />
                                </Grid>
                            </Grid>
                            </div>
                            
                            
                        </div>
                       
                    </div> 
                    <div style={{marginTop:'9vw', justifyContent:'center', display:'flex' }}>
                        <Button style={{backgroundColor:'#01579B', color:'white'}}
                        onClick={(e)=>{
                            Programare(e.target.innerText)
                        }
                        }>
                            PROGRAMEAZA-MA
                        </Button>
                    </div>   
                </div>
                
            </div>
        </div>
    )
}
export default Form;