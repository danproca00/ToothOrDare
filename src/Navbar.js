import { Typography} from "@mui/material";
import React from "react";
import { useState } from "react";


function Navbar(props) {
    const[name,setName] = useState('')
    const handleNameChange = () => {
        const names = ['ROXI', 'ADINA', 'DAN'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
    }
 
    return (
        <div>
            <div style={{justifyContent:'center', width:'40vw', height:'10vh', display:'flex'}}>
                <button onClick={handleNameChange} style={{backgroundColor:'red'}}>{name}</button>
            </div>
            <div style={{width:'100vw', height:'40vh'}}>
                <Typography>bbbb</Typography>
            </div>
        </div>
    )}

export default Navbar;