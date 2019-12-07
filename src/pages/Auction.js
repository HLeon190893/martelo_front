import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import TextField from '@material-ui/core/TextField';
import imgMock from './imgMock';
import DarLance from '../components/DarLance'

const useStyles = makeStyles(theme => ({
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        marginTop: theme.spacing(16),
        width: 400,
        height: 500,
        // backgroundColor: 'cyan',
        margin: theme.spacing(2),
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    containerIMG: {
        marginTop: theme.spacing(16),
        width: 500,
        height: 500,
        // backgroundColor: 'cyan',
        margin: theme.spacing(2),
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
    },
    textField: {
        margin: theme.spacing(2),
    },
    submit: {
        width: 250,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '20%'
    },
    bid: {
        width: 400,
        justifyContent: 'space-around',
        marginTop: theme.spacing(5),
    },
    image: {
        width:500,
        height:500,
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.containerIMG}>
    {imgMock.map(img => (
      <img src={img.img} alt={img.title} className={classes.image} />
    ))}
      </div>
      <div className={classes.container}>
            <TextField
                disabled
                id="outlined-disabled"
                label="Nome"
                className={classes.textField}
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Data de Encerramento"
                className={classes.textField}
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Valor Atual"
                className={classes.textField}
            />
            <TextField
                disabled
                id="outlined-disabled"
                label="Descrição do Item"
                className={classes.textField}
            />
            <div className={classes.bid}>
            <DarLance/>                
            </div>
      </div>
    </div>
  );
}