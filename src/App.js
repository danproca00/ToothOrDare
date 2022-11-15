import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import FirstPage from './FirstPage';
import { useState } from "react";
import imageBack from './imag/Background2.jpeg';
import Form from './Form';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div >
        <Navbar/>
        <Router>
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/Form" element={<Form />} />
          </Routes>
        </Router>
    </div>
   
  );
}

export default App;
