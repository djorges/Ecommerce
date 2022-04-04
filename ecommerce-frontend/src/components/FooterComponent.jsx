import { Typography } from '@mui/material';
import React,{useEffect, useState} from 'react';

export default function FooterComponent() {
    const [year,setYear] = useState(0); 

    useEffect(()=>{
        //Get current year
        getYear();
    },[]);

    return (
        <Typography 
            textAlign="center" 
            variant="body2" 
            component="div">
            Copyright {year}. All rights reserved.
        </Typography>
    );

    function getYear() {
        var date = new Date().getFullYear();
        setYear(date);
    }
}