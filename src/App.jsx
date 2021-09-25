import React from 'react';
import { Typography, Button, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './style';

const App = () => {
    const classes = useStyles();
    const Photos = ['Image 1', 'Image 2', 'Image 3', 'Image 4', 'Image 5', 'Image 6', 'Image 7', 'Image 8', 'Image 9', 'Image 10', 'Image 11'];

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera className={classes.icon} />
                    <Typography variant="h6">
                        Photo Album
                    </Typography>
                </Toolbar>
            </ AppBar >
            <main>
                <div>
                    <Container maxWidth="sm" className={classes.container}>
                        <Typography variant="h2" align="center" color="textPrimary" gutternbottom="true">Phone Album</Typography>
                        <Typography variant="h5" align="center" color="textSecondary" gutternbottom="true" paragraph>The top App Bar provides content and actions related to the current screen. It's used for branding, screen titles, navigation, and actions.
                            It can transform into a contextual action bar or be used as a navbar.</Typography>
                        <div>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item>
                                    <Button variant="contained" color="primary" className={classes.button}>See my photos</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" className={classes.button}>
                                        Secondary actions
                                    </Button>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                    <Container className={classes.cardGrid} maxWidth="lg">
                        <Grid container spacing={4}>
                            {Photos && Photos.map((heading, index) => (
                                <Grid item key={index} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}>
                                        <CardMedia className={classes.cardMedia} image="http://source.unsplash.com/random" title="Image title"/>
                                        <CardContent className={classes.cardContent} >
                                            <Typography variant="h5" gutternbottom="true">{heading}</Typography>
                                            <Typography>Media card content the body of the card goes here</Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">View</Button>
                                            <Button size="small" color="primary">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </div>
            </main>
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutternbottom="true">Footer</Typography>
                <Typography variant="subtitle1" align="center" color="textSecondary">Footer content show</Typography>
            </footer>
        </React.Fragment>
    )
}

export default App;