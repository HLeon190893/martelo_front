import React, { useState, useEffect } from "react";
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import useStyles from './DarLance.styles'
import { useSnackbar } from 'notistack';
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

const SimpleModal = (props) => {
    const { enqueueSnackbar } = useSnackbar();

    console.log(props)
    console.log(props.auctionId);
    console.log(props.auctionName);
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const changeHandler = (e) => {
        setValue({ [e.target.name]: e.target.value })
    };

    const auctionId = props.auctionId;
    const auctionName = props.auctionName;
    const vlClose = value.value;

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const upp = await Axios.put(`http://localhost:3001/auction/${auctionId}`, value)
            if (upp.status == 200) {
                enqueueSnackbar('Lance Realizado com Sucesso!', { variant: "success" })
                try {
                    const outraCoisa = await Axios.post('http://localhost:3001/transaction', { auctionId, auctionName, vlClose })
                    if (outraCoisa.status == 200) {
                        console.log('teste');
                        window.location.href = `/auction/${auctionId}`;
                    }
                } catch (err) {
                    console.log('werr1', err)
                }
            }
            

        } catch (error) {
            enqueueSnackbar(error.response.data.error, { variant: "error" })
            // console.log('tre', error.toJSON());
            console.log('tre', error.response.data);
        }


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
                            <Button variant="contained" color="secondary" onClick={handleClose} className={classes.submit2}>
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

export default SimpleModal