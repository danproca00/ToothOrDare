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


function Form(){
    const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));

    const handleChange = (newValue) => {
    setValue(newValue);
  };
    return(
        <div style={{height:'92vh',width:'100vw', justifyContent:'center',display:'flex', backgroundImage: `url(${ProgrPhoto})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <div style={{height:'90vh',width:'30vw',backgroundColor:'white'}}>
                <div style={{justifyContent:'center', display:'flex', padding:20, color:'black', backgroundColor:'#80deea'}}>
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
                                id="filled-textarea"
                                label="Nume si Prenume"
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
                                    id="outlined-number"
                                    label="Varsta"
                                    type="number"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
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
                                id="filled-textarea"
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
                                id="filled-textarea"
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
                                        label="Data si ora"
                                        value={value}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </Stack>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>    
            </div>
           
        </div>
    )
}
export default Form;