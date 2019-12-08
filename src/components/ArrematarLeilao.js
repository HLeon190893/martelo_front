import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import useStyles from './ArrematarLeilao.styles'
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

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const arrematarLeilao = e => {
        Axios.put('http://localhost:3001/auction/arremate/5dec53efccda890174449c72')
        .then(response => {
            console.log('Arrematado com successo!');
        })
        .then(error => {
            console.log('Erro no Arremate');
        })
    }

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen} className={classes.submit}>
                Arrematar Leilão
        </Button>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={open}
                onClose={handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <h2>Tem certeza que deseja arrematar o leilão? Clique em confirmar.</h2>
                    <div className={classes.modalButtons}>
                        <Button variant="contained" color="primary" onClick={handleClose} className={classes.submit2}>
                            Cancelar
                    </Button>
                        <Button variant="contained" color="primary" className={classes.submit2} onClick={arrematarLeilao}>
                            Confirmar
                    </Button>

                    </div>
                </div>
            </Modal>
        </div>
    );
}