import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import SimpleContainer from '../components/Container'
import { Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    contain: {
        flexGrow: 1,
    }
}));

export default function LoginPage(){
    const classes = useStyles();

    return (
        <div className={classes.contain}>
            <Header />
            <SimpleContainer />
        </div>
    );
}