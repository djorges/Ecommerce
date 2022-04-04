import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function AppbarComponent(){
    return (
        <>
           <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton 
                        edge="start"
                        color="inherit" 
                        aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        color="inherit" 
                        component="div">
                       Ecommerce
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    );
}
