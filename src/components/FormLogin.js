import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, CssBaseline, TextField, FormControlLabel, Button, Grid, Link, Checkbox } from '@material-ui/core'


class FormLogin extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('http://localhost:3001/users/auth', this.state)
      .then(response => {
        alert('Login efetuado com sucesso!');
      })
      .catch(error => {
        alert('Erro ao efetuar o login, confira seu e-mail ou senha!')
      })
  }


  render() {
    const { email, password } = this.state
    // const classes = useStyles();
    return (

      <Container component="main" maxWidth="xs" margin="20em">
        <CssBaseline />
        {/* <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar> */}
        <br/> 
        <br/>       
        <Typography component="h1" variant="h5" margin="20px">
          Login
         </Typography>
        <form noValidate onSubmit={this.submitHandler}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={this.changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={this.changeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar E-mail"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/Forgot" variant="body2">
                Esqueceu sua senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/SignUp" variant="body2">
                {"Não tem uma conta? Cadastre-se!"}
              </Link>
            </Grid>
          </Grid>
        </form>
    </Container>





      // <div>
      //   <form onSubmit={this.submitHandler}>
      //     <div>
      //       <input type="text" name="email" value={email} onChange={this.changeHandler} />
      //     </div>
      //     <div>
      //       <input type="password" name="password" value={password} onChange={this.changeHandler} />
      //     </div>
      //     <button type="submit">Entrar</button>
      //   </form>
      // </div>
    )
  }
}
export default FormLogin;
