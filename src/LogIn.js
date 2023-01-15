import React, { useState }from 'react';
import Avatar from '@mui/material/Avatar';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
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
import logphoto from './imag/LogPhoto.jpeg';
import {Routes, Route, useNavigate} from 'react-router-dom';
import axios from 'axios';
// function LogIn(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

function LogIn(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const navigateLog = useNavigate();
  // const [emailLog, setEmailLog]= React.useState('');
  const [parolaLog, setParolaLog] = React.useState('');
  const [error, setError] = useState('');
  const [tot, setTot]=useState(false);
  const {emailLog, setEmailLog} = props;

  // const handleSub = (event) => {
  //   event.preventDefault();

  //   // Utilizeaza o expresie regulata pentru a verifica daca email-ul este valid
  //   const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   if (!emailRegex.test(emailLog)) {
  //     setError('Adresa de email nu este valida');
  //     return;
  //   }

  //   setError('');

  //   // Trimite datele catre server
  //   // ...
  // };
  // const Logare = () => {
  //   const params = new FormData();
  //   params.append('emailLog', emailLog);
  //   params.append('parolaLog', parolaLog);
  //   axios.post("http://localhost:8080/php/sing_up.php", params).then((response) => {
  //     setTot(response.data);  
  //     console.log(response.data);
  //   });
  // }
  async function checkEmailExistsLog() {
    try {
      axios.get(`http://localhost:8080/php/check_user.php?email=${emailLog}&parola=${parolaLog}`).then((response => {
        if (response.data.exists===false) {
          alert("Adresa de email sau parola invalida, te rugam sa incerci din nou");
        } 
        else{
          navigateLog("/First")
        }
        setTot(response.data.exists)
        console.log(response.data.exists)
      }));
     
    } catch (error) {
      console.error(error);
    }
  }
  function handleClick() {
    if (emailLog === ""|| parolaLog === "") {
      alert("Toate campurile sunt obligatorii, iar adresa de email trebuie sa fie valida!");
    } 
    else {
      checkEmailExistsLog()
    }
    
  }
  return (
    <div style={{height:'92vh',width:'100vw',backgroundImage: `url(${logphoto})`, backgroundRepeat:'no-repeat', backgroundSize:'600px'}}>

    
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
            <LocalHospitalIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Intra în cont
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresa de email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e)=>setEmailLog(e.target.value)}
              
            >{error && <p>{error}</p>}</TextField>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Parola"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e)=>setParolaLog(e.target.value)}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={(e) => {
                
               handleClick()}}
            >
              Sign In
            </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid> */}
              <Grid item>
                <Button
                onClick={() => navigateLog("/SignUp")}
                >
                    Nu ai cont? înregistrează-te!
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
    </ThemeProvider>
    </div>
  );
}
export default LogIn