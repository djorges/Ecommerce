import React, { useEffect, useState } from 'react';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
import ForwardIcon from '@mui/icons-material/Forward';
import ProductoService from '../services/ProductoService';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
    root: {

    }
}));

export default function ListAllComponent() {
    const classes = useStyles();
    const [productos, setProductos] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {

        //Get data from server
        getAll();
    }, []);

    const getAll = () => {
        //Get object list
        ProductoService.getAll()
        .then(function (response) {
            setProductos(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const deleteById = (id) => {
        //Delete object
        ProductoService.delete(id)
        .then(function (response) {
            //
            console.log(response.data);

            //Remove from list
            const list = productos.filter((producto)=> producto.id !== id);
            setProductos(list);
        })
        .catch(function (error) {
            console.log(error);
        });
    };
    
    const addProducto = () => {
        navigate('/registrar');
    };

    const updateProducto = (id) => {
        navigate(`/modificar/${id}`);
    };

    const detailsProducto = (id) => {
        navigate(`/${id}`);
    };

    return (
        <Container 
            className={classes.root}>
            <Typography 
                variant="h3" 
                gutterBottom 
                component="div">
                Productos
            </Typography>
            <Paper 
                sx={{p: 2}} 
                elevation={3}>
                {
                    productos.map(producto => (
                        <Card key={producto.id}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {producto.id}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Nombre: {producto.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Descripcion: {producto.descripcion}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Precio: {producto.precio}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Stock: {producto.stock}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button variant="contained" onClick={()=> detailsProducto(producto.id)} endIcon={<ForwardIcon />}>
                                    Detalle
                                </Button>
                                <Button variant="contained" onClick={()=> updateProducto(producto.id)} endIcon={<UpdateIcon />}>
                                    Modificar
                                </Button>
                                <Button variant="contained" onClick={()=> deleteById(producto.id)} color="error" endIcon={<DeleteIcon />}>
                                    Borrar
                                </Button>
                            </CardActions>
                        </Card>
                    ))
                }
            </Paper>
            <Container
                sx={{p:3}}>
                <Button 
                    variant="contained" 
                    color="success" 
                    onClick={addProducto}>
                    Agregar
                </Button>
            </Container>
        </Container>
    );    
}