import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import { useState } from "react";
import imageBack from './imag/Background2.jpeg'


function App() {

  return (
    <div style={{ backgroundImage: `url(${imageBack})`, backgroundRepeat:'no-repeat', backgroundSize:'cover' , height:'100vh',  backgroundPosition:'center'}}>
        <Navbar/>
        <FirstPage/>
    </div>
   
  );
}

export default App;
