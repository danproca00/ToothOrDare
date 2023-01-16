
import  Typography  from '@mui/material/Typography';
import Navbar from './Navbar';
import stat from'./imag/backForm.png'
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
function Statistici(props){
    const {emailLog, name}=props;
    const data = [
        {
          name: 'Ianuarie',
          uv: 50,
          Programari: 10,
          amt: 50,
        },
        {
          name: 'Februarie',
          uv: 50,
          Programari: 24,
          amt: 50,
        },
        {
          name: 'Martie',
          uv: 50,
          Programari: 24,
          amt: 50,
        },
        {
          name: 'Aprilie',
          uv: 50,
          Programari: 30,
          amt: 50,
        },
        {
          name: 'Mai',
          uv: 50,
          Programari: 30,
          amt: 50,
        },
        {
          name: 'Iunie',
          uv: 50,
          Programari: 40,
          amt: 50,
        },
        {
          name: 'Iulie',
          uv: 50,
          Programari: 40,
          amt: 50,
        },
        {
            name: 'August',
            uv: 50,
            Programari: 43,
            amt: 50,
          },
          {
            name: 'Septembrie',
            uv: 50,
            Programari: 43,
            amt: 50,
          },
          {
            name: 'Octombrie',
            uv: 50,
            Programari: 48,
            amt: 50,
          },
          {
            name: 'Noiembrie',
            uv: 50,
            Programari: 49,
            amt: 50,
          },
          {
            name: 'Decembrie',
            uv: 50,
            Programari: 50,
            amt: 50,
          },
      ];
      
    return(
        <div style={{height:'100vh', width:'100vw',backgroundImage: `url(${stat})`, backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
            <Navbar emailLog={emailLog} name={name}/>
            <div style={{justifyContent:'center', display:'flex',height:'50vh', width:'50vw', marginTop:'3vh', marginLeft:'23vw'}}>
               
                <div style={{height:'50vh', width:'80vw'}}>
                    <div style={{height:'5vh', width:'30vw', marginLeft:'30vw'}}>
                    <Typography style={{fontSize:'2vw'}}>PREVIZIUNILE PE ANUL 2023</Typography>
                    </div>
                    <div style={{marginTop:'20vh',height:'50vh', width:'80vw', marginLeft:'2vw'}}>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                        barSize={20}
                        >
                        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Bar dataKey="Programari" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                    
                </div>

            </div>
            
            
        </div>
    )
}
export default Statistici