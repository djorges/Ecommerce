import React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


export default function PageNotFound(){
    return(
        <Container>
            <Typography gutterBottom variant="h3" component="div">
                Error 404 - Page Not Found
            </Typography>
        </Container>
    );
}