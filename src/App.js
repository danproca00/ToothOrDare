import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import { useState } from "react";
import imageBack from './imag/Background2.jpeg';
import Form from './Form';


function App() {

  return (
    <div >
        <Navbar/>
        <FirstPage/>
        {/* <Form/> */}
    </div>
   
  );
}

export default App;
