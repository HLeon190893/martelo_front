import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, Typography, CssBaseline, TextField, FormControlLabel, Button, Grid, Link, Checkbox } from '@material-ui/core'


class FormCadastro extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            value: '',
            capValue: '',
            image: null,
            description: '',
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    imageHandler = (e) => {
        this.setState({ image: e.target.files[0] })
    };

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        // axios.post('http://localhost:3001/auction/image-upload', this.state.image, {
        // headers: {
        // 'Content-Type': 'multipart/form-data'
        // }
        // })
        axios.post('http://localhost:3001/auction', this.state)
            .then(response => {
                alert('Leilão criado com sucesso!');
            })
            .catch(error => {
                alert('Erro ao realizar cadastro de leilão!')
            })
    }

    render() {
        const { name, value, capValue, image, description } = this.state
        // const classes = useStyles();
        return (

            <Container component="main" maxWidth="xs" margin="20em">
                <CssBaseline />

                <br />
                <br />
                <Typography component="h1" variant="h5" margin="20px">
                    Cadastrar Leilão
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
                        id="value"
                        label="Valor (R$)"
                        name="value"
                        autoComplete="value"
                        type="number"
                        value={value}
                        onChange={this.changeHandler}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="capValue"
                        label="Valor de Arremate (R$)"
                        name="capValue"
                        autoComplete="capValue"
                        type="number"
                        value={capValue}
                        onChange={this.changeHandler}
                    />

                    {/* <DropzoneAreaExample
                        name="image"
                        value={image}
                        onChange={this.changeHandler}
                    /> */}
                    <br />
                    <br />
                    <input
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg"
                        onChange={this.imageHandler}
                        required
                    />
                    <br />
                    <br />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        type="textarea"
                        name="description"
                        label="Descrição"
                        id="description"
                        autoComplete="description"
                        value={description}
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

                </form>
                <br />
            </Container>



        )
    }
}
export default FormCadastro;
