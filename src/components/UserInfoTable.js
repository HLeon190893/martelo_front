import React, { useState, useEffect } from 'react'
// import useStyles from './UserInfoTable.styles'
import { Typography, TextField, Button } from '@material-ui/core'

const UserInfoTable = () => {
    const [user, setUser] = useState({})

    async function fetchUser(){
        const user = await fetch('http://localhost:3001/user/123')
        user
        .json()
        .then(res => {
            setUser(res)
        })
        .catch(err => {
            console.warn(err)
        })
    }

    useEffect(()=> {
        fetchUser()
    },[])

    // const classes = useStyles();
    const classes = {}
    return (
        <div className={classes.root}>
            <div>
                <Typography component='h1' variant='h5'>
                    Informações Cadastrais
                </Typography>
            </div>
            <div>
                <form>
                <TextField label='Nome' className={classes.textField} value={user.name} />
                <TextField label='CPF' className={classes.textField} value={user.cpf} />
                <TextField label='E-Mail' classname={classes.textField} value={user.email} />
                <TextField label='CEP' className={classes.textField} value={user.cep} />
                <Button >Salvar</Button>
                </form>
            </div>
        </div>

    )
}
export default UserInfoTable;