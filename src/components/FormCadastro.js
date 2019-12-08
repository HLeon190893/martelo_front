import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, CssBaseline, TextField, FormControlLabel, Button, Grid, Link, Checkbox } from '@material-ui/core'


class FormCadastro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            cpf: '',
            email: '',
            password: '',
            zipCode: '',
            phoneNumber: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state)
        axios.post('http://localhost:3001/users/create', this.state)
            .then(response => {
                alert('Usuario criado com sucesso!');
            })
            .catch(error => {
                alert('Erro ao realizar cadastro!')
            })
    }


    render() {
        const { email, password, cpf, name, zipCode, phoneNumber } = this.state
        // const classes = useStyles();
        return (

            <Container component="main" maxWidth="xs" margin="20em">
                <CssBaseline />
                {/* <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar> */}
                <br />
                <br />
                <Typography component="h1" variant="h5" margin="20px">
                    Cadastrar
         </Typography>
                <form noValidate onSubmit={this.submitHandler} margin='dense'>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Nome"
                        name="name"
                        autoComplete="name"
                        type="text"
                        autoFocus
                        value={name}
                        onChange={this.changeHandler}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="cpf"
                        label="CPF"
                        name="cpf"
                        autoComplete="cpf"
                        autoFocus
                        value={cpf}
                        onChange={this.changeHandler}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        type="text"
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

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="phoneNumber"
                        label="Telefone"
                        id="phoneNumber"
                        autoComplete="phoneNumber"
                        value={phoneNumber}
                        onChange={this.changeHandler}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="zipCode"
                        label="CEP"
                        id="zipCode"
                        autoComplete="zipCode"
                        value={zipCode}
                        onChange={this.changeHandler}
                    />
                    <br />
                    <br />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Cadastrar
                    </Button>
                    <Grid container>
                        <Grid item xs>

                        </Grid>
                        <Grid item>
                            <Link href="/SignIn" variant="body2">
                                {"Já é cadastrado? Faço seu Login!"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
                <br />
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
export default FormCadastro;
