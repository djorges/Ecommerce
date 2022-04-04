import React, { useState ,useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import { useParams, useNavigate} from "react-router-dom";
import ProductoService from '../services/ProductoService';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles(()=>({
    root:{
        marginBottom: theme.spacing(2)
    }
}));

export default function DetailsComponent(){
    const navigate = useNavigate();
    const classes = useStyles();
    const { id } = useParams();
    const [producto,setProducto] = useState({id:0, nombre:"", descripcion:"", precio:0, stock:0});


    useEffect(()=>{
        getById();
    },[]);

    const getById = () => {
        //Get object by id
        ProductoService.getById(id)
            .then(function (response) {
                //Set properties
                setProducto(response.data)
            })
            .catch(function (error) {
                //Navigate to error page
                navigate('/pageNotFound');
            });
    };

    return (
        <Container className={classes.root}>
            <Typography 
                gutterBottom 
                variant="h5" 
                component="div">
                Detalles del Producto
            </Typography>
            <Typography 
                variant="h6" 
                component="div">
                <Box 
                    component="span"
                    sx={{ 
                        fontWeight: "bold",
                        marginRight: "7px"
                    }}>
                    Nombre:
                </Box>
                {producto.nombre}
            </Typography>
            <Typography 
                variant="h6" 
                component="div">
                <Box 
                    component="span"
                    sx={{ 
                        fontWeight: "bold",
                        marginRight: "7px"
                    }}>
                    Descripcion: 
                </Box>
                {producto.descripcion}
            </Typography>
            <Typography 
                variant="h6" 
                component="div">
                <Box 
                    component="span"
                    sx={{ 
                        fontWeight: "bold",
                        marginRight: "7px"
                    }}>
                    Precio: 
                </Box> {producto.precio}
            </Typography>
            <Typography 
                variant="h6" 
                component="div">
                <Box 
                    component="span"
                    sx={{ 
                        fontWeight: "bold",
                        marginRight: "7px"
                    }}>
                    Stock: 
                </Box> 
                {producto.stock}
            </Typography>
        </Container>
    );
}