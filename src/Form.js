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
import Navbar from './Navbar';
import Autocomplete from '@mui/material/Autocomplete';
import { Grade } from "@mui/icons-material";
import dataSlider from "./dataSlider";


function Form(props){
    const[total,setTotal]=React.useState('');
    const[namechange, setNameChange] = React.useState('');
    const[date,setDate]=React.useState('');
    const[emailF, setEmailF]= React.useState('');
    const[procedura, setProcedura]= React.useState('');
    const[doctor, setDoctor]= React.useState('');
    const[dataProg, setDataProg] = React.useState('');
    const current = new Date();
    const todaydate = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    const [dateWithNoInitialValue,setDateWithNoInitialValue ]= React.useState(null);
    const {emailLog, name}=props;
    const [nameUser, setNameUser]= React.useState('');
    const[progExists, setProgExists] =  React.useState(false)
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
        { label: 'Tatiana Popescu' },
        {label: 'Denisa Golban'},
        {label:'Claudiu Jucu'},
        {label:'Adelin Stoica'}
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
    params.append('nume_prenume', namechange);
    params.append('varsta', date);
    params.append('email', emailLog);
    params.append('proced', procedura);
    params.append('data',dataProg);
    params.append('doctor',doctor);
    axios.post("http://localhost:8080/php/programare.php", params).then((response) => {
        alert("PROGRAMAREA A FOST EFECTUATA CU SUCCES!")
        console.log(response.data)
    })
  }
  async function checkProgExists() {
    try {
      axios.get(`http://localhost:8080/php/check_email_prog.php?email=${emailLog}`).then((response => {
        if (response.data.exists===true) {
          alert("Aveti deja o programare!");
        } 
        else{
          Programare()
        }
        setProgExists(response.data.exists)
        console.log(response.data.exists)
      }));
     
    } catch (error) {
      console.error(error);
    }
  }
  
    return(
        <div style={{height:'100vh',width:'100vw',backgroundImage: `url(${ProgrPhoto})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{justifyContent:'center',display:'flex',}}>
                <div style={{height:'90vh',width:'40vw',backgroundColor:'white', marginTop:'1.5vh'}}>
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
                                    value={emailLog}
                                    multiline
                                    variant="filled"
                                    // onChange={(e)=>{setEmailF(value)
                                    // console.log(e.target.value)}}
                                    
                                    />
                                </Box>
                            </div>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                            <Grid style={{width:'13vw', height:'20vh'}}>
                                <Grid item xs={70} sm={40}>
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
                                    <Stack style={{width:'12vw'}} >
                                        <DateTimePicker
                                            style={{justifyContent:'center', display:'flex'}}
                                            sx={{width:197}}
                                            inputFormat="YYYY-MM-DD HH:mm"
                                            ampm={false}
                                            label="Data si ora"
                                            value={dateWithNoInitialValue}
                                            onChange={(newValue)=>{setDateWithNoInitialValue(newValue)
                                                setDataProg(document.getElementById('datetime').value)}}
                                            renderInput={(params) => <TextField {...params} id="datetime"/>}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                
                            </div>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                            <Grid style={{width:'13vw'}}>
                                <Grid style={{width:'13.2vw'}}>
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
                            setDataProg(document.getElementById('datetime').value)
                            console.log(document.getElementById('datetime').value)
                            console.log(dataProg)
                            checkProgExists()
                        
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