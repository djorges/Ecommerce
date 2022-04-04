import React, { useState ,useEffect} from 'react';
import {makeStyles} from '@mui/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { useParams, useNavigate} from "react-router-dom";
import ProductoService from '../services/ProductoService';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { createTheme} from '@mui/material/styles';

const theme = createTheme();

const useStyles = makeStyles(() =>({
    root:{
       '& .MuiTextField-root':{
            margin: theme.spacing(1),
            width: '100%',
        },
        '& .MuiButton-root':{
            margin: theme.spacing(1)
        }
    }
}));

export default function FormComponent(props){
    const { id } = useParams();
    const classes = useStyles();
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0.0);
    const [stock, setStock] = useState(0);

    useEffect(()=>{
        if(props.update){
            getById()
        }
    },[]);

    const getById = () => {
        //Get object by id
        ProductoService.getById(id)
            .then(function (response) {
                //Set properties
                let producto = response.data;
                setName(producto.nombre);
                setDescription(producto.descripcion);
                setPrice(parseFloat(producto.precio));
                setStock(parseInt(producto.stock));
            })
            .catch(function (error) {
                //
                navigate('/pageNotFound');
            });
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();

        //Create object
        var producto = { "nombre":name, "descripcion":description, "precio":price, "stock": stock };

        //Check if has param
        if(props.update){
            producto["id"] = id;

            //Update object
            ProductoService.update(producto)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }else{
            //Save object
            ProductoService.save(producto)
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
        //Return to list page
        navigate('/listar');
    };

    const handleCancel = () => {
        //Return to list page
        navigate('/listar');
    }

    return (
        <Container>
            <Typography 
                variant="h4" 
                component="div"
                mb={2}>
                {props.update ? "Modificar": "Agregar"} Producto
            </Typography>
            {/*Form */}
            <form 
                className={classes.root} 
                noValidate 
                autoComplete="off">
                <TextField 
                    id="outlined-basic" 
                    label="Nombre" 
                    variant="outlined" 
                    value={name} 
                    fullWidth
                    type="text"
                    onChange={(e)=> setName(e.target.value)}
                />
                <TextField 
                    id="outlined-basic" 
                    label="Descripcion"
                    variant="outlined" 
                    type="text"
                    fullWidth
                    value={description} 
                    onChange={(e)=> setDescription(e.target.value)}
                />
                <Grid container spacing={2}>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField 
                            id="outlined-basic"
                            label="Stock" 
                            variant="outlined" 
                            type="number"
                            fullWidth 
                            value={stock} 
                            onChange={(e)=> setStock(parseInt(e.target.value))}
                        />
                    </Grid>
                    <Grid item xs={6} md={6} lg={6}>
                        <TextField 
                            id="outlined-basic" 
                            label="Precio" 
                            variant="outlined" 
                            type="number"
                            fullWidth
                            value={price} 
                            onChange={(e)=> setPrice(parseFloat(e.target.value))}
                        />
                    </Grid>
                </Grid>
                <Grid 
                    container 
                    justifyContent="flex-end">
                     <Button 
                        variant="contained" 
                        onClick={handleCancel}>
                        Cancelar
                    </Button>
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        onClick={handleSubmitForm}>
                        Enviar
                    </Button>   
                </Grid>
            </form>
        </Container>
    );
}