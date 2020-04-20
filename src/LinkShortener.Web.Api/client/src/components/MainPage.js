import React from "react";
import makeStyles from '@material-ui/core/styles';
import { Button, TextField, Grid, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        height: '100%',
        width: '100%',
    },
    content: {
        margin: '10% 0 10% 0'
    },
    header: {
        margin: '5% 10% 5% 10%',
        color: '#3f51b5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}));

const MainPage = props => {
    const classes = useStyles();

    return (
        <div>
            <div className={classes.header}>
                <Typography variant="h3">Make your URL shorter!</Typography>
            </div>
            <Container maxWidth="md">
                <div className={classes.content}>
                    <Grid container spacing={1}>
                        <Grid item xs={9}>
                            <TextField
                                variant="outlined"
                                label="Paste your link here"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                size="large"
                            >
                                Shorten
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                InputProps={{
                                    readOnly: true
                                }}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default MainPage;
