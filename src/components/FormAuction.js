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
            image: '',
            description: '',
        }
    }

    verify = () => {
        const valueCheck = this.state.value != ''
        const capValueCheck = this.state.capValue != ''
        const imageCheck = this.state.image != ''
        const descriptionCheck = this.state.description != ''
        const nameCheck = this.state.name != ''
        console.log('Chamando Verify', nameCheck && descriptionCheck && valueCheck && capValueCheck && imageCheck)
        return nameCheck && descriptionCheck && valueCheck && capValueCheck && imageCheck;

    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    imageHandler = (e) => {
        this.setState({ image: e.target.files[0] })

    };

    submitHandler = (e) => {
        e.preventDefault()
        const verifica = this.verify();
        if(verifica == false){
            return;
        }
        console.log(this.state);
        let formData = new FormData();
        formData.append('image', this.state.image);
        console.log(formData)
        axios.post('http://localhost:3001/auction/image-upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(res => {
                // console.log(res.data.imageUrl);
                let imageUrl = res.data.imageUrl
                this.setState({ image: imageUrl })
                console.log(this.state.image);
                console.log(this.state);
                axios.post('http://localhost:3001/auction', this.state)
                    .then(response => {
                        window.location.href = `/`;
                        // alert('Leilão criado com sucesso!');
                    })
                    .catch(error => {
                        console.log(error);
                        // alert('Erro ao realizar cadastro de leilão!')
                    })
            })
            .catch(err => {
                console.log(err)
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

                    <br />
                    <br />
                    <TextField
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
                        disabled={this.verify() == false}
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
