import React, { useState }from 'react';
import Avatar from '@mui/material/Avatar';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import signphoto from './imag/LogPhoto.jpeg'
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { PartyMode } from '@mui/icons-material';
import Autocomplete from '@mui/material/Autocomplete';

const theme = createTheme();

 function SignUp(props) {
  const navigateSign = useNavigate();
  // const [nume, setNume]= React.useState('');
  // const [parolaS, setParolaS] =  React.useState('');
  // const[email, setEmailS] =  React.useState('');
  // const[emailExists, setEmailExists] =  React.useState(false)
const {nume, setNume, parolaS, setParolaS, email, setEmailS, emailExists, setEmailExists, tip, setTip}=props;
const handleTip = (e, value) => {
  console.log(value)
  setTip(value);
}
const tipOm = [
  { label: 'Doctor' },
  {label: 'Pacient'}
  ]
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  function validateEmail(emailS) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailS).toLowerCase());
  }

  function handleClickNume() {
    if (nume === ""||email === "" || !validateEmail(email)||parolaS === "") {
      alert("Toate campurile sunt obligatorii, iar adresa de email trebuie sa fie valida!");
    } 
    else {
      checkEmailExists()
    }
    
  }

  
  const Sign = () => {
    const params = new FormData();
    params.append('email', email);
    params.append('parolaS', parolaS);
    params.append('nume', nume);
    params.append('tip', tip);
    axios.post("http://localhost:8080/php/sign_up.php", params).then((response) => {
        
      console.log(response.data);
    });
  }
  async function checkEmailExists() {
    try {
      axios.get(`http://localhost:8080/php/check_email.php?email=${email}`).then((response => {
        if (response.data.exists===true) {
          alert("Adresa de email este deja inregistrata, te rugam sa alegi alta adresa de email sau sa te autentifici.");
        } 
        else{
          navigateSign('/Log')
          Sign()
        }
        setEmailExists(response.data.exists)
        console.log(response.data.exists)
      }));
     
    } catch (error) {
      console.error(error);
    }
  }
  return (

    <div style={{height:'92vh',width:'100vw',backgroundImage: `url(${signphoto})`, backgroundRepeat:'no-repeat', backgroundSize:'600px'}}>
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
            <AccessibilityNewIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Înregistrează-te
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Nume și Prenume"
                  autoFocus
                  onChange={(e)=>setNume(e.target.value)}
                  
                  
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Adresa de email"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setEmailS(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Parola"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setParolaS(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                  <Autocomplete
                    size="small"
                    disableCloseOnSelect={true}
                    onChange={handleTip}
                    options={tipOm.map((tip) => tip.label)}
                    renderInput={params => (<TextField {...params} variant="outlined" label="Tip"/>)}
                    />
              </Grid>

              
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                handleClickNume()
              
              // handleClickNume()
              // handleClickAdresa()
              // handleClickParola()
            }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default SignUp