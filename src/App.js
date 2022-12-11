import logo from './logo.svg';
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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LineAxisOutlined } from '@mui/icons-material';
import axios from 'axios';
function App() {

  // useEffect(() => {
  //   axios.post("programare.php").then((response) => {
  //     console.log("mergeda")
  //   })
  // }, [])

  return (
    <div >
        <Navbar/>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Contact" element={<Contact />}/>
            <Route path="/Price" element={<Price />}/>
            <Route path="/Doctor" element={<Doctor />}/>
            <Route path="/Details" element={<Details />}/>
            <Route path="/AboutUs" element={<AboutUs />}/>
          </Routes>
    </div>
   
  );
}

export default App;
