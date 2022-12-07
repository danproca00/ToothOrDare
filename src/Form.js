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
import { red } from "@mui/material/colors";


function Form(){
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
    const[namechange, setNameChange] = React.useState('');
    const[date,setDate]=React.useState('');

    const handleChange = (newValue) => {
    setValue(newValue);
  };
    return(
        <div style={{height:'92vh',width:'100vw',backgroundImage: `url(${ProgrPhoto})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div style={{justifyContent:'center',display:'flex',}}>
                <div style={{height:'90vh',width:'40vw',backgroundColor:'white', marginTop:'2vh'}}>
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
                                    style={{height:'20vh'}}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField 
                                    id="filled-textarea2"
                                    label="Adresa de email"
                                    multiline
                                    variant="filled"
                                    />
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
                                    id="filled-textarea3"
                                    label="Specializarea"
                                    multiline
                                    variant="filled"
                                    />
                                </Box>
                            </div>
                        </div>
                    </div>
                    <div style={{ display:'flex', justifyContent:'center',backgroundColor:'white'}}>
                        <div style={{width:'28vw', height:'20vh'}}>
                            <div style={{justifyContent:'center', display:'flex', marginTop:50}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs} >
                                    <Stack  >
                                        <DateTimePicker
                                            style={{ustifyContent:'center', display:'flex'}}
                                            ampm={false}
                                            label="Data si ora"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                            </div>
                            <div style={{marginTop:'13vh', marginLeft:'9vw', width:'20vw'}}>
                                <Button style={{backgroundColor:'green', color:'black'}} disabled={date===null ? true : false}>Programeaza-ma</Button>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>
        </div>
    )
}
export default Form;