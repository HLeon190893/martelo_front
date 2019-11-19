import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../components/Header'
import { jsxFragment } from '@babel/types';


function Copyright() {
return (
<Typography variant="body2" color="textSecondary" align="center">
  {'Copyright © '}
  <Link color="inherit" href="https://material-ui.com/">
    Your Website
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
</Typography>
);
}

const useStyles = makeStyles(theme => ({
'@global': {
body: {
  backgroundColor: theme.palette.common.white,
},
},
paper: {
marginTop: theme.spacing(12),
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
},
avatar: {
margin: theme.spacing(1),
backgroundColor: theme.palette.secondary.main,
},
form: {
width: '100%', // Fix IE 11 issue.
marginTop: theme.spacing(3),
},
submit: {
margin: theme.spacing(3, 0, 2),
},
text: {
  marginTop: theme.spacing(1),
},
}));

export default function SignUp() {
const classes = useStyles();

return (
  <div>
  <Header />
  
 <Container component="main" maxWidth="xs">
  <CssBaseline />
  <div className={classes.paper}>

    {/* <Avatar className={classes.avatar}> */}
      {/* <LockOutlinedIcon /> */}
    {/* </Avatar> */}
    <Typography component="h1" variant="h5">
      Cadastro de Usuário
    </Typography>
    <form className={classes.form} noValidate>
        <Grid item xs={12}>
          <TextField
            autoComplete="nome"
            name="Nome"
            variant="outlined"
            required
            fullWidth
            id="Nome"
            label="Nome"
            autoFocus
            className={classes.text}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            className={classes.text}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            className={classes.text}
          />
        </Grid>
        
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="cep"
            label="CEP"
            name="cep"
            autoComplete="cep"
            className={classes.text}
          />
        </Grid>
        
       
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Cadastrar
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link href="/login" variant="body2">
            Já tem cadastro? Logue agora!
          </Link>
        </Grid>
      </Grid>
    </form>
  </div>
</Container>
</div>
);
}

