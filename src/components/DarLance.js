import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import useStyles from './DarLance.styles'
import Axios from "axios";

function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function SimpleModal() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeHandler = (e) => {
        setValue({ [e.target.name]: e.target.value })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3001/auction/5dec53efccda890174449c72', value)
        .then(response => {
            console.log('Sucesso');
        })
        .catch(error => {
            console.log(error);
        })
    }

    

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.submit}>
                Dar Lance
            </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Faça o seu Lance!</h2>
                    <form onSubmit={submitHandler}>
                        <TextField
                            required
                            id="outlined-disabled"
                            label="Valor do Lance"
                            className={classes.textField}
                            name="value"
                            autoFocus
                            // value={value}
                            onChange={changeHandler}
                        />
                        <div className={classes.modalButtons}>
                            <Button variant="contained" color="primary" onClick={handleClose} className={classes.submit2}>
                                Cancelar
                        </Button>
                            <Button variant="contained" color="primary" className={classes.submit2} type="submit">
                                Confirmar
                        </Button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
}