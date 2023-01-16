import logo from './logo.svg';
import React from 'react';
import './App.css';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import { useEffect, useState } from "react";
import imageBack from './imag/Background2.jpeg';
import Form from './Form';
import Contact from './Contact';
import Price from './Price'
import Doctor from './Doctor';
import Details from './Details';
import AboutUs from './AboutUs';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Programari from './Programari';
import PagFirst from './PagFirst';
import Statistici from './Statistici';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';

function App() {

  // useEffect(() => {
  //   axios.post("programare.php").then((response) => {
  //     console.log("mergeda")
  //   })
  // }, [])
  const [nume, setNume]= React.useState('');
  const [parolaS, setParolaS] =  React.useState('');
  const[email, setEmailS] =  React.useState('');
  const[emailExists, setEmailExists] =  React.useState(false)
  const [emailLog, setEmailLog]= React.useState('');
  const [tip, setTip]= React.useState('');
  const[name, setName] = React.useState('');

  useEffect((e) => {
    let params = new FormData()
    params.append('emailLog', emailLog);
    axios.post("http://localhost:8080/php/get_name.php", params).then((response) => {
      setName(response.data[0])
      console.log(response.data)
  })
  });

  return (

    <div >
          
          <Routes>
            <Route path="/" element={<PagFirst emailLog={emailLog} />} />
            <Route path="/Log" element={<LogIn emailLog={emailLog} setEmailLog={setEmailLog} name={name}/>}/>
            <Route path="/SignUp" element={<SignUp nume={nume} setNume={setNume} parolaS={parolaS} setParolaS={setParolaS} email={email} setEmailS={setEmailS} emailExists={emailExists} setEmailExists={setEmailExists} tip={tip} setTip={setTip}/>} />
            <Route path="/First" element={<FirstPage emailLog={emailLog} name={name} setName={setName}/>} />
            <Route path="/Form" element={<Form emailLog={emailLog} name={name} />} />
            <Route path="/Prog" element={<Programari emailLog={emailLog} name={name}/>} />
            <Route path="/Sta" element={<Statistici emailLog={emailLog} name={name}/>} />
            <Route path="/Contact" element={<Contact emailLog={emailLog} name={name}/>}/>
            <Route path="/Price" element={<Price emailLog={emailLog} name={name}/>}/>
            <Route path="/Doctor" element={<Doctor emailLog={emailLog} name={name}/>}/>
            <Route path="/Details" element={<Details emailLog={emailLog} name={name}/>}/>
            <Route path="/AboutUs" element={<AboutUs emailLog={emailLog} name={name}/>}/>
          </Routes>
    </div>
   
  );
}

export default App;
