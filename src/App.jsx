import React from 'react';
import {Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
import {PhotoCamera} from '@material-ui/icons';

const App = () => {
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </ AppBar >

        </React.Fragment>
    )
}

export default App;