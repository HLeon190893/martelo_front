import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../components/Header'
import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '47%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function UncontrolledTextField() {
  const classes = useStyles();

  return (
    <div>
        <Header/>
            <form className={classes.container} noValidate autoComplete="off">
                <Typography component="h1" variant="h5">
                     Informações Cadastrais
                </Typography>

            <div>
                <TextField
                    id="outlined-required"
                    label="Nome"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-required"
                    label="CPF"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <p/>
                <TextField
                    id="outlined-disabled"
                    label="E-Mail"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outlined-required"
                    label="CEP"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <p/>
                <TextField
                    id="outline-disabled"
                    label="Estado"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outline-disabled"
                    label="Cidade"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <p/>
                <TextField
                    id="outlined-number"
                    label="Número"
                    type="number"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    id="outline-disabled"
                    label="Complemento"
                    defaultValue=""
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Entrar
                </Button>
            </div>
        </form>
    </div>
  );
}